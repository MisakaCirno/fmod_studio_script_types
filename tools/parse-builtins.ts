declare const require: any;

const fs = require("fs");
const path = require("path");

export interface BuiltinFileSnapshot {
    name: string;
    path: string;
    bytes: number;
    text: string;
}

export interface InternalExtensionSignature {
    name: string;
    expectedArgs: string[];
    returnEntityTypeHint: string | null;
}

export type ExtensionCallKind =
    "runExtension" |
    "runRootExtension" |
    "native" |
    "internal" |
    "unknown";

export interface ExtensionMethodSnapshot {
    entityName: string;
    methodName: string;
    args: string[];
    argOptionalFlags: boolean[];
    sourcePath: string;
    callKind: ExtensionCallKind;
    internalExtensionName: string | null;
    expectedArgsFromInternal: string[] | null;
    returnEntityTypeHint: string | null;
}

export interface BuiltinParseSummary {
    files: BuiltinFileSnapshot[];
    internalExtensionSignatures: InternalExtensionSignature[];
    extensionMethods: ExtensionMethodSnapshot[];
    warnings: string[];
}

function isIdentifierStart(ch: string): boolean {
    return /[A-Za-z_$]/.test(ch);
}

function isIdentifierPart(ch: string): boolean {
    return /[A-Za-z0-9_$]/.test(ch);
}

function skipSpacesAndComments(text: string, start: number, end: number): number {
    let i = start;
    while (i < end) {
        const ch = text.charAt(i);
        const next = i + 1 < end ? text.charAt(i + 1) : "";
        if (/\s/.test(ch)) {
            i += 1;
            continue;
        }
        if (ch === "/" && next === "/") {
            i += 2;
            while (i < end && text.charAt(i) !== "\n") {
                i += 1;
            }
            continue;
        }
        if (ch === "/" && next === "*") {
            i += 2;
            while (i + 1 < end) {
                if (text.charAt(i) === "*" && text.charAt(i + 1) === "/") {
                    i += 2;
                    break;
                }
                i += 1;
            }
            continue;
        }
        break;
    }
    return i;
}

function readQuotedString(text: string, quoteIndex: number, end: number): { value: string; nextIndex: number } | null {
    const quote = text.charAt(quoteIndex);
    if (quote !== "'" && quote !== "\"") {
        return null;
    }
    let i = quoteIndex + 1;
    let out = "";
    while (i < end) {
        const ch = text.charAt(i);
        if (ch === "\\") {
            if (i + 1 < end) {
                out += text.charAt(i + 1);
                i += 2;
                continue;
            }
            i += 1;
            continue;
        }
        if (ch === quote) {
            return { value: out, nextIndex: i + 1 };
        }
        out += ch;
        i += 1;
    }
    return null;
}

function readIdentifier(text: string, start: number, end: number): { value: string; nextIndex: number } | null {
    if (start >= end) {
        return null;
    }
    const first = text.charAt(start);
    if (!isIdentifierStart(first)) {
        return null;
    }
    let i = start + 1;
    while (i < end && isIdentifierPart(text.charAt(i))) {
        i += 1;
    }
    return { value: text.slice(start, i), nextIndex: i };
}

function skipString(text: string, i: number, end: number): number {
    const quote = text.charAt(i);
    i += 1;
    while (i < end) {
        const ch = text.charAt(i);
        if (ch === "\\") {
            i += 2;
            continue;
        }
        if (ch === quote) {
            return i + 1;
        }
        i += 1;
    }
    return i;
}

