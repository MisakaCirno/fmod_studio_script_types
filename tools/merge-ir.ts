import { ParsedProbeData, JsonlRecord } from "./parse-jsonl";

export interface HostMethodOverloadIR {
    argTypes: string[];
}

export interface HostMemberIR {
    name: string;
    kind: "method" | "property";
    typeText?: string;
    primitiveValue?: any;
    overloads?: HostMethodOverloadIR[];
    startsWithUnderscore: boolean;
}

export interface HostInterfaceIR {
    id: number;
    name: string;
    kind: "object" | "function";
    firstPath: string;
    extendsName?: string;
    members: HostMemberIR[];
}

export interface RootBindingIR {
    name: string;
    typeText: string;
    valueKind: string;
    objectId: number | null;
}

export interface ModelPropertyIR {
    name: string;
    dataTypeRaw: any;
    dataTypeNormalized: string;
    defaultValueRaw: any;
    defaultValueNormalized: any;
}

export interface ModelRelationshipIR {
    name: string;
    cardinalityRaw: any;
    cardinalityNormalized: string;
    destinationTypeRaw: any;
    destinationTypeNormalized: string;
    isRequiredRaw: any;
    isRequiredNormalized: any;
}

export interface ModelEntityIR {
    name: string;
    superEntities: string[];
    isAbstract: any;
    isGlobal: any;
    isSingleton: any;
    properties: ModelPropertyIR[];
    relationships: ModelRelationshipIR[];
}

export interface MergedIR {
    hostInterfaces: HostInterfaceIR[];
    roots: RootBindingIR[];
    modelEntities: ModelEntityIR[];
    warnings: string[];
}

function isIdentifier(name: string): boolean {
    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
}

