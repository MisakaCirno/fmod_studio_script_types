declare const require: any;

const fs = require("fs");
const path = require("path");

import { MergedIR, ModelEntityIR, toTsMemberName } from "./merge-ir";
import { BuiltinParseSummary, ExtensionMethodSnapshot } from "./parse-builtins";
import { ManualMethodOverride, getManualDocOverrides } from "./manual-doc-overrides";

function stableSort<T>(items: T[], keyFn: (item: T) => string): T[] {
    return items.slice().sort(function (a, b) {
        const ka = keyFn(a);
        const kb = keyFn(b);
        if (ka < kb) {
            return -1;
        }
        if (ka > kb) {
            return 1;
        }
        return 0;
    });
}

function uniqueSortedStrings(values: string[]): string[] {
    const seen: Record<string, true> = Object.create(null);
    for (let i = 0; i < values.length; i += 1) {
        const value = values[i];
        if (!value) {
            continue;
        }
        seen[value] = true;
    }
    return Object.keys(seen).sort();
}

function stringLiteralUnion(values: string[]): string {
    if (values.length === 0) {
        return "string";
    }
    const literals: string[] = [];
    for (let i = 0; i < values.length; i += 1) {
        literals.push(JSON.stringify(values[i]));
    }
    return literals.join(" | ");
}

function buildModelDescendantClosure(modelEntities: ModelEntityIR[]): Record<string, string[]> {
    const childrenByParent: Record<string, string[]> = Object.create(null);
    const knownEntities: Record<string, true> = Object.create(null);

    for (let i = 0; i < modelEntities.length; i += 1) {
        knownEntities[modelEntities[i].name] = true;
    }

    for (let i = 0; i < modelEntities.length; i += 1) {
        const entity = modelEntities[i];
        for (let s = 0; s < entity.superEntities.length; s += 1) {
            const superName = entity.superEntities[s];
            if (!childrenByParent[superName]) {
                childrenByParent[superName] = [];
            }
            childrenByParent[superName].push(entity.name);
        }
    }

    const closure: Record<string, string[]> = Object.create(null);
    const entityNames = Object.keys(knownEntities).sort();
    for (let i = 0; i < entityNames.length; i += 1) {
        const root = entityNames[i];
        const visited: Record<string, true> = Object.create(null);
        const queue: string[] = [root];
        visited[root] = true;

        while (queue.length > 0) {
            const current = queue.shift() as string;
            const children = childrenByParent[current] || [];
            for (let c = 0; c < children.length; c += 1) {
                const child = children[c];
                if (visited[child]) {
                    continue;
                }
                visited[child] = true;
                queue.push(child);
            }
        }

        closure[root] = Object.keys(visited).sort();
    }

    return closure;
}

function buildEntityRuntimeNameMap(modelEntities: ModelEntityIR[], entityNames: string[]): Record<string, string[]> {
    const modelClosure = buildModelDescendantClosure(modelEntities);
    const map: Record<string, string[]> = Object.create(null);
    for (let i = 0; i < entityNames.length; i += 1) {
        const entityName = entityNames[i];
        const names = modelClosure[entityName] || [entityName];
        map[entityName] = uniqueSortedStrings(names.concat([entityName]));
    }
    return map;
}

function getTopLevelProjectModelEntityName(firstPath: string): string | null {
    const m = /^studio\.project\.model\.([A-Za-z_$][A-Za-z0-9_$]*)$/.exec(firstPath || "");
    if (!m) {
        return null;
    }
    return m[1];
}

function toTsLiteral(value: any): string {
    if (value === null) {
        return "null";
    }
    if (value === undefined) {
        return "undefined";
    }
    if (typeof value === "string") {
        return JSON.stringify(value);
    }
    if (typeof value === "number") {
        if (isFinite(value)) {
            return String(value);
        }
        return "number";
    }
    if (typeof value === "boolean") {
        return value ? "true" : "false";
    }
    if (Array.isArray(value)) {
        const items = value.map(function (x) { return toTsLiteral(x); });
        return "readonly [" + items.join(", ") + "]";
    }
    return JSON.stringify(String(value));
}