function findMatchingBrace(text: string, openIndex: number, end: number): number {
    let depth = 0;
    let i = openIndex;
    while (i < end) {
        const ch = text.charAt(i);
        const next = i + 1 < end ? text.charAt(i + 1) : "";

        if (ch === "'" || ch === "\"") {
            i = skipString(text, i, end);
            continue;
        }
        if (ch === "/" && next === "/") {
            i += 2;
            while (i < end && text.charAt(i) !== "\n") {
                i += 1;
            }
            continue;
        }
        if (ch === "/" && next === "*") {
            i += 2;
            while (i + 1 < end) {
                if (text.charAt(i) === "*" && text.charAt(i + 1) === "/") {
                    i += 2;
                    break;
                }
                i += 1;
            }
            continue;
        }
        if (ch === "{") {
            depth += 1;
        } else if (ch === "}") {
            depth -= 1;
            if (depth === 0) {
                return i;
            }
        }
        i += 1;
    }
    return -1;
}

function scanValueEnd(text: string, start: number, end: number): number {
    let i = start;
    let braceDepth = 0;
    let bracketDepth = 0;
    let parenDepth = 0;

    while (i < end) {
        const ch = text.charAt(i);
        const next = i + 1 < end ? text.charAt(i + 1) : "";

        if (ch === "'" || ch === "\"") {
            i = skipString(text, i, end);
            continue;
        }
        if (ch === "/" && next === "/") {
            i += 2;
            while (i < end && text.charAt(i) !== "\n") {
                i += 1;
            }
            continue;
        }
        if (ch === "/" && next === "*") {
            i += 2;
            while (i + 1 < end) {
                if (text.charAt(i) === "*" && text.charAt(i + 1) === "/") {
                    i += 2;
                    break;
                }
                i += 1;
            }
            continue;
        }
        if (ch === "{") {
            braceDepth += 1;
            i += 1;
            continue;
        }
        if (ch === "}") {
            if (braceDepth === 0 && bracketDepth === 0 && parenDepth === 0) {
                return i;
            }
            braceDepth -= 1;
            i += 1;
            continue;
        }
        if (ch === "[") {
            bracketDepth += 1;
            i += 1;
            continue;
        }
        if (ch === "]") {
            bracketDepth -= 1;
            i += 1;
            continue;
        }
        if (ch === "(") {
            parenDepth += 1;
            i += 1;
            continue;
        }
        if (ch === ")") {
            parenDepth -= 1;
            i += 1;
            continue;
        }
        if (ch === "," && braceDepth === 0 && bracketDepth === 0 && parenDepth === 0) {
            return i;
        }
        i += 1;
    }

    return end;
}

interface ObjectEntry {
    key: string;
    valueText: string;
}

function parseObjectEntries(objectText: string): ObjectEntry[] {
    const entries: ObjectEntry[] = [];
    const len = objectText.length;
    if (len < 2 || objectText.charAt(0) !== "{") {
        return entries;
    }

    let i = 1;
    const end = len - 1;

    while (i < end) {
        i = skipSpacesAndComments(objectText, i, end);
        if (i >= end) {
            break;
        }
        const ch = objectText.charAt(i);
        if (ch === "}") {
            break;
        }

        let keyRead: { value: string; nextIndex: number } | null = null;
        if (ch === "'" || ch === "\"") {
            keyRead = readQuotedString(objectText, i, end);
        } else {
            keyRead = readIdentifier(objectText, i, end);
        }
        if (!keyRead) {
            i += 1;
            continue;
        }

        i = skipSpacesAndComments(objectText, keyRead.nextIndex, end);
        if (i >= end || objectText.charAt(i) !== ":") {
            i += 1;
            continue;
        }
        i += 1;
        i = skipSpacesAndComments(objectText, i, end);

        const valueStart = i;
        const valueEnd = scanValueEnd(objectText, valueStart, end);
        const valueText = objectText.slice(valueStart, valueEnd).trim();
        entries.push({
            key: keyRead.value,
            valueText
        });

        i = valueEnd;
        if (i < end && objectText.charAt(i) === ",") {
            i += 1;
        }
    }

    return entries;
}