function toPascalCaseToken(text: string): string {
    if (!text) {
        return "";
    }
    const cleaned = text.replace(/[^A-Za-z0-9_$]/g, "");
    if (!cleaned) {
        return "";
    }
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function pathToInterfaceBase(firstPath: string, objectId: number): string {
    if (!firstPath) {
        return "FmodObject" + objectId;
    }

    const dotted = firstPath
        .replace(/\[\"([^\"]+)\"\]/g, ".$1")
        .replace(/\['([^']+)'\]/g, ".$1")
        .replace(/\[[^\]]+\]/g, ".value")
        .replace(/[^A-Za-z0-9_$.]/g, ".");

    const rawTokens = dotted.split(/[.$]+/g);
    const tokens: string[] = [];
    for (let i = 0; i < rawTokens.length; i += 1) {
        const token = toPascalCaseToken(rawTokens[i]);
        if (token) {
            tokens.push(token);
        }
    }
    if (tokens.length === 0) {
        return "FmodObject" + objectId;
    }

    let name = tokens.join("");
    if (/^[0-9]/.test(name)) {
        name = "Obj" + name;
    }
    return name;
}

function runtimeValueKindToType(valueKind: any): string {
    if (valueKind === "string") {
        return "string";
    }
    if (valueKind === "number") {
        return "number";
    }
    if (valueKind === "boolean") {
        return "boolean";
    }
    if (valueKind === "null") {
        return "null";
    }
    if (valueKind === "undefined") {
        return "undefined";
    }
    return "any";
}

function normalizeHostArgType(raw: any): string {
    if (typeof raw !== "string") {
        return "any";
    }
    const key = raw.toLowerCase();
    if (key === "qstring") {
        return "string";
    }
    if (key === "double" || key === "int" || key === "float") {
        return "number";
    }
    if (key === "bool" || key === "boolean") {
        return "boolean";
    }
    if (key === "qscriptvalue") {
        return "any";
    }
    return "any";
}

function toOwnerId(record: JsonlRecord): number | null {
    if (typeof record.ownerId === "number" && isFinite(record.ownerId)) {
        return record.ownerId;
    }
    return null;
}

function toObjectId(record: JsonlRecord): number | null {
    if (typeof record.objectId === "number" && isFinite(record.objectId)) {
        return record.objectId;
    }
    return null;
}

function stableSortStrings(values: string[]): string[] {
    return values.slice().sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
}

function isTopLevelProjectModelEntityPath(pathText: string): boolean {
    return /^studio\.project\.model\.[A-Za-z_$][A-Za-z0-9_$]*$/.test(pathText || "");
}

function mergeRuntime(parsed: ParsedProbeData, warnings: string[]): {
    hostInterfaces: HostInterfaceIR[];
    roots: RootBindingIR[];
    interfaceNameById: Record<number, string>;
    entityKindById: Record<number, "object" | "function">;
} {
    const runtimeByType = parsed.runtime.byType;

    const entityEvents = runtimeByType.entity || [];
    const propertyEvents = runtimeByType.property || [];
    const signatureEvents = runtimeByType.signatureMember || [];
    const callableEvents = runtimeByType.callable || [];
    const rootEvents = runtimeByType.root || [];

    const entityById: Record<number, JsonlRecord> = Object.create(null);
    const callableByObjectId: Record<number, JsonlRecord> = Object.create(null);
    const entityIds: number[] = [];

    for (let i = 0; i < entityEvents.length; i += 1) {
        const event = entityEvents[i];
        if (typeof event.id !== "number") {
            continue;
        }
        if (!entityById[event.id]) {
            entityIds.push(event.id);
        }
        entityById[event.id] = event;
    }
    for (let i = 0; i < callableEvents.length; i += 1) {
        const event = callableEvents[i];
        const objectId = toObjectId(event);
        if (objectId !== null) {
            callableByObjectId[objectId] = event;
        }
    }

    entityIds.sort(function (a, b) { return a - b; });

    const interfaceNameById: Record<number, string> = Object.create(null);
    const usedInterfaceNames: Record<string, number> = Object.create(null);
    const entityKindById: Record<number, "object" | "function"> = Object.create(null);

    for (let i = 0; i < entityIds.length; i += 1) {
        const id = entityIds[i];
        const entity = entityById[id];
        const baseName = pathToInterfaceBase(String(entity.firstPath || ""), id);
        let name = baseName;
        if (usedInterfaceNames[name]) {
            usedInterfaceNames[name] += 1;
            name = baseName + "_" + usedInterfaceNames[name];
        } else {
            usedInterfaceNames[name] = 1;
        }
        interfaceNameById[id] = name;
        entityKindById[id] = entity.kind === "function" ? "function" : "object";
    }

    const propertyByOwner: Record<number, JsonlRecord[]> = Object.create(null);
    for (let i = 0; i < propertyEvents.length; i += 1) {
        const record = propertyEvents[i];
        const ownerId = toOwnerId(record);
        if (ownerId === null) {
            continue;
        }
        if (!propertyByOwner[ownerId]) {
            propertyByOwner[ownerId] = [];
        }
        propertyByOwner[ownerId].push(record);
    }

    const signatureByOwnerByName: Record<number, Record<string, HostMethodOverloadIR[]>> = Object.create(null);
    for (let i = 0; i < signatureEvents.length; i += 1) {
        const record = signatureEvents[i];
        const ownerId = toOwnerId(record);
        if (ownerId === null || typeof record.logicalName !== "string" || !record.logicalName) {
            continue;
        }

        const normalizedArgs: string[] = [];
        if (Array.isArray(record.argTypeNamesNormalized)) {
            for (let a = 0; a < record.argTypeNamesNormalized.length; a += 1) {
                normalizedArgs.push(String(record.argTypeNamesNormalized[a] || "any"));
            }
        } else if (Array.isArray(record.argTypeNames)) {
            for (let a = 0; a < record.argTypeNames.length; a += 1) {
                normalizedArgs.push(normalizeHostArgType(record.argTypeNames[a]));
            }
        }

        if (!signatureByOwnerByName[ownerId]) {
            signatureByOwnerByName[ownerId] = Object.create(null);
        }
        if (!signatureByOwnerByName[ownerId][record.logicalName]) {
            signatureByOwnerByName[ownerId][record.logicalName] = [];
        }

        const overloads = signatureByOwnerByName[ownerId][record.logicalName];
        const key = normalizedArgs.join(",");
        let exists = false;
        for (let j = 0; j < overloads.length; j += 1) {
            if (overloads[j].argTypes.join(",") === key) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            overloads.push({ argTypes: normalizedArgs });
        }
    }

    function preferProperty(a: JsonlRecord, b: JsonlRecord): JsonlRecord {
        function score(x: JsonlRecord): number {
            let total = 0;
            if (typeof x.valueRef === "number") {
                total += 4;
            }
            if (x.valueKind && x.valueKind !== "unknown") {
                total += 2;
            }
            if (x.listedInOwnNames === true) {
                total += 1;
            }
            if (x.descriptorKind === "data") {
                total += 1;
            }
            if (x.readError === null) {
                total += 1;
            }
            return total;
        }

        const sa = score(a);
        const sb = score(b);
        if (sb > sa) {
            return b;
        }
        return a;
    }

    function propertyToTypeText(prop: JsonlRecord): string {
        if (prop.valueKind === "object") {
            if (typeof prop.valueRef === "number" && interfaceNameById[prop.valueRef]) {
                return interfaceNameById[prop.valueRef];
            }
            return "any";
        }
        if (prop.valueKind === "function") {
            if (typeof prop.valueRef === "number" && interfaceNameById[prop.valueRef]) {
                return "FmodAnyFunction & " + interfaceNameById[prop.valueRef];
            }
            return "FmodAnyFunction";
        }
        return runtimeValueKindToType(prop.valueKind);
    }

    const hostInterfaces: HostInterfaceIR[] = [];
    for (let i = 0; i < entityIds.length; i += 1) {
        const id = entityIds[i];
        const entity = entityById[id];
        const byLogicalName: Record<string, JsonlRecord> = Object.create(null);
        const startsWithUnderscoreByName: Record<string, boolean> = Object.create(null);

        const props = propertyByOwner[id] || [];
        for (let p = 0; p < props.length; p += 1) {
            const prop = props[p];
            if (prop.nameKind === "signature") {
                continue;
            }
            const logicalName = typeof prop.logicalName === "string" && prop.logicalName ? prop.logicalName :
                (typeof prop.rawName === "string" ? prop.rawName : "");
            if (!logicalName) {
                continue;
            }

            startsWithUnderscoreByName[logicalName] = startsWithUnderscoreByName[logicalName] || !!prop.startsWithUnderscore;
            if (!byLogicalName[logicalName]) {
                byLogicalName[logicalName] = prop;
            } else {
                byLogicalName[logicalName] = preferProperty(byLogicalName[logicalName], prop);
            }
        }

        const signaturesByName = signatureByOwnerByName[id] || Object.create(null);
        const memberNamesMap: Record<string, true> = Object.create(null);

        const propNames = Object.keys(byLogicalName);
        for (let p = 0; p < propNames.length; p += 1) {
            memberNamesMap[propNames[p]] = true;
        }
        const signatureNames = Object.keys(signaturesByName);
        for (let s = 0; s < signatureNames.length; s += 1) {
            memberNamesMap[signatureNames[s]] = true;
        }

        const memberNames = stableSortStrings(Object.keys(memberNamesMap));
        const members: HostMemberIR[] = [];

        for (let m = 0; m < memberNames.length; m += 1) {
            const memberName = memberNames[m];
            const overloads = signaturesByName[memberName];
            const plainProp = byLogicalName[memberName];
            const startsWithUnderscore = !!startsWithUnderscoreByName[memberName];

            if (overloads && overloads.length > 0) {
                members.push({
                    name: memberName,
                    kind: "method",
                    overloads: overloads.slice(),
                    startsWithUnderscore
                });
                continue;
            }

            if (plainProp && plainProp.valueKind === "function") {
                let fallbackArgs: string[] = ["any[]"];
                if (typeof plainProp.valueRef === "number" && callableByObjectId[plainProp.valueRef]) {
                    const callable = callableByObjectId[plainProp.valueRef];
                    if (callable.lengthReliable && typeof callable.length === "number" && callable.length >= 0 && callable.length <= 12) {
                        fallbackArgs = [];
                        for (let a = 0; a < callable.length; a += 1) {
                            fallbackArgs.push("any");
                        }
                    }
                }

                if (fallbackArgs.length === 1 && fallbackArgs[0] === "any[]") {
                    members.push({
                        name: memberName,
                        kind: "method",
                        overloads: [{ argTypes: ["...args: any[]"] }],
                        startsWithUnderscore
                    });
                } else {
                    members.push({
                        name: memberName,
                        kind: "method",
                        overloads: [{ argTypes: fallbackArgs }],
                        startsWithUnderscore
                    });
                }
                continue;
            }

            if (plainProp) {
                members.push({
                    name: memberName,
                    kind: "property",
                    typeText: propertyToTypeText(plainProp),
                    primitiveValue: plainProp.primitiveValue,
                    startsWithUnderscore
                });
            }
        }

        hostInterfaces.push({
            id,
            name: interfaceNameById[id],
            kind: entity.kind === "function" ? "function" : "object",
            firstPath: String(entity.firstPath || ""),
            extendsName: (function (): string | undefined {
                if (!isTopLevelProjectModelEntityPath(String(entity.firstPath || ""))) {
                    return undefined;
                }
                if (typeof entity.prototypeId !== "number" || !isFinite(entity.prototypeId)) {
                    return undefined;
                }
                const baseEntity = entityById[entity.prototypeId];
                if (!baseEntity || String(baseEntity.firstPath || "") !== "studio.project.Entity") {
                    return undefined;
                }
                const baseName = interfaceNameById[entity.prototypeId];
                if (!baseName || baseName === interfaceNameById[id]) {
                    return undefined;
                }
                return baseName;
            })(),
            members
        });
    }

    const rootByName: Record<string, RootBindingIR> = Object.create(null);
    for (let i = 0; i < rootEvents.length; i += 1) {
        const event = rootEvents[i];
        if (typeof event.name !== "string" || !event.name) {
            continue;
        }

        const objectId = toObjectId(event);
        let typeText = "any";
        if (objectId !== null && interfaceNameById[objectId]) {
            typeText = interfaceNameById[objectId];
            if (entityKindById[objectId] === "function") {
                typeText = "FmodAnyFunction & " + typeText;
            }
        } else if (event.valueKind === "function") {
            typeText = "FmodAnyFunction";
        } else {
            typeText = runtimeValueKindToType(event.valueKind);
        }

        rootByName[event.name] = {
            name: event.name,
            typeText,
            valueKind: String(event.valueKind || "unknown"),
            objectId
        };
    }

    const roots = stableSortStrings(Object.keys(rootByName)).map(function (name) {
        return rootByName[name];
    });

    if (hostInterfaces.length === 0) {
        warnings.push("No host interfaces found in runtime.jsonl.");
    }
    if (roots.length === 0) {
        warnings.push("No roots found in runtime.jsonl.");
    }

    return {
        hostInterfaces,
        roots,
        interfaceNameById,
        entityKindById
    };
}

function mergeModel(parsed: ParsedProbeData, warnings: string[]): ModelEntityIR[] {
    const modelByType = parsed.model.byType;

    const entityEvents = modelByType.modelEntity || [];
    const propertyEvents = modelByType.modelProperty || [];
    const relationshipEvents = modelByType.modelRelationship || [];

    const entityMap: Record<string, ModelEntityIR> = Object.create(null);

    for (let i = 0; i < entityEvents.length; i += 1) {
        const event = entityEvents[i];
        if (typeof event.name !== "string" || !event.name) {
            continue;
        }
        let superEntities: string[] = [];
        if (Array.isArray(event.superEntities)) {
            superEntities = event.superEntities.map(function (x: any) { return String(x); });
        }

        entityMap[event.name] = {
            name: event.name,
            superEntities,
            isAbstract: event.isAbstract,
            isGlobal: event.isGlobal,
            isSingleton: event.isSingleton,
            properties: [],
            relationships: []
        };
    }

    for (let i = 0; i < propertyEvents.length; i += 1) {
        const event = propertyEvents[i];
        if (typeof event.entityName !== "string" || typeof event.name !== "string") {
            continue;
        }
        if (!entityMap[event.entityName]) {
            warnings.push("modelProperty references unknown entity: " + event.entityName);
            continue;
        }
        entityMap[event.entityName].properties.push({
            name: event.name,
            dataTypeRaw: event.dataTypeRaw,
            dataTypeNormalized: String(event.dataTypeNormalized || "any"),
            defaultValueRaw: event.defaultValueRaw,
            defaultValueNormalized: event.defaultValueNormalized
        });
    }

    for (let i = 0; i < relationshipEvents.length; i += 1) {
        const event = relationshipEvents[i];
        if (typeof event.entityName !== "string" || typeof event.name !== "string") {
            continue;
        }
        if (!entityMap[event.entityName]) {
            warnings.push("modelRelationship references unknown entity: " + event.entityName);
            continue;
        }
        entityMap[event.entityName].relationships.push({
            name: event.name,
            cardinalityRaw: event.cardinalityRaw,
            cardinalityNormalized: String(event.cardinalityNormalized || ""),
            destinationTypeRaw: event.destinationTypeRaw,
            destinationTypeNormalized: String(event.destinationTypeNormalized || ""),
            isRequiredRaw: event.isRequiredRaw,
            isRequiredNormalized: event.isRequiredNormalized
        });
    }

    const entityNames = stableSortStrings(Object.keys(entityMap));
    const modelEntities: ModelEntityIR[] = [];
    for (let i = 0; i < entityNames.length; i += 1) {
        const entity = entityMap[entityNames[i]];
        entity.properties.sort(function (a, b) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        entity.relationships.sort(function (a, b) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        modelEntities.push(entity);
    }

    if (modelEntities.length === 0) {
        warnings.push("No model entities found in model.jsonl.");
    }

    return modelEntities;
}

export function mergeProbeDataToIR(parsed: ParsedProbeData): MergedIR {
    const warnings = parsed.warnings.slice();
    const runtime = mergeRuntime(parsed, warnings);
    const modelEntities = mergeModel(parsed, warnings);

    return {
        hostInterfaces: runtime.hostInterfaces,
        roots: runtime.roots,
        modelEntities,
        warnings
    };
}

export function toTsMemberName(name: string): string {
    return isIdentifier(name) ? name : JSON.stringify(name);
}