function sanitizeTypeName(value: string): string {
    const cleaned = (value || "").replace(/[^A-Za-z0-9_$]/g, "");
    if (!cleaned) {
        return "Unnamed";
    }
    const first = cleaned.charAt(0);
    if (/[0-9]/.test(first)) {
        return "T" + cleaned;
    }
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function sanitizeEnumMemberName(value: string): string {
    const raw = String(value || "");
    const cleaned = raw.replace(/[^A-Za-z0-9_$]/g, "");
    if (!cleaned) {
        return "Value";
    }
    if (!/^[A-Za-z_$]/.test(cleaned.charAt(0))) {
        return "_" + cleaned;
    }
    return cleaned;
}

function buildEnumMembers(values: string[]): Array<{ memberName: string; value: string }> {
    const out: Array<{ memberName: string; value: string }> = [];
    const used: Record<string, true> = Object.create(null);
    const sortedValues = uniqueSortedStrings(values);
    for (let i = 0; i < sortedValues.length; i += 1) {
        const value = sortedValues[i];
        const base = sanitizeEnumMemberName(value);
        let memberName = base;
        let suffix = 2;
        while (used[memberName]) {
            memberName = base + "_" + suffix;
            suffix += 1;
        }
        used[memberName] = true;
        out.push({ memberName, value });
    }
    return out;
}

function modelPropertyType(typeName: string): string {
    if (typeName === "string" || typeName === "number" || typeName === "boolean") {
        return typeName;
    }
    return "any";
}

function modelRelationshipType(entity: ModelEntityIR, relationshipName: string): string {
    for (let i = 0; i < entity.relationships.length; i += 1) {
        const rel = entity.relationships[i];
        if (rel.name !== relationshipName) {
            continue;
        }
        const destination = rel.destinationTypeNormalized || "Unknown";
        const refType = "FmodModelRef<" + JSON.stringify(destination) + ">";
        if (rel.cardinalityNormalized === "many") {
            return "Array<" + refType + ">";
        }
        if (rel.cardinalityNormalized === "one") {
            return refType + " | null";
        }
        return "any";
    }
    return "any";
}

function modelPropertyInstanceType(typeName: string): string {
    if (typeName === "string" || typeName === "number" || typeName === "boolean") {
        return typeName;
    }
    return "any";
}

function modelRelationshipInstanceType(cardinality: string, destinationType: string): string {
    const destination = destinationType || "Unknown";
    const ref = "FmodEntityObject<" + JSON.stringify(destination) + ">";
    if (cardinality === "many") {
        return "Array<" + ref + ">";
    }
    if (cardinality === "one") {
        return ref + " | null";
    }
    return "any";
}

function extensionReturnType(method: ExtensionMethodSnapshot): string {
    if (method.returnEntityTypeHint) {
        const raw = String(method.returnEntityTypeHint || "");
        const parts = raw.split("|");
        const hints: string[] = [];
        for (let i = 0; i < parts.length; i += 1) {
            const t = parts[i].trim();
            if (!t) {
                continue;
            }
            if (hints.indexOf(t) >= 0) {
                continue;
            }
            hints.push(t);
        }
        if (hints.length === 1) {
            return "FmodEntityObject<" + JSON.stringify(hints[0]) + ">";
        }
        if (hints.length > 1) {
            const refs: string[] = [];
            for (let i = 0; i < hints.length; i += 1) {
                refs.push("FmodEntityObject<" + JSON.stringify(hints[i]) + ">");
            }
            return refs.join(" | ");
        }
    }
    return "any";
}

function methodOverrideKey(entityName: string, methodName: string): string {
    return entityName + "." + methodName;
}

function getEffectiveReturnType(method: ExtensionMethodSnapshot, override: ManualMethodOverride | null): string {
    const inferred = extensionReturnType(method);
    if (!override || !override.returnTypeText) {
        return inferred;
    }
    if (override.forceReturnType) {
        return override.returnTypeText;
    }
    if (inferred === "any") {
        return override.returnTypeText;
    }
    return inferred;
}

function getEffectiveArgs(method: ExtensionMethodSnapshot, override: ManualMethodOverride | null): string[] {
    if (override && override.args && override.args.length > 0) {
        const args: string[] = [];
        for (let i = 0; i < override.args.length; i += 1) {
            const item = override.args[i];
            const fallbackName = method.args[i] || ("arg" + i);
            const argName = item.name || fallbackName;
            const optionalByOverride = typeof item.optional === "boolean" ? item.optional : false;
            const optionalByProbe = !!(method.argOptionalFlags && method.argOptionalFlags[i]);
            const optional = optionalByOverride || optionalByProbe;
            args.push(argName + (optional ? "?" : "") + ": " + (item.typeText || "any"));
        }
        return args;
    }

    const out: string[] = [];
    for (let i = 0; i < method.args.length; i += 1) {
        const arg = method.args[i];
        const optional = !!(method.argOptionalFlags && method.argOptionalFlags[i]);
        out.push(arg + (optional ? "?" : "") + ": any");
    }
    return out;
}

function isLikelyInterfaceName(typeText: string): boolean {
    if (!typeText) {
        return false;
    }
    if (typeText.indexOf(" ") >= 0 || typeText.indexOf("|") >= 0 || typeText.indexOf("&") >= 0 || typeText.indexOf("<") >= 0) {
        return false;
    }
    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(typeText);
}

function getManagedObjectExtensionsHostInterfaceMap(ir: MergedIR): Record<string, string> {
    const byEntity: Record<string, string> = Object.create(null);
    let extensionRoot: any = null;
    for (let i = 0; i < ir.hostInterfaces.length; i += 1) {
        if (ir.hostInterfaces[i].firstPath === "studio.project.ManagedObject._extensions") {
            extensionRoot = ir.hostInterfaces[i];
            break;
        }
    }
    if (!extensionRoot) {
        return byEntity;
    }
    for (let i = 0; i < extensionRoot.members.length; i += 1) {
        const member = extensionRoot.members[i];
        if (member.kind !== "property" || !member.typeText) {
            continue;
        }
        if (!isLikelyInterfaceName(member.typeText)) {
            continue;
        }
        byEntity[member.name] = member.typeText;
    }
    return byEntity;
}

function hasMemberNamed(iface: any, memberName: string): boolean {
    for (let i = 0; i < iface.members.length; i += 1) {
        if (iface.members[i].name === memberName) {
            return true;
        }
    }
    return false;
}

function getRuntimeEntityInstanceInterfaceMap(ir: MergedIR, entityNames: string[]): Record<string, string[]> {
    const wanted: Record<string, true> = Object.create(null);
    for (let i = 0; i < entityNames.length; i += 1) {
        wanted[entityNames[i]] = true;
    }

    const map: Record<string, string[]> = Object.create(null);
    for (let i = 0; i < entityNames.length; i += 1) {
        map[entityNames[i]] = [];
    }

    function add(entity: string, ifaceName: string): void {
        const list = map[entity];
        for (let i = 0; i < list.length; i += 1) {
            if (list[i] === ifaceName) {
                return;
            }
        }
        list.push(ifaceName);
    }

    const pathByInterfaceName: Record<string, string> = Object.create(null);
    for (let i = 0; i < ir.hostInterfaces.length; i += 1) {
        const iface = ir.hostInterfaces[i];
        pathByInterfaceName[iface.name] = iface.firstPath || "";
        if (iface.firstPath.indexOf("[") >= 0) {
            continue;
        }
        if (iface.firstPath.indexOf("studio.project.model.") === 0) {
            continue;
        }
        if (iface.firstPath.indexOf("studio.project.ManagedObject._extensions") === 0) {
            continue;
        }
        if (iface.firstPath.indexOf(".properties.") >= 0 || iface.firstPath.indexOf(".relationships.") >= 0) {
            continue;
        }
        if (!hasMemberNamed(iface, "_native") && !hasMemberNamed(iface, "isOfType")) {
            continue;
        }

        for (let m = 0; m < iface.members.length; m += 1) {
            const member = iface.members[m];
            if (member.kind !== "property" || member.name !== "entity") {
                continue;
            }
            if (typeof member.primitiveValue !== "string") {
                continue;
            }
            const entityName = member.primitiveValue;
            if (!wanted[entityName]) {
                continue;
            }
            add(entityName, iface.name);
        }
    }

    const keys = Object.keys(map);
    for (let i = 0; i < keys.length; i += 1) {
        const entityName = keys[i];
        const list = map[entityName];
        if (list.length <= 1) {
            list.sort();
            continue;
        }

        function pathDepth(pathText: string): number {
            if (!pathText) {
                return 999999;
            }
            const dotted = pathText
                .replace(/\[\"([^\"]+)\"\]/g, ".$1")
                .replace(/\['([^']+)'\]/g, ".$1");
            const rawParts = dotted.split(".");
            let count = 0;
            for (let p = 0; p < rawParts.length; p += 1) {
                if (rawParts[p]) {
                    count += 1;
                }
            }
            return count;
        }

        let minDepth = 999999;
        for (let j = 0; j < list.length; j += 1) {
            const ifaceName = list[j];
            const depth = pathDepth(pathByInterfaceName[ifaceName] || "");
            if (depth < minDepth) {
                minDepth = depth;
            }
        }

        const pruned: string[] = [];
        for (let j = 0; j < list.length; j += 1) {
            const ifaceName = list[j];
            const depth = pathDepth(pathByInterfaceName[ifaceName] || "");
            if (depth === minDepth) {
                pruned.push(ifaceName);
            }
        }
        pruned.sort();
        map[entityName] = pruned;
    }
    return map;
}

export function emitHostDts(ir: MergedIR): string {
    const lines: string[] = [];
    const blockedGlobalRootNames: Record<string, true> = Object.create(null);
    blockedGlobalRootNames.alert = true;
    blockedGlobalRootNames.confirm = true;
    blockedGlobalRootNames.console = true;
    blockedGlobalRootNames.print = true;
    blockedGlobalRootNames.prompt = true;

    lines.push("/* AUTO-GENERATED FILE. DO NOT EDIT. */");
    lines.push("/* Source: data/runtime.jsonl */");
    lines.push("");
    lines.push("type FmodAnyFunction = (...args: any[]) => any;");
    lines.push("");

    const hostInterfaces = stableSort(ir.hostInterfaces, function (x) { return x.name; });
    for (let i = 0; i < hostInterfaces.length; i += 1) {
        const iface = hostInterfaces[i];
        const modelEntityName = getTopLevelProjectModelEntityName(iface.firstPath);
        lines.push("/** @fmod-object-id " + iface.id + " @fmod-path " + JSON.stringify(iface.firstPath) + " */");
        const extendsText = iface.extendsName && iface.extendsName !== iface.name
            ? " extends " + iface.extendsName
            : "";
        lines.push("interface " + iface.name + extendsText + " {");
        if (modelEntityName && iface.extendsName === "StudioProjectEntity") {
            const literal = JSON.stringify(modelEntityName);
            lines.push("    findInstances(): Array<FmodEntityObject<" + literal + ">>;");
            lines.push("    singletonInstance(): FmodEntityObject<" + literal + "> | null;");
            lines.push("    isObjectOfType(object: any): object is FmodEntityObject<" + literal + ">;");
            lines.push("    document(): string;");
        }
        if (iface.members.length === 0) {
            lines.push("}");
            lines.push("");
            continue;
        }

        const members = stableSort(iface.members, function (x) { return x.name + ":" + x.kind; });
        for (let m = 0; m < members.length; m += 1) {
            const member = members[m];
            const nameText = toTsMemberName(member.name);
            if (member.kind === "method") {
                const overloads = member.overloads && member.overloads.length > 0 ? member.overloads : [{ argTypes: ["...args: any[]"] }];
                for (let o = 0; o < overloads.length; o += 1) {
                    const overload = overloads[o];
                    const args: string[] = [];
                    for (let a = 0; a < overload.argTypes.length; a += 1) {
                        const argType = overload.argTypes[a];
                        if (argType.indexOf("...") === 0) {
                            args.push(argType);
                        } else {
                            args.push("arg" + a + ": " + argType);
                        }
                    }
                    lines.push("    " + nameText + "(" + args.join(", ") + "): any;");
                }
            } else {
                lines.push("    " + nameText + ": " + (member.typeText || "any") + ";");
            }
        }
        lines.push("}");
        lines.push("");
    }

    const roots = stableSort(ir.roots, function (x) { return x.name; });
    const shadowedRoots: typeof roots = [];
    for (let i = 0; i < roots.length; i += 1) {
        const root = roots[i];
        if (blockedGlobalRootNames[root.name]) {
            shadowedRoots.push(root);
            continue;
        }
        lines.push("declare const " + root.name + ": " + root.typeText + ";");
    }
    if (shadowedRoots.length > 0) {
        function findShadowedRoot(name: string): any | null {
            for (let i = 0; i < shadowedRoots.length; i += 1) {
                if (shadowedRoots[i].name === name) {
                    return shadowedRoots[i];
                }
            }
            return null;
        }

        const shadowedConsole = findShadowedRoot("console");
        if (shadowedConsole) {
            if (isLikelyInterfaceName(shadowedConsole.typeText) && shadowedConsole.typeText !== "Console") {
                lines.push("interface Console extends " + shadowedConsole.typeText + " {}");
            } else {
                lines.push("interface Console {}");
            }
            lines.push("declare var console: Console;");
        }
        if (findShadowedRoot("alert")) {
            lines.push("declare function alert(...args: any[]): any;");
        }
        if (findShadowedRoot("confirm")) {
            lines.push("declare function confirm(...args: any[]): any;");
        }
        if (findShadowedRoot("prompt")) {
            lines.push("declare function prompt(...args: any[]): any;");
        }
        if (findShadowedRoot("print")) {
            lines.push("declare function print(...args: any[]): any;");
        }

        lines.push("");
        lines.push("interface FMODHostShadowedGlobalsMap {");
        for (let i = 0; i < shadowedRoots.length; i += 1) {
            const root = shadowedRoots[i];
            lines.push("    " + toTsMemberName(root.name) + ": " + root.typeText + ";");
        }
        lines.push("}");
        lines.push("declare const fmodHostShadowedGlobals: FMODHostShadowedGlobalsMap;");
    }
    lines.push("");
    return lines.join("\n");
}

export function emitModelDts(ir: MergedIR): string {
    const lines: string[] = [];
    lines.push("/* AUTO-GENERATED FILE. DO NOT EDIT. */");
    lines.push("/* Source: data/model.jsonl */");
    lines.push("");
    lines.push("declare namespace FMODProjectModel {");
    lines.push("    interface FmodModelRef<TName extends string = string> {");
    lines.push("        readonly __entityType?: TName;");
    lines.push("    }");
    lines.push("");

    const entities = stableSort(ir.modelEntities, function (x) { return x.name; });
    const interfaceNameByEntity: Record<string, string> = Object.create(null);
    const usedNames: Record<string, number> = Object.create(null);

    for (let i = 0; i < entities.length; i += 1) {
        const entity = entities[i];
        const base = sanitizeTypeName(entity.name) + "ModelEntity";
        let ifaceName = base;
        if (usedNames[ifaceName]) {
            usedNames[ifaceName] += 1;
            ifaceName = base + "_" + usedNames[ifaceName];
        } else {
            usedNames[ifaceName] = 1;
        }
        interfaceNameByEntity[entity.name] = ifaceName;

        lines.push("    interface " + ifaceName + " {");
        lines.push("        name: " + toTsLiteral(entity.name) + ";");
        lines.push("        superEntities: " + toTsLiteral(entity.superEntities || []) + ";");
        lines.push("        isAbstract: " + toTsLiteral(entity.isAbstract) + ";");
        lines.push("        isGlobal: " + toTsLiteral(entity.isGlobal) + ";");
        lines.push("        isSingleton: " + toTsLiteral(entity.isSingleton) + ";");
        lines.push("        properties: {");
        if (entity.properties.length === 0) {
            lines.push("        };");
        } else {
            for (let p = 0; p < entity.properties.length; p += 1) {
                const prop = entity.properties[p];
                const nameText = toTsMemberName(prop.name);
                lines.push("            " + nameText + ": " + modelPropertyType(prop.dataTypeNormalized) + ";");
            }
            lines.push("        };");
        }

        lines.push("        propertyMeta: {");
        if (entity.properties.length === 0) {
            lines.push("        };");
        } else {
            for (let p = 0; p < entity.properties.length; p += 1) {
                const prop = entity.properties[p];
                const nameText = toTsMemberName(prop.name);
                lines.push("            " + nameText + ": {");
                lines.push("                dataTypeRaw: " + toTsLiteral(prop.dataTypeRaw) + ";");
                lines.push("                dataTypeNormalized: " + toTsLiteral(prop.dataTypeNormalized) + ";");
                lines.push("                defaultValueRaw: " + toTsLiteral(prop.defaultValueRaw) + ";");
                lines.push("                defaultValueNormalized: " + toTsLiteral(prop.defaultValueNormalized) + ";");
                lines.push("            };");
            }
            lines.push("        };");
        }

        lines.push("        relationships: {");
        if (entity.relationships.length === 0) {
            lines.push("        };");
        } else {
            for (let r = 0; r < entity.relationships.length; r += 1) {
                const rel = entity.relationships[r];
                const nameText = toTsMemberName(rel.name);
                lines.push("            " + nameText + ": " + modelRelationshipType(entity, rel.name) + ";");
            }
            lines.push("        };");
        }

        lines.push("        relationshipMeta: {");
        if (entity.relationships.length === 0) {
            lines.push("        };");
        } else {
            for (let r = 0; r < entity.relationships.length; r += 1) {
                const rel = entity.relationships[r];
                const nameText = toTsMemberName(rel.name);
                lines.push("            " + nameText + ": {");
                lines.push("                cardinalityRaw: " + toTsLiteral(rel.cardinalityRaw) + ";");
                lines.push("                cardinalityNormalized: " + toTsLiteral(rel.cardinalityNormalized) + ";");
                lines.push("                destinationTypeRaw: " + toTsLiteral(rel.destinationTypeRaw) + ";");
                lines.push("                destinationTypeNormalized: " + toTsLiteral(rel.destinationTypeNormalized) + ";");
                lines.push("                isRequiredRaw: " + toTsLiteral(rel.isRequiredRaw) + ";");
                lines.push("                isRequiredNormalized: " + toTsLiteral(rel.isRequiredNormalized) + ";");
                lines.push("            };");
            }
            lines.push("        };");
        }

        lines.push("    }");
        lines.push("");
    }

    lines.push("    interface EntityMap {");
    for (let i = 0; i < entities.length; i += 1) {
        const entity = entities[i];
        const nameText = toTsMemberName(entity.name);
        lines.push("        " + nameText + ": " + interfaceNameByEntity[entity.name] + ";");
    }
    lines.push("    }");
    lines.push("    type EntityName = keyof EntityMap;");
    lines.push("}");
    lines.push("");
    return lines.join("\n");
}

export function emitIndexDts(): string {
    return [
        "/// <reference path=\"../generated/fmod.host.generated.d.ts\" />",
        "/// <reference path=\"../generated/fmod.project-model.generated.d.ts\" />",
        "/// <reference path=\"../generated/fmod.project-extensions.generated.d.ts\" />",
        "/// <reference path=\"./manual-overrides.d.ts\" />",
        ""
    ].join("\n");
}

function buildExtensionsByEntity(extensionMethods: ExtensionMethodSnapshot[]): Record<string, ExtensionMethodSnapshot[]> {
    const byEntity: Record<string, ExtensionMethodSnapshot[]> = Object.create(null);
    for (let i = 0; i < extensionMethods.length; i += 1) {
        const method = extensionMethods[i];
        if (!byEntity[method.entityName]) {
            byEntity[method.entityName] = [];
        }
        byEntity[method.entityName].push(method);
    }

    const entities = Object.keys(byEntity);
    for (let i = 0; i < entities.length; i += 1) {
        const methods = byEntity[entities[i]];
        methods.sort(function (a, b) {
            const ka = a.methodName + "(" + a.args.join(",") + ")";
            const kb = b.methodName + "(" + b.args.join(",") + ")";
            if (ka < kb) {
                return -1;
            }
            if (ka > kb) {
                return 1;
            }
            return 0;
        });
    }

    return byEntity;
}

export function emitExtensionsDts(
    builtinSummary: BuiltinParseSummary,
    ir?: MergedIR,
    localMethodOverrides?: Record<string, ManualMethodOverride>
): string {
    const lines: string[] = [];
    const manualDocOverrides = getManualDocOverrides();
    const effectiveMethodOverrides: Record<string, ManualMethodOverride> = Object.create(null);
    const manualKeys = Object.keys(manualDocOverrides);
    for (let i = 0; i < manualKeys.length; i += 1) {
        const key = manualKeys[i];
        effectiveMethodOverrides[key] = manualDocOverrides[key];
    }
    if (localMethodOverrides) {
        const localKeys = Object.keys(localMethodOverrides);
        for (let i = 0; i < localKeys.length; i += 1) {
            const key = localKeys[i];
            effectiveMethodOverrides[key] = localMethodOverrides[key];
        }
    }
    lines.push("/* AUTO-GENERATED FILE. DO NOT EDIT. */");
    lines.push("/* Source: data/builtin/api.js + data/builtin/managed_objects.js */");
    lines.push("/* Additional overlay: tools/manual-doc-overrides.ts (from FMOD docs snapshot 2.02.33) */");
    if (localMethodOverrides && Object.keys(localMethodOverrides).length > 0) {
        lines.push("/* Additional overlay: overrides/local-overrides.json */");
    }
    lines.push("");
    lines.push("declare namespace FMODProjectExtensions {");
    lines.push("    type FmodExtensionObjectRef<TEntityName extends string, TEntityRuntimeName extends string = TEntityName> = { readonly entity: TEntityRuntimeName } & Record<string, any>;");
    lines.push("    interface Event3DAttributes {");
    lines.push("        radialDistance: number;");
    lines.push("        azimuth: number;");
    lines.push("        height: number;");
    lines.push("        rotation: number;");
    lines.push("    }");
    lines.push("");
    lines.push("    interface ExtensionMethodMeta {");
    lines.push("        callKind: \"runExtension\" | \"runRootExtension\" | \"native\" | \"internal\" | \"unknown\";");
    lines.push("        internalExtensionName: string | null;");
    lines.push("        expectedArgsFromInternal: readonly string[] | null;");
    lines.push("    }");
    lines.push("");

    const byEntity = buildExtensionsByEntity(builtinSummary.extensionMethods);
    const entityNames = Object.keys(byEntity).sort();
    const modelEntityNames = ir
        ? stableSort(ir.modelEntities, function (x) { return x.name; }).map(function (x) { return x.name; })
        : [];
    const allEntityNames = uniqueSortedStrings(entityNames.concat(modelEntityNames));
    const hostMap = ir ? getManagedObjectExtensionsHostInterfaceMap(ir) : Object.create(null);
    const runtimeInstanceMap = ir ? getRuntimeEntityInstanceInterfaceMap(ir, entityNames) : Object.create(null);
    const entityRuntimeNameMap = ir ? buildEntityRuntimeNameMap(ir.modelEntities, allEntityNames) : Object.create(null);

    for (let i = 0; i < entityNames.length; i += 1) {
        const entityName = entityNames[i];
        const ifaceName = sanitizeTypeName(entityName) + "Extensions";
        lines.push("    interface " + ifaceName + " {");

        const methods = byEntity[entityName];
        const methodMetaByName: Record<string, ExtensionMethodSnapshot> = Object.create(null);
        const seenSignatures: Record<string, true> = Object.create(null);
        for (let m = 0; m < methods.length; m += 1) {
            const method = methods[m];
            const signatureKey = method.methodName + "(" + method.args.join(",") + ")";
            if (seenSignatures[signatureKey]) {
                continue;
            }
            seenSignatures[signatureKey] = true;

            const nameText = toTsMemberName(method.methodName);
            const override = effectiveMethodOverrides[methodOverrideKey(entityName, method.methodName)] || null;
            const args = getEffectiveArgs(method, override);
            const returnType = getEffectiveReturnType(method, override);
            lines.push("        " + nameText + "(" + args.join(", ") + "): " + returnType + ";");

            const prevMeta = methodMetaByName[method.methodName];
            if (!prevMeta) {
                methodMetaByName[method.methodName] = method;
            } else {
                const prevScore =
                    (prevMeta.returnEntityTypeHint ? 10 : 0) +
                    (prevMeta.expectedArgsFromInternal ? 5 : 0) +
                    (prevMeta.internalExtensionName ? 2 : 0);
                const nextScore =
                    (method.returnEntityTypeHint ? 10 : 0) +
                    (method.expectedArgsFromInternal ? 5 : 0) +
                    (method.internalExtensionName ? 2 : 0);
                if (nextScore > prevScore) {
                    methodMetaByName[method.methodName] = method;
                }
            }
        }
        lines.push("        readonly __meta: {");
        const methodMetaKeys = Object.keys(methodMetaByName);
        if (methodMetaKeys.length === 0) {
            lines.push("        };");
        } else {
            methodMetaKeys.sort();
            for (let k = 0; k < methodMetaKeys.length; k += 1) {
                const methodName = methodMetaKeys[k];
                const keyText = toTsMemberName(methodName);
                const meta = methodMetaByName[methodName];
                const expectedArgsLiteral = meta.expectedArgsFromInternal
                    ? toTsLiteral(meta.expectedArgsFromInternal)
                    : "null";
                lines.push("            " + keyText + ": {");
                lines.push("                callKind: " + JSON.stringify(meta.callKind) + ";");
                lines.push("                internalExtensionName: " + toTsLiteral(meta.internalExtensionName) + ";");
                lines.push("                expectedArgsFromInternal: " + expectedArgsLiteral + ";");
                lines.push("            };");
            }
            lines.push("        };");
        }
        lines.push("    }");
        lines.push("");
    }

    lines.push("    interface EntityExtensionsMap {");
    for (let i = 0; i < entityNames.length; i += 1) {
        const entityName = entityNames[i];
        const ifaceName = sanitizeTypeName(entityName) + "Extensions";
        const nameText = toTsMemberName(entityName);
        lines.push("        " + nameText + ": " + ifaceName + ";");
    }
    lines.push("    }");
    lines.push("");
    lines.push("    interface ModelEntityDataMap {");
    if (ir && ir.modelEntities.length > 0) {
        const modelEntities = stableSort(ir.modelEntities, function (x) { return x.name; });
        for (let i = 0; i < modelEntities.length; i += 1) {
            const entity = modelEntities[i];
            const entityNameText = toTsMemberName(entity.name);
            lines.push("        " + entityNameText + ": {");
            for (let p = 0; p < entity.properties.length; p += 1) {
                const prop = entity.properties[p];
                const propNameText = toTsMemberName(prop.name);
                lines.push("            " + propNameText + ": " + modelPropertyInstanceType(prop.dataTypeNormalized) + ";");
            }
            for (let r = 0; r < entity.relationships.length; r += 1) {
                const rel = entity.relationships[r];
                const relNameText = toTsMemberName(rel.name);
                lines.push("            " + relNameText + ": " + modelRelationshipInstanceType(rel.cardinalityNormalized, rel.destinationTypeNormalized) + ";");
            }
            lines.push("        };");
        }
    }
    lines.push("    }");
    lines.push("    type ExtensionEntityName = keyof EntityExtensionsMap;");
    lines.push("    type ModelEntityName = keyof ModelEntityDataMap;");
    lines.push("    type EntityName = ExtensionEntityName | ModelEntityName;");
    lines.push("");
    lines.push("    interface EntityRuntimeNameMap {");
    for (let i = 0; i < allEntityNames.length; i += 1) {
        const entityName = allEntityNames[i];
        const nameText = toTsMemberName(entityName);
        const runtimeNames = entityRuntimeNameMap[entityName] || [entityName];
        lines.push("        " + nameText + ": " + stringLiteralUnion(runtimeNames) + ";");
    }
    lines.push("    }");
    lines.push("    type EntityRuntimeNameOf<TEntityName extends EntityName> = TEntityName extends keyof EntityRuntimeNameMap ? EntityRuntimeNameMap[TEntityName] : TEntityName;");
    lines.push("");
    lines.push("    interface RuntimeEntityInterfaceMap {");
    for (let i = 0; i < entityNames.length; i += 1) {
        const entityName = entityNames[i];
        const nameText = toTsMemberName(entityName);
        const runtimeTargets: string[] = runtimeInstanceMap[entityName] || [];
        if (runtimeTargets.length > 0) {
            lines.push("        " + nameText + ": " + runtimeTargets.join(" | ") + ";");
        } else {
            lines.push("        " + nameText + ": Record<string, any>;");
        }
    }
    lines.push("    }");
    lines.push("    interface FmodManagedObjectCore<TEntityName extends string, TEntityRuntimeName extends string = TEntityName> {");
    lines.push("        readonly entity: TEntityRuntimeName;");
    lines.push("        readonly id: string;");
    lines.push("        readonly isValid: boolean;");
    lines.push("        readonly properties: any;");
    lines.push("        readonly relationships: any;");
    lines.push("        document(): string;");
    lines.push("        dump(): any;");
    lines.push("        isOfType(entityName: string): boolean;");
    lines.push("        isOfExactType(entityName: string): boolean;");
    lines.push("    }");
    lines.push("    type RuntimeInterfaceOf<TEntityName extends EntityName> = TEntityName extends keyof RuntimeEntityInterfaceMap ? RuntimeEntityInterfaceMap[TEntityName] : Record<string, any>;");
    lines.push("    type ExtensionInterfaceOf<TEntityName extends EntityName> = TEntityName extends keyof EntityExtensionsMap ? EntityExtensionsMap[TEntityName] : {};");
    lines.push("    type ModelDataOf<TEntityName extends EntityName> = TEntityName extends keyof ModelEntityDataMap ? ModelEntityDataMap[TEntityName] : Record<string, any>;");
    lines.push("    type FmodEntityObject<TEntityName extends string> = TEntityName extends EntityName");
    lines.push("        ? FmodExtensionObjectRef<TEntityName, EntityRuntimeNameOf<TEntityName>> & FmodManagedObjectCore<TEntityName, EntityRuntimeNameOf<TEntityName>> & RuntimeInterfaceOf<TEntityName> & ModelDataOf<TEntityName> & ExtensionInterfaceOf<TEntityName>");
    lines.push("        : FmodExtensionObjectRef<TEntityName> & FmodManagedObjectCore<TEntityName>;");
    lines.push("}");
    lines.push("");

    lines.push("declare const fmodProjectExtensions: FMODProjectExtensions.EntityExtensionsMap;");
    lines.push("type FmodEntityObject<TEntityName extends string> = FMODProjectExtensions.FmodEntityObject<TEntityName>;");
    lines.push("");
    const enumEntityNames = allEntityNames.filter(function (entityName) {
        const runtimeNames = entityRuntimeNameMap[entityName] || [entityName];
        return runtimeNames.length > 1;
    });
    if (enumEntityNames.length > 0) {
        lines.push("/* Entity Runtime Name Enums (auto-generated from EntityRuntimeNameMap) */");
        for (let i = 0; i < enumEntityNames.length; i += 1) {
            const entityName = enumEntityNames[i];
            const enumName = "Fmod" + sanitizeTypeName(entityName) + "Entity";
            const enumValueTypeName = enumName + "Value";
            const members = buildEnumMembers(entityRuntimeNameMap[entityName] || [entityName]);
            lines.push("type " + enumValueTypeName + " = FMODProjectExtensions.EntityRuntimeNameMap[" + JSON.stringify(entityName) + "];");
            lines.push("");
            lines.push("declare const enum " + enumName + " {");
            for (let m = 0; m < members.length; m += 1) {
                lines.push("    " + members[m].memberName + " = " + JSON.stringify(members[m].value) + ",");
            }
            lines.push("}");
            lines.push("");
        }
    }

    if (ir) {
        const entityKeys = Object.keys(hostMap).sort();
        if (entityKeys.length > 0) {
            lines.push("/* Host Interface Augmentation (safe, path-based) */");
            for (let i = 0; i < entityKeys.length; i += 1) {
                const entityName = entityKeys[i];
                const hostInterfaceName = hostMap[entityName];
                const extInterfaceName = sanitizeTypeName(entityName) + "Extensions";
                lines.push("interface " + hostInterfaceName + " extends FMODProjectExtensions." + extInterfaceName + " {}");
            }
            lines.push("");
        }

        const instanceEntityKeys = Object.keys(runtimeInstanceMap).sort();
        let instanceLineCount = 0;
        for (let i = 0; i < instanceEntityKeys.length; i += 1) {
            instanceLineCount += runtimeInstanceMap[instanceEntityKeys[i]].length;
        }
        if (instanceLineCount > 0) {
            lines.push("/* Runtime Instance Interface Augmentation (entity-literal based) */");
            for (let i = 0; i < instanceEntityKeys.length; i += 1) {
                const entityName = instanceEntityKeys[i];
                const extInterfaceName = sanitizeTypeName(entityName) + "Extensions";
                const targets = runtimeInstanceMap[entityName];
                for (let t = 0; t < targets.length; t += 1) {
                    lines.push("interface " + targets[t] + " extends FMODProjectExtensions." + extInterfaceName + " {}");
                }
            }
            lines.push("");
        }
    }

    if (builtinSummary.warnings.length > 0) {
        lines.push("/* WARNINGS");
        for (let i = 0; i < builtinSummary.warnings.length; i += 1) {
            lines.push(" - " + builtinSummary.warnings[i]);
        }
        lines.push("*/");
        lines.push("");
    }

    return lines.join("\n");
}

export function writeGeneratedDtsFiles(outputBaseDir: string, ir: MergedIR): {
    hostPath: string;
    modelPath: string;
    extensionPath: string;
    indexPath: string;
} {
    const emptyBuiltinSummary: BuiltinParseSummary = {
        files: [],
        internalExtensionSignatures: [],
        extensionMethods: [],
        warnings: []
    };
    return writeGeneratedDtsFilesWithBuiltin(outputBaseDir, ir, emptyBuiltinSummary, Object.create(null));
}

export function writeGeneratedDtsFilesWithBuiltin(
    outputBaseDir: string,
    ir: MergedIR,
    builtinSummary: BuiltinParseSummary,
    localMethodOverrides: Record<string, ManualMethodOverride>
): {
    hostPath: string;
    modelPath: string;
    extensionPath: string;
    indexPath: string;
} {
    const generatedDir = path.join(outputBaseDir, "generated");
    const srcDir = path.join(outputBaseDir, "src");

    fs.mkdirSync(generatedDir, { recursive: true });
    fs.mkdirSync(srcDir, { recursive: true });

    const hostPath = path.join(generatedDir, "fmod.host.generated.d.ts");
    const modelPath = path.join(generatedDir, "fmod.project-model.generated.d.ts");
    const extensionPath = path.join(generatedDir, "fmod.project-extensions.generated.d.ts");
    const indexPath = path.join(srcDir, "index.d.ts");

    fs.writeFileSync(hostPath, emitHostDts(ir), "utf8");
    fs.writeFileSync(modelPath, emitModelDts(ir), "utf8");
    fs.writeFileSync(extensionPath, emitExtensionsDts(builtinSummary, ir, localMethodOverrides), "utf8");
    fs.writeFileSync(indexPath, emitIndexDts(), "utf8");

    return { hostPath, modelPath, extensionPath, indexPath };
}