function findObjectLiteralAfter(text: string, marker: RegExp): string | null {
    const match = marker.exec(text);
    if (!match) {
        return null;
    }
    let start = match.index + match[0].length;
    start = skipSpacesAndComments(text, start, text.length);
    if (start >= text.length || text.charAt(start) !== "{") {
        return null;
    }
    const close = findMatchingBrace(text, start, text.length);
    if (close < 0) {
        return null;
    }
    return text.slice(start, close + 1);
}

function parseFunctionArgs(valueText: string): string[] | null {
    const match = /^function\s*\(([^)]*)\)/.exec(valueText);
    if (!match) {
        return null;
    }
    const raw = match[1].trim();
    if (!raw) {
        return [];
    }
    const tokens = raw.split(",");
    const args: string[] = [];
    for (let i = 0; i < tokens.length; i += 1) {
        const name = tokens[i].trim();
        if (!name) {
            continue;
        }
        args.push(name);
    }
    return args;
}

function splitTopLevelCSV(text: string): string[] {
    const parts: string[] = [];
    let i = 0;
    const end = text.length;
    let braceDepth = 0;
    let bracketDepth = 0;
    let parenDepth = 0;
    let last = 0;

    while (i < end) {
        const ch = text.charAt(i);
        const next = i + 1 < end ? text.charAt(i + 1) : "";

        if (ch === "'" || ch === "\"") {
            i = skipString(text, i, end);
            continue;
        }
        if (ch === "/" && next === "/") {
            i += 2;
            while (i < end && text.charAt(i) !== "\n") {
                i += 1;
            }
            continue;
        }
        if (ch === "/" && next === "*") {
            i += 2;
            while (i + 1 < end) {
                if (text.charAt(i) === "*" && text.charAt(i + 1) === "/") {
                    i += 2;
                    break;
                }
                i += 1;
            }
            continue;
        }

        if (ch === "{") {
            braceDepth += 1;
        } else if (ch === "}") {
            braceDepth -= 1;
        } else if (ch === "[") {
            bracketDepth += 1;
        } else if (ch === "]") {
            bracketDepth -= 1;
        } else if (ch === "(") {
            parenDepth += 1;
        } else if (ch === ")") {
            parenDepth -= 1;
        } else if (ch === "," && braceDepth === 0 && bracketDepth === 0 && parenDepth === 0) {
            parts.push(text.slice(last, i).trim());
            last = i + 1;
        }
        i += 1;
    }

    const tail = text.slice(last).trim();
    if (tail) {
        parts.push(tail);
    }
    return parts;
}

function extractRunExtensionArgumentArrayItems(functionBodyText: string): string[] | null {
    const runMatch = /run(?:Root)?Extension\s*\(\s*[^,]+,\s*\[([\s\S]*?)\]\s*\)/.exec(functionBodyText);
    if (!runMatch) {
        return null;
    }
    const listText = runMatch[1].trim();
    if (!listText) {
        return [];
    }
    return splitTopLevelCSV(listText);
}

function inferOptionalFlags(wrapperArgs: string[], expectedArgsFromInternal: string[] | null, callArgItems: string[] | null): boolean[] {
    const flags: boolean[] = [];
    for (let i = 0; i < wrapperArgs.length; i += 1) {
        let required = true;
        if (expectedArgsFromInternal && callArgItems && callArgItems.length > 0) {
            const argName = wrapperArgs[i];
            const mappedIndex = callArgItems.indexOf(argName);
            if (mappedIndex >= 0) {
                required = mappedIndex < expectedArgsFromInternal.length;
            }
        }
        flags.push(!required);
    }
    return flags;
}

function detectCallKind(bodyText: string): ExtensionCallKind {
    if (bodyText.indexOf("runRootExtension(") >= 0) {
        return "runRootExtension";
    }
    if (bodyText.indexOf("runExtension(") >= 0) {
        return "runExtension";
    }
    if (bodyText.indexOf("this._native.") >= 0 || bodyText.indexOf("._native.") >= 0) {
        return "native";
    }
    if (bodyText.indexOf("studio._internal.") >= 0) {
        return "internal";
    }
    return "unknown";
}

function extractInternalExtensionName(bodyText: string): string | null {
    const match = /studio\._internal\.extensions\.([A-Za-z_$][A-Za-z0-9_$]*)/.exec(bodyText);
    if (!match) {
        return null;
    }
    return match[1];
}

function inferReturnEntityTypeHint(functionBodyText: string, knownByName: Record<string, InternalExtensionSignature>): string | null {
    const createdVarToTypes: Record<string, Record<string, true>> = Object.create(null);

    function splitTypeHint(typeHint: string): string[] {
        const parts = String(typeHint || "").split("|");
        const out: string[] = [];
        for (let i = 0; i < parts.length; i += 1) {
            const t = parts[i].trim();
            if (!t) {
                continue;
            }
            out.push(t);
        }
        return out;
    }

    function addVarType(varName: string, entityType: string | null): void {
        if (!varName || !entityType || !String(entityType).trim()) {
            return;
        }
        if (!createdVarToTypes[varName]) {
            createdVarToTypes[varName] = Object.create(null);
        }
        const hints = splitTypeHint(entityType);
        for (let i = 0; i < hints.length; i += 1) {
            createdVarToTypes[varName][hints[i]] = true;
        }
    }

    const createAssignRegex = /var\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*project\.create\(\s*["']([A-Za-z_$][A-Za-z0-9_$]*)["']\s*\)/g;
    let m: RegExpExecArray | null;
    while ((m = createAssignRegex.exec(functionBodyText)) !== null) {
        addVarType(m[1], m[2]);
    }

    const helperAssignRegex = /var\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*this\.([A-Za-z_$][A-Za-z0-9_$]*)\s*\(/g;
    while ((m = helperAssignRegex.exec(functionBodyText)) !== null) {
        const helperName = m[2];
        const known = knownByName[helperName];
        addVarType(m[1], known && known.returnEntityTypeHint ? known.returnEntityTypeHint : null);
    }

    const aliasAssignRegex = /var\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*;/g;
    while ((m = aliasAssignRegex.exec(functionBodyText)) !== null) {
        const target = m[1];
        const source = m[2];
        const sourceTypes = createdVarToTypes[source];
        if (!sourceTypes) {
            continue;
        }
        const keys = Object.keys(sourceTypes);
        for (let i = 0; i < keys.length; i += 1) {
            addVarType(target, keys[i]);
        }
    }

    const isOfTypeRegex = /([A-Za-z_$][A-Za-z0-9_$]*)\.isOfType\(\s*["']([A-Za-z_$][A-Za-z0-9_$]*)["']\s*\)/g;
    while ((m = isOfTypeRegex.exec(functionBodyText)) !== null) {
        addVarType(m[1], m[2]);
    }

    const directCreateReturn = /return\s+project\.create\(\s*["']([A-Za-z_$][A-Za-z0-9_$]*)["']\s*\)\s*;/.exec(functionBodyText);
    if (directCreateReturn) {
        return directCreateReturn[1];
    }

    const returnedTypes: Record<string, true> = Object.create(null);
    const returnVarRegex = /return\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*;/g;
    while ((m = returnVarRegex.exec(functionBodyText)) !== null) {
        const varName = m[1];
        const varTypes = createdVarToTypes[varName];
        if (!varTypes) {
            continue;
        }
        const keys = Object.keys(varTypes);
        for (let i = 0; i < keys.length; i += 1) {
            returnedTypes[keys[i]] = true;
        }
    }
    const directVarTypes = Object.keys(returnedTypes);
    if (directVarTypes.length === 1) {
        return directVarTypes[0];
    }
    if (directVarTypes.length > 1) {
        directVarTypes.sort();
        return directVarTypes.join("|");
    }

    const returnThisCall = /return\s+this\.([A-Za-z_$][A-Za-z0-9_$]*)\s*\(/.exec(functionBodyText);
    if (returnThisCall) {
        const callee = returnThisCall[1];
        const known = knownByName[callee];
        if (known && known.returnEntityTypeHint) {
            return known.returnEntityTypeHint;
        }
    }

    return null;
}

function inferInternalReturnTypes(signatures: InternalExtensionSignature[], bodyByName: Record<string, string>): void {
    const byName: Record<string, InternalExtensionSignature> = Object.create(null);
    for (let i = 0; i < signatures.length; i += 1) {
        byName[signatures[i].name] = signatures[i];
    }

    // Fixed-point pass to resolve "return this.someHelper(...)" chains.
    for (let pass = 0; pass < 5; pass += 1) {
        let changed = false;
        for (let i = 0; i < signatures.length; i += 1) {
            const sig = signatures[i];
            const body = bodyByName[sig.name] || "";
            const nextHint = inferReturnEntityTypeHint(body, byName);
            if (nextHint && sig.returnEntityTypeHint !== nextHint) {
                sig.returnEntityTypeHint = nextHint;
                changed = true;
            }
        }
        if (!changed) {
            break;
        }
    }
}

function parseInternalExtensionSignatures(managedObjectsText: string): InternalExtensionSignature[] {
    const objectText = findObjectLiteralAfter(managedObjectsText, /studio\._internal\.extensions\s*=\s*/m);
    if (!objectText) {
        return [];
    }

    const entries = parseObjectEntries(objectText);
    const signatures: InternalExtensionSignature[] = [];
    const bodyByName: Record<string, string> = Object.create(null);

    for (let i = 0; i < entries.length; i += 1) {
        const entry = entries[i];
        const fnArgs = parseFunctionArgs(entry.valueText);
        if (!fnArgs) {
            continue;
        }

        let expectedArgs = fnArgs.slice();
        const checkArgsMatch = /checkArguments\s*\(\s*["']([^"']+)["']\s*,\s*\[([^\]]*)\]/.exec(entry.valueText);
        if (checkArgsMatch) {
            const listText = checkArgsMatch[2];
            const names: string[] = [];
            const listRegex = /["']([^"']+)["']/g;
            let m: RegExpExecArray | null;
            while ((m = listRegex.exec(listText)) !== null) {
                names.push(m[1]);
            }
            if (names.length > 0) {
                expectedArgs = names;
            }
        }

        signatures.push({
            name: entry.key,
            expectedArgs,
            returnEntityTypeHint: null
        });
        bodyByName[entry.key] = entry.valueText;
    }

    inferInternalReturnTypes(signatures, bodyByName);

    signatures.sort(function (a, b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    return signatures;
}

interface InternalExtensionInfo {
    expectedArgs: string[];
    returnEntityTypeHint: string | null;
}

function parseManagedObjectExtensions(apiText: string, sourcePath: string, internalByName: Record<string, InternalExtensionInfo>): ExtensionMethodSnapshot[] {
    const managedObjectText = findObjectLiteralAfter(apiText, /ManagedObject\s*:\s*/m);
    if (!managedObjectText) {
        return [];
    }

    const extensionObjectText = findObjectLiteralAfter(managedObjectText, /_extensions\s*:\s*/m);
    if (!extensionObjectText) {
        return [];
    }

    const entityEntries = parseObjectEntries(extensionObjectText);
    const methods: ExtensionMethodSnapshot[] = [];

    for (let i = 0; i < entityEntries.length; i += 1) {
        const entityEntry = entityEntries[i];
        if (!entityEntry.valueText || entityEntry.valueText.charAt(0) !== "{") {
            continue;
        }
        const methodEntries = parseObjectEntries(entityEntry.valueText);
        for (let m = 0; m < methodEntries.length; m += 1) {
            const methodEntry = methodEntries[m];
            const args = parseFunctionArgs(methodEntry.valueText);
            if (!args) {
                continue;
            }
            const internalExtensionName = extractInternalExtensionName(methodEntry.valueText);
            const internalInfo = internalExtensionName ? internalByName[internalExtensionName] : null;
            const expectedArgsFromInternal = internalInfo ? internalInfo.expectedArgs.slice() : null;
            const returnEntityTypeHint = internalInfo ? internalInfo.returnEntityTypeHint : null;
            const callArgItems = extractRunExtensionArgumentArrayItems(methodEntry.valueText);
            const argOptionalFlags = inferOptionalFlags(args, expectedArgsFromInternal, callArgItems);

            methods.push({
                entityName: entityEntry.key,
                methodName: methodEntry.key,
                args,
                argOptionalFlags,
                sourcePath,
                callKind: detectCallKind(methodEntry.valueText),
                internalExtensionName,
                expectedArgsFromInternal,
                returnEntityTypeHint
            });
        }
    }

    methods.sort(function (a, b) {
        const ka = a.entityName + "." + a.methodName + "(" + a.args.join(",") + ")";
        const kb = b.entityName + "." + b.methodName + "(" + b.args.join(",") + ")";
        return ka < kb ? -1 : ka > kb ? 1 : 0;
    });

    return methods;
}

function uniqExtensionMethods(items: ExtensionMethodSnapshot[]): ExtensionMethodSnapshot[] {
    const out: ExtensionMethodSnapshot[] = [];
    const seen: Record<string, true> = Object.create(null);
    for (let i = 0; i < items.length; i += 1) {
        const item = items[i];
        const key = [
            item.entityName,
            item.methodName,
            item.args.join(","),
            item.argOptionalFlags.map(function (x) { return x ? "1" : "0"; }).join(""),
            item.callKind,
            item.internalExtensionName || ""
        ].join("|");
        if (seen[key]) {
            continue;
        }
        seen[key] = true;
        out.push(item);
    }
    return out;
}

export function readBuiltinSnapshots(baseDir: string): BuiltinParseSummary {
    const builtinDir = path.join(baseDir, "data", "builtin");
    const names = ["api.js", "managed_objects.js", "qwebchannel.js"];
    const files: BuiltinFileSnapshot[] = [];
    const warnings: string[] = [];

    for (let i = 0; i < names.length; i += 1) {
        const name = names[i];
        const filePath = path.join(builtinDir, name);
        if (!fs.existsSync(filePath)) {
            warnings.push("Builtin snapshot missing: " + filePath);
            continue;
        }
        const text = fs.readFileSync(filePath, "utf8");
        files.push({
            name,
            path: filePath,
            bytes: text.length,
            text
        });
    }

    const apiFile = files.find(function (x) { return x.name === "api.js"; });
    const managedFile = files.find(function (x) { return x.name === "managed_objects.js"; });

    const internalExtensionSignatures = managedFile
        ? parseInternalExtensionSignatures(managedFile.text)
        : [];

    const internalByName: Record<string, InternalExtensionInfo> = Object.create(null);
    for (let i = 0; i < internalExtensionSignatures.length; i += 1) {
        const item = internalExtensionSignatures[i];
        internalByName[item.name] = {
            expectedArgs: item.expectedArgs.slice(),
            returnEntityTypeHint: item.returnEntityTypeHint
        };
    }

    const extensionMethods = apiFile
        ? uniqExtensionMethods(parseManagedObjectExtensions(apiFile.text, apiFile.path, internalByName))
        : [];

    if (!apiFile) {
        warnings.push("Cannot parse extensions: api.js snapshot is missing.");
    }
    if (!managedFile) {
        warnings.push("Cannot parse _internal extension signatures: managed_objects.js snapshot is missing.");
    }
    if (extensionMethods.length === 0) {
        warnings.push("No managed object extension methods extracted from builtin scripts.");
    }

    return {
        files,
        internalExtensionSignatures,
        extensionMethods,
        warnings
    };
}
