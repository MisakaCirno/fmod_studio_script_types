
/* global studio, console, global, ProbeConfig */
(function (root) {
    var UNDEFINED_SENTINEL = "__undefined__";

    function nowIsoString() {
        return new Date().toISOString();
    }

    function toUnixPath(path) {
        if (typeof path !== "string") {
            return path;
        }
        return path.replace(/\\/g, "/");
    }

    function joinPath(left, right) {
        var a = toUnixPath(left || "");
        var b = toUnixPath(right || "");
        if (!a) {
            return b;
        }
        if (!b) {
            return a;
        }
        if (a.charAt(a.length - 1) === "/") {
            a = a.slice(0, -1);
        }
        if (b.charAt(0) === "/") {
            b = b.slice(1);
        }
        return a + "/" + b;
    }

    function basename(path) {
        var normalized = toUnixPath(path || "");
        var index = normalized.lastIndexOf("/");
        if (index < 0) {
            return normalized;
        }
        return normalized.slice(index + 1);
    }

    function isIdentifierName(name) {
        return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
    }

    function makePath(basePath, propName) {
        if (!basePath) {
            return String(propName);
        }
        if (isIdentifierName(propName)) {
            return basePath + "." + propName;
        }
        return basePath + "[" + JSON.stringify(String(propName)) + "]";
    }

    function makeErrorMessage(err) {
        if (!err) {
            return "Unknown error";
        }
        if (typeof err.message === "string" && err.message.length > 0) {
            return err.message;
        }
        try {
            return String(err);
        } catch (stringErr) {
            return "Unstringifiable error";
        }
    }

    function tryLoadConfig() {
        if (typeof ProbeConfig !== "undefined" && ProbeConfig) {
            return ProbeConfig;
        }

        var loader = null;
        try {
            loader = studio && studio.system && studio.system.require;
        } catch (err) {
            loader = null;
        }

        if (typeof loader === "function") {
            var candidates = [];
            if (typeof __dirname === "string" && __dirname.length > 0) {
                candidates.push(joinPath(__dirname, "probe-config.js"));
                candidates.push(joinPath(__dirname, "./probe-config.js"));
            }
            candidates.push("scripts/probe-config.js");
            candidates.push("./scripts/probe-config.js");
            candidates.push("probe-config.js");

            for (var i = 0; i < candidates.length; i += 1) {
                try {
                    loader(candidates[i]);
                    if (typeof ProbeConfig !== "undefined" && ProbeConfig) {
                        return ProbeConfig;
                    }
                } catch (loadErr) {
                    // keep trying next path
                }
            }
        }

        return createFallbackConfig();
    }

    function createFallbackConfig() {
        var roots = [];
        if (typeof studio !== "undefined") {
            roots.push({ name: "studio", value: studio });
        }
        if (typeof console !== "undefined") {
            roots.push({ name: "console", value: console });
        }
        if (typeof global !== "undefined") {
            roots.push({ name: "global", value: global });
        }

        var outputDir = "data";
        if (typeof __dirname === "string" && __dirname.length > 0) {
            var scriptDir = toUnixPath(__dirname);
            if (/\/scripts$/i.test(scriptDir)) {
                outputDir = scriptDir.replace(/\/scripts$/i, "/data");
            } else {
                outputDir = scriptDir + "/data";
            }
        }

        return {
            probeVersion: "0.1.0",
            targetFmodVersion: "2.02.15",
            outputDir: outputDir,
            runtimeFileName: "runtime.jsonl",
            modelFileName: "model.jsonl",
            builtinDirName: "builtin",
            roots: roots,
            includeExtraGlobals: [
                "print",
                "gc",
                "version",
                "__filename",
                "__dirname",
                "alert",
                "confirm",
                "prompt"
            ],
            maxDepth: 6,
            maxPropertiesPerObject: 500,
            scanProjectModel: true,
            exportBuiltins: true,
            managedObjectDeepScanEnabled: false,
            readAccessorValues: false,
            signatureNamePattern: "^([A-Za-z_$][A-Za-z0-9_$]*)\\((.*)\\)$",
            knownHiddenLogicalNames: ["getText", "getNumber", "print", "backtrace"],
            builtinFiles: [
                { source: ":/Scripts/api.js", destName: "api.js" },
                { source: ":/Scripts/managed_objects.js", destName: "managed_objects.js" },
                { source: ":/qtwebchannel/qwebchannel.js", destName: "qwebchannel.js" }
            ],
            expectedProjectModelEntityCount: 205
        };
    }

    function normalizeConfig(config) {
        var c = config || {};

        if (!c.outputDir) {
            c.outputDir = "data";
        }
        c.outputDir = toUnixPath(c.outputDir);
        if (!c.runtimeFileName) {
            c.runtimeFileName = "runtime.jsonl";
        }
        if (!c.modelFileName) {
            c.modelFileName = "model.jsonl";
        }
        if (!c.builtinDirName) {
            c.builtinDirName = "builtin";
        }
        if (!c.roots) {
            c.roots = [];
        }
        if (!c.includeExtraGlobals) {
            c.includeExtraGlobals = [];
        }
        if (!c.maxDepth && c.maxDepth !== 0) {
            c.maxDepth = 6;
        }
        if (!c.maxPropertiesPerObject && c.maxPropertiesPerObject !== 0) {
            c.maxPropertiesPerObject = 500;
        }
        if (typeof c.scanProjectModel !== "boolean") {
            c.scanProjectModel = true;
        }
        if (typeof c.exportBuiltins !== "boolean") {
            c.exportBuiltins = true;
        }
        if (typeof c.readAccessorValues !== "boolean") {
            c.readAccessorValues = false;
        }
        if (!c.signatureNamePattern) {
            c.signatureNamePattern = "^([A-Za-z_$][A-Za-z0-9_$]*)\\((.*)\\)$";
        }
        if (!c.knownHiddenLogicalNames) {
            c.knownHiddenLogicalNames = [];
        }
        if (!c.builtinFiles) {
            c.builtinFiles = [];
        }
        if (!c.expectedProjectModelEntityCount && c.expectedProjectModelEntityCount !== 0) {
            c.expectedProjectModelEntityCount = 205;
        }
        if (!c.probeVersion) {
            c.probeVersion = "0.1.0";
        }
        if (!c.targetFmodVersion) {
            c.targetFmodVersion = "2.02.15";
        }
        return c;
    }

    function createJsonlWriter(filePath) {
        var file = studio.system.getFile(filePath);
        if (!file || !file.open(studio.system.openMode.WriteOnly)) {
            throw new Error("Cannot open output file for writing: " + filePath);
        }

        function emit(type, payload) {
            var record = { type: type, time: nowIsoString() };
            var key;
            if (payload && typeof payload === "object") {
                for (key in payload) {
                    if (Object.prototype.hasOwnProperty.call(payload, key)) {
                        record[key] = payload[key];
                    }
                }
            }

            var line;
            try {
                line = JSON.stringify(record);
            } catch (jsonErr) {
                line = JSON.stringify({
                    type: "error",
                    time: nowIsoString(),
                    stage: "json.stringify",
                    message: makeErrorMessage(jsonErr),
                    originalType: type
                });
            }
            file.writeText(line + "\n");
        }

        function close() {
            try {
                file.close();
            } catch (closeErr) {
                // ignore
            }
        }

        return {
            path: filePath,
            emit: emit,
            close: close
        };
    }

    function createSafeTools(onError) {
        function safeCall(stage, ownerId, propName, fn) {
            try {
                return { ok: true, value: fn() };
            } catch (err) {
                onError({
                    stage: stage,
                    ownerId: ownerId,
                    propName: propName,
                    message: makeErrorMessage(err)
                });
                return { ok: false, error: err };
            }
        }

        return {
            getOwnPropertyNames: function (obj, stage, ownerId, propName) {
                return safeCall(stage || "reflect.getOwnPropertyNames", ownerId, propName, function () {
                    return Object.getOwnPropertyNames(obj);
                });
            },
            getOwnPropertyDescriptor: function (obj, name, stage, ownerId) {
                return safeCall(stage || "reflect.getOwnPropertyDescriptor", ownerId, name, function () {
                    return Object.getOwnPropertyDescriptor(obj, name);
                });
            },
            getPrototypeOf: function (obj, stage, ownerId, propName) {
                return safeCall(stage || "reflect.getPrototypeOf", ownerId, propName, function () {
                    return Object.getPrototypeOf(obj);
                });
            },
            readProperty: function (obj, name, stage, ownerId) {
                return safeCall(stage || "reflect.readProperty", ownerId, name, function () {
                    return obj[name];
                });
            },
            objectToString: function (value, stage, ownerId, propName) {
                return safeCall(stage || "reflect.objectToString", ownerId, propName, function () {
                    return Object.prototype.toString.call(value);
                });
            },
            functionToString: function (fn, stage, ownerId, propName) {
                return safeCall(stage || "reflect.functionToString", ownerId, propName, function () {
                    return Function.prototype.toString.call(fn);
                });
            },
            hasOwnProperty: function (obj, name, stage, ownerId) {
                return safeCall(stage || "reflect.hasOwnProperty", ownerId, name, function () {
                    return Object.prototype.hasOwnProperty.call(obj, name);
                });
            },
            inOperator: function (obj, name, stage, ownerId) {
                return safeCall(stage || "reflect.inOperator", ownerId, name, function () {
                    return name in obj;
                });
            },
            functionLength: function (fn, stage, ownerId, propName) {
                return safeCall(stage || "reflect.functionLength", ownerId, propName, function () {
                    return fn.length;
                });
            }
        };
    }
    function classifyValueKind(value) {
        if (value === null) {
            return "null";
        }
        var t = typeof value;
        if (t === "undefined") {
            return "undefined";
        }
        if (t === "function") {
            return "function";
        }
        if (t === "object") {
            return "object";
        }
        if (t === "boolean" || t === "number" || t === "string") {
            return t;
        }
        return "unknown";
    }

    function primitiveToJsonValue(value) {
        if (value === undefined) {
            return UNDEFINED_SENTINEL;
        }
        if (value === null) {
            return null;
        }
        var t = typeof value;
        if (t === "string" || t === "number" || t === "boolean") {
            return value;
        }
        return null;
    }

    function normalizeHostArgType(raw) {
        if (typeof raw !== "string") {
            return "any";
        }
        var key = raw.toLowerCase();
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

    function normalizeModelDataType(raw) {
        if (typeof raw !== "string") {
            return "any";
        }
        if (raw === "String") {
            return "string";
        }
        if (raw === "Bool") {
            return "boolean";
        }
        if (raw === "Int" || raw === "Float" || raw === "Enum") {
            return "number";
        }
        return "any";
    }

    function normalizeCardinality(raw) {
        if (raw === "ToOne") {
            return "one";
        }
        if (raw === "ToMany") {
            return "many";
        }
        return raw;
    }

    function normalizeBooleanLike(raw) {
        if (raw === true || raw === false) {
            return raw;
        }
        if (typeof raw === "string") {
            if (raw === "true") {
                return true;
            }
            if (raw === "false") {
                return false;
            }
        }
        return raw;
    }

    function normalizeDefaultValue(raw) {
        if (typeof raw === "string") {
            if (raw === "true") {
                return true;
            }
            if (raw === "false") {
                return false;
            }
            if (raw !== "" && /^-?\d+(\.\d+)?$/.test(raw)) {
                return Number(raw);
            }
        }
        return raw;
    }

    function rawToSerializable(value) {
        if (value === undefined) {
            return UNDEFINED_SENTINEL;
        }
        if (value === null) {
            return null;
        }
        var t = typeof value;
        if (t === "string" || t === "number" || t === "boolean") {
            return value;
        }
        try {
            return String(value);
        } catch (err) {
            return "[unstringifiable]";
        }
    }

    function parseSignatureName(rawName, signatureRegex) {
        if (typeof rawName !== "string") {
            return null;
        }
        var match = signatureRegex.exec(rawName);
        if (!match) {
            return null;
        }
        var logicalName = match[1];
        var argRaw = match[2];
        var parts = [];
        if (argRaw.length > 0) {
            var split = argRaw.split(",");
            for (var i = 0; i < split.length; i += 1) {
                var token = split[i];
                token = token.replace(/^\s+|\s+$/g, "");
                if (token.length > 0) {
                    parts.push(token);
                }
            }
        }
        return {
            rawName: rawName,
            logicalName: logicalName,
            argTypeNames: parts
        };
    }

    function classifyFunctionSource(tag, sourceText) {
        if (typeof sourceText !== "string" || sourceText.length === 0) {
            return "unknown";
        }
        if (sourceText.indexOf("[native code]") >= 0) {
            return "native";
        }
        if (isWrapperSource(sourceText)) {
            return "js-wrapper";
        }
        if (tag === "[object Function]" || tag === "[object QtFunction]") {
            return "js";
        }
        return "unknown";
    }

    function isWrapperSource(sourceText) {
        return sourceText.indexOf(".apply(") >= 0 ||
            sourceText.indexOf(".call(") >= 0 ||
            sourceText.indexOf("studio._internal.") >= 0 ||
            sourceText.indexOf("studio.runExtension(") >= 0 ||
            sourceText.indexOf("studio.runRootExtension(") >= 0 ||
            sourceText.indexOf("this._native.") >= 0 ||
            sourceText.indexOf("studio.system.") >= 0;
    }

    function detectWrapperKind(sourceText) {
        if (typeof sourceText !== "string" || sourceText.length === 0) {
            return "none";
        }
        if (sourceText.indexOf(".apply(") >= 0) {
            return "apply-forwarder";
        }
        if (sourceText.indexOf(".call(") >= 0) {
            return "call-forwarder";
        }
        if (sourceText.indexOf("studio.runExtension(") >= 0 ||
            sourceText.indexOf("studio.runRootExtension(") >= 0) {
            return "extension-forwarder";
        }
        if (sourceText.indexOf("this._native.") >= 0 || sourceText.indexOf("studio._internal.") >= 0) {
            return "native-wrapper";
        }
        return "none";
    }

    function createRuntimeState(config, writer) {
        var state = {
            config: config,
            writer: writer,
            nextObjectId: 1,
            objectRefs: [],
            objectIds: [],
            firstPaths: [],
            entityEmittedById: {},
            scannedById: {},
            stats: {
                roots: 0,
                entities: 0,
                properties: 0,
                signatureMembers: 0,
                callables: 0
            }
        };

        state.emit = function (type, payload) {
            writer.emit(type, payload);
        };

        state.safe = createSafeTools(function (errorPayload) {
            writer.emit("error", errorPayload);
        });

        state.getObjectId = function (value, firstPathHint) {
            var i;
            for (i = 0; i < state.objectRefs.length; i += 1) {
                if (state.objectRefs[i] === value) {
                    return { id: state.objectIds[i], isNew: false, firstPath: state.firstPaths[i] };
                }
            }
            var id = state.nextObjectId;
            state.nextObjectId += 1;
            state.objectRefs.push(value);
            state.objectIds.push(id);
            state.firstPaths.push(firstPathHint || "");
            return { id: id, isNew: true, firstPath: firstPathHint || "" };
        };

        return state;
    }

    function scanRuntime(config, writer) {
        var state = createRuntimeState(config, writer);
        var signatureRegex = new RegExp(config.signatureNamePattern);

        state.emit("session", {
            mode: "runtime",
            probeVersion: config.probeVersion,
            targetFmodVersion: config.targetFmodVersion,
            managedObjectDeepScanEnabled: !!config.managedObjectDeepScanEnabled,
            readAccessorValues: !!config.readAccessorValues,
            maxDepth: config.maxDepth,
            maxPropertiesPerObject: config.maxPropertiesPerObject
        });

        var usedRootNames = {};
        var i;
        var roots = config.roots || [];
        for (i = 0; i < roots.length; i += 1) {
            if (!roots[i] || typeof roots[i].name !== "string") {
                continue;
            }
            usedRootNames[roots[i].name] = true;
            scanRootValue(state, roots[i].name, roots[i].value, "configRoot", signatureRegex);
        }

        var extras = config.includeExtraGlobals || [];
        for (i = 0; i < extras.length; i += 1) {
            var extraName = extras[i];
            if (usedRootNames[extraName]) {
                continue;
            }
            var extraRead = state.safe.readProperty(root, extraName, "runtime.readExtraGlobal", null);
            if (!extraRead.ok || typeof extraRead.value === "undefined") {
                continue;
            }
            scanRootValue(state, extraName, extraRead.value, "extraGlobal", signatureRegex);
        }

        state.emit("scanSummary", {
            mode: "runtime",
            roots: state.stats.roots,
            entities: state.stats.entities,
            properties: state.stats.properties,
            signatureMembers: state.stats.signatureMembers,
            callables: state.stats.callables
        });
    }

    function scanRootValue(state, name, value, discoveredBy, signatureRegex) {
        var kind = classifyValueKind(value);
        var objectId = null;
        if (kind === "object" || kind === "function") {
            objectId = state.getObjectId(value, name).id;
        }

        state.stats.roots += 1;
        state.emit("root", {
            name: name,
            discoveredBy: discoveredBy,
            valueKind: kind,
            objectId: objectId
        });

        scanValue(state, name, value, 0, signatureRegex);
    }

    function scanValue(state, path, value, depth, signatureRegex) {
        var kind = classifyValueKind(value);
        if (kind !== "object" && kind !== "function") {
            return;
        }

        var info = state.getObjectId(value, path);
        var objectId = info.id;
        if (!state.entityEmittedById[objectId]) {
            emitEntity(state, value, objectId, info.firstPath);
            state.entityEmittedById[objectId] = true;
        }

        if (state.scannedById[objectId]) {
            return;
        }
        state.scannedById[objectId] = true;

        if (kind === "function") {
            emitCallable(state, value, objectId, path);
        }

        if (depth >= state.config.maxDepth) {
            return;
        }

        scanMembers(state, value, objectId, path, depth, signatureRegex);
    }

    function emitEntity(state, value, objectId, firstPath) {
        var safe = state.safe;
        var tagRes = safe.objectToString(value, "runtime.entity.objectToString", objectId);
        var protoRes = safe.getPrototypeOf(value, "runtime.entity.getPrototypeOf", objectId);
        var ctorName = null;
        var protoId = null;

        if (value && value.constructor && value.constructor.name) {
            ctorName = String(value.constructor.name);
        }

        if (protoRes.ok && protoRes.value && (typeof protoRes.value === "object" || typeof protoRes.value === "function")) {
            protoId = state.getObjectId(protoRes.value, firstPath + ".__proto__").id;
        }

        state.stats.entities += 1;
        state.emit("entity", {
            id: objectId,
            kind: typeof value === "function" ? "function" : "object",
            typeofValue: typeof value,
            tag: tagRes.ok ? tagRes.value : null,
            ctorName: ctorName,
            isArray: Array.isArray(value),
            prototypeId: protoId,
            firstPath: firstPath
        });
    }

    function emitCallable(state, fnValue, objectId, path) {
        var safe = state.safe;
        var tagRes = safe.objectToString(fnValue, "runtime.callable.objectToString", objectId, path);
        var srcRes = safe.functionToString(fnValue, "runtime.callable.functionToString", objectId, path);
        var lenRes = safe.functionLength(fnValue, "runtime.callable.length", objectId, path);

        var tag = tagRes.ok ? tagRes.value : null;
        var src = srcRes.ok ? srcRes.value : null;
        var sourceKind = classifyFunctionSource(tag, src);
        var wrapperKind = detectWrapperKind(src);
        var isQtFunction = tag === "[object QtFunction]";

        state.stats.callables += 1;
        state.emit("callable", {
            objectId: objectId,
            path: path,
            name: basename(path),
            length: lenRes.ok ? lenRes.value : null,
            lengthReliable: !isQtFunction,
            sourceKind: sourceKind,
            sourceSnippet: typeof src === "string" ? src.slice(0, 400) : null,
            hostFunctionTag: tag,
            wrapperKind: wrapperKind
        });
    }

    function enumerateForInMap(state, owner, ownerId) {
        var map = {};
        try {
            for (var key in owner) {
                map[key] = true;
            }
        } catch (err) {
            state.emit("error", {
                stage: "runtime.forIn",
                ownerId: ownerId,
                message: makeErrorMessage(err)
            });
        }
        return map;
    }

    function descriptorKind(descriptor) {
        if (!descriptor) {
            return "unknown";
        }
        if (Object.prototype.hasOwnProperty.call(descriptor, "value") ||
            Object.prototype.hasOwnProperty.call(descriptor, "writable")) {
            return "data";
        }
        if (descriptor.get || descriptor.set) {
            return "accessor";
        }
        return "unknown";
    }

    function readPropertyValue(state, owner, rawName, descriptor, dKind, ownerId) {
        if (dKind === "data" && descriptor && Object.prototype.hasOwnProperty.call(descriptor, "value")) {
            return { ok: true, hasValue: true, value: descriptor.value, source: "descriptor" };
        }

        if (dKind === "accessor" && !state.config.readAccessorValues) {
            return { ok: false, hasValue: false, skipped: true, message: "accessor-read-disabled" };
        }

        var valueRes = state.safe.readProperty(owner, rawName, "runtime.property.readValue", ownerId);
        if (!valueRes.ok) {
            return { ok: false, hasValue: false, message: "read-failed" };
        }
        return { ok: true, hasValue: true, value: valueRes.value, source: "property-read" };
    }
    function scanMembers(state, owner, ownerId, ownerPath, depth, signatureRegex) {
        var safe = state.safe;
        var ownRes = safe.getOwnPropertyNames(owner, "runtime.members.getOwnPropertyNames", ownerId);
        if (!ownRes.ok || !ownRes.value) {
            return;
        }

        var ownNames = ownRes.value;
        var forInMap = enumerateForInMap(state, owner, ownerId);
        var ownNameSet = {};
        var derivedLogicalNameSet = {};
        var maxCount = state.config.maxPropertiesPerObject;
        var totalOwnNames = ownNames.length;
        var limit = totalOwnNames > maxCount ? maxCount : totalOwnNames;

        if (totalOwnNames > maxCount) {
            state.emit("error", {
                stage: "runtime.members.truncated",
                ownerId: ownerId,
                message: "Too many properties on object, truncated scan.",
                totalOwnNames: totalOwnNames,
                maxPropertiesPerObject: maxCount
            });
        }

        var i;
        for (i = 0; i < limit; i += 1) {
            var rawName = ownNames[i];
            ownNameSet[rawName] = true;

            var processResult = processProperty(state, owner, ownerId, ownerPath, rawName, depth, {
                signatureRegex: signatureRegex,
                discoveredBy: "ownNames",
                listedInOwnNames: true,
                forInMap: forInMap
            });

            if (processResult && processResult.signature && processResult.signature.logicalName) {
                derivedLogicalNameSet[processResult.signature.logicalName] = true;
            }
        }

        var logicalName;
        for (logicalName in derivedLogicalNameSet) {
            if (!Object.prototype.hasOwnProperty.call(derivedLogicalNameSet, logicalName)) {
                continue;
            }
            if (ownNameSet[logicalName]) {
                continue;
            }
            processDerivedLogicalName(state, owner, ownerId, ownerPath, logicalName, depth, signatureRegex, forInMap, ownNameSet);
        }

        var hiddenNames = state.config.knownHiddenLogicalNames || [];
        for (i = 0; i < hiddenNames.length; i += 1) {
            logicalName = hiddenNames[i];
            if (ownNameSet[logicalName] || derivedLogicalNameSet[logicalName]) {
                continue;
            }
            processDerivedLogicalName(state, owner, ownerId, ownerPath, logicalName, depth, signatureRegex, forInMap, ownNameSet);
        }
    }

    function processDerivedLogicalName(state, owner, ownerId, ownerPath, logicalName, depth, signatureRegex, forInMap, ownNameSet) {
        var inRes = state.safe.inOperator(owner, logicalName, "runtime.logicalName.inOperator", ownerId);
        var hasOwnRes = state.safe.hasOwnProperty(owner, logicalName, "runtime.logicalName.hasOwn", ownerId);
        var descRes = state.safe.getOwnPropertyDescriptor(owner, logicalName, "runtime.logicalName.getOwnPropertyDescriptor", ownerId);

        var appearsInObject = inRes.ok ? !!inRes.value : false;
        var hasOwn = hasOwnRes.ok ? !!hasOwnRes.value : false;
        var hasDescriptor = descRes.ok && !!descRes.value;

        if (!appearsInObject && !hasOwn && !hasDescriptor) {
            return;
        }

        ownNameSet[logicalName] = true;
        processProperty(state, owner, ownerId, ownerPath, logicalName, depth, {
            signatureRegex: signatureRegex,
            discoveredBy: "derivedLogicalName",
            listedInOwnNames: false,
            forInMap: forInMap,
            forcedHasOwn: hasOwn,
            forcedInObject: appearsInObject,
            forcedDescriptor: descRes.ok ? descRes.value : null
        });
    }

    function processProperty(state, owner, ownerId, ownerPath, rawName, depth, options) {
        var safe = state.safe;
        var signature = parseSignatureName(rawName, options.signatureRegex);
        var logicalName = signature ? signature.logicalName : rawName;
        var nameKind = signature ? "signature" : "plain";

        var hasOwn = false;
        var inObject = false;
        var descriptor = null;
        var descRes;

        if (typeof options.forcedHasOwn === "boolean") {
            hasOwn = options.forcedHasOwn;
        } else {
            var hasOwnRes = safe.hasOwnProperty(owner, rawName, "runtime.property.hasOwn", ownerId);
            hasOwn = hasOwnRes.ok ? !!hasOwnRes.value : false;
        }

        if (typeof options.forcedInObject === "boolean") {
            inObject = options.forcedInObject;
        } else {
            var inRes = safe.inOperator(owner, rawName, "runtime.property.inOperator", ownerId);
            inObject = inRes.ok ? !!inRes.value : false;
        }

        if (Object.prototype.hasOwnProperty.call(options, "forcedDescriptor")) {
            descriptor = options.forcedDescriptor;
        } else {
            descRes = safe.getOwnPropertyDescriptor(owner, rawName, "runtime.property.getOwnPropertyDescriptor", ownerId);
            descriptor = descRes.ok ? descRes.value : null;
        }

        var dKind = descriptorKind(descriptor);
        var valueInfo = readPropertyValue(state, owner, rawName, descriptor, dKind, ownerId);
        var valueKind = valueInfo.hasValue ? classifyValueKind(valueInfo.value) : "unknown";
        var valueRef = null;
        var primitiveValue = null;

        if (valueInfo.hasValue) {
            if (valueKind === "object" || valueKind === "function") {
                valueRef = state.getObjectId(valueInfo.value, makePath(ownerPath, rawName)).id;
            } else {
                primitiveValue = primitiveToJsonValue(valueInfo.value);
            }
        }

        state.stats.properties += 1;
        state.emit("property", {
            ownerId: ownerId,
            ownerPath: ownerPath,
            rawName: rawName,
            logicalName: logicalName,
            nameKind: nameKind,
            signatureArgs: signature ? signature.argTypeNames : null,
            own: hasOwn,
            inObject: inObject,
            listedInOwnNames: !!options.listedInOwnNames,
            enumerable: descriptor ? !!descriptor.enumerable : null,
            configurable: descriptor ? !!descriptor.configurable : null,
            writable: descriptor && Object.prototype.hasOwnProperty.call(descriptor, "writable") ? !!descriptor.writable : null,
            descriptorKind: dKind,
            valueKind: valueKind,
            valueRef: valueRef,
            primitiveValue: primitiveValue,
            readError: valueInfo.ok ? null : (valueInfo.message || "read-failed"),
            visibleInForIn: !!(options.forInMap && options.forInMap[rawName]),
            startsWithUnderscore: typeof rawName === "string" && rawName.charAt(0) === "_",
            discoveredBy: [options.discoveredBy]
        });

        if (signature) {
            var aliasInRes = safe.inOperator(owner, logicalName, "runtime.signature.aliasIn", ownerId);
            var aliasOwnRes = safe.hasOwnProperty(owner, logicalName, "runtime.signature.aliasOwn", ownerId);
            var aliasTag = null;
            if (valueInfo.hasValue && typeof valueInfo.value === "function") {
                var tagRes = safe.objectToString(valueInfo.value, "runtime.signature.aliasTag", ownerId, rawName);
                aliasTag = tagRes.ok ? tagRes.value : null;
            }

            state.stats.signatureMembers += 1;
            state.emit("signatureMember", {
                ownerId: ownerId,
                rawName: rawName,
                logicalName: logicalName,
                argTypeNames: signature.argTypeNames,
                argTypeNamesNormalized: mapArray(signature.argTypeNames, normalizeHostArgType),
                valueRef: valueRef,
                hostFunctionTag: aliasTag,
                hasLogicalAlias: (aliasInRes.ok && !!aliasInRes.value) || (aliasOwnRes.ok && !!aliasOwnRes.value),
                logicalAliasName: logicalName
            });
        }

        if (valueInfo.hasValue && (valueKind === "object" || valueKind === "function")) {
            if (depth + 1 <= state.config.maxDepth) {
                scanValue(state, makePath(ownerPath, rawName), valueInfo.value, depth + 1, options.signatureRegex);
            }
        }

        return {
            signature: signature
        };
    }

    function mapArray(items, mapper) {
        if (!items || typeof items.length !== "number") {
            return [];
        }
        var output = [];
        for (var i = 0; i < items.length; i += 1) {
            output.push(mapper(items[i]));
        }
        return output;
    }

    function getModelRoot(safe, writer) {
        if (typeof studio === "undefined") {
            writer.emit("error", {
                stage: "model.root",
                message: "Global studio is undefined."
            });
            return null;
        }

        var projectRes = safe.readProperty(studio, "project", "model.root.project", null);
        if (!projectRes.ok || !projectRes.value) {
            writer.emit("error", {
                stage: "model.root.project",
                message: "Cannot read studio.project."
            });
            return null;
        }

        var modelRes = safe.readProperty(projectRes.value, "model", "model.root.model", null);
        if (!modelRes.ok || !modelRes.value) {
            writer.emit("error", {
                stage: "model.root.model",
                message: "Cannot read studio.project.model."
            });
            return null;
        }

        return modelRes.value;
    }

    function asStringArray(raw) {
        if (!raw) {
            return [];
        }
        var out = [];
        var i;
        if (Array.isArray(raw)) {
            for (i = 0; i < raw.length; i += 1) {
                out.push(String(raw[i]));
            }
            return out;
        }
        if (typeof raw === "string") {
            out.push(raw);
            return out;
        }
        if (typeof raw.length === "number") {
            for (i = 0; i < raw.length; i += 1) {
                out.push(String(raw[i]));
            }
            return out;
        }
        out.push(String(raw));
        return out;
    }
    function scanProjectModel(config, writer) {
        var safe = createSafeTools(function (errorPayload) {
            writer.emit("error", errorPayload);
        });
        var model = getModelRoot(safe, writer);
        if (!model) {
            return;
        }

        writer.emit("session", {
            mode: "model",
            probeVersion: config.probeVersion,
            targetFmodVersion: config.targetFmodVersion
        });

        var namesRes = safe.getOwnPropertyNames(model, "model.entityNames", null);
        if (!namesRes.ok || !namesRes.value) {
            writer.emit("error", {
                stage: "model.entityNames",
                message: "Cannot enumerate studio.project.model own property names."
            });
            return;
        }

        var entityNames = namesRes.value;
        writer.emit("modelScanSummary", {
            entityNameCount: entityNames.length
        });

        if (entityNames.length !== config.expectedProjectModelEntityCount) {
            writer.emit("error", {
                stage: "model.entityCount",
                message: "Entity count mismatch.",
                expected: config.expectedProjectModelEntityCount,
                actual: entityNames.length
            });
        }

        for (var i = 0; i < entityNames.length; i += 1) {
            var entityName = entityNames[i];
            scanModelEntity(config, writer, safe, model, entityName);
        }
    }

    function scanModelEntity(config, writer, safe, modelRoot, entityName) {
        var entityRes = safe.readProperty(modelRoot, entityName, "model.entity.read", null);
        if (!entityRes.ok) {
            return;
        }
        var entity = entityRes.value;
        if (!entity || (typeof entity !== "object" && typeof entity !== "function")) {
            return;
        }

        var superEntitiesRawRes = safe.readProperty(entity, "superEntities", "model.entity.superEntities", null);
        var isAbstractRawRes = safe.readProperty(entity, "isAbstract", "model.entity.isAbstract", null);
        var isGlobalRawRes = safe.readProperty(entity, "isGlobal", "model.entity.isGlobal", null);
        var isSingletonRawRes = safe.readProperty(entity, "isSingleton", "model.entity.isSingleton", null);

        var superEntitiesRaw = superEntitiesRawRes.ok ? superEntitiesRawRes.value : undefined;
        var isAbstractRaw = isAbstractRawRes.ok ? isAbstractRawRes.value : undefined;
        var isGlobalRaw = isGlobalRawRes.ok ? isGlobalRawRes.value : undefined;
        var isSingletonRaw = isSingletonRawRes.ok ? isSingletonRawRes.value : undefined;

        writer.emit("modelEntity", {
            name: entityName,
            superEntitiesRaw: rawToSerializable(superEntitiesRaw),
            superEntities: asStringArray(superEntitiesRaw),
            isAbstractRaw: rawToSerializable(isAbstractRaw),
            isAbstract: normalizeBooleanLike(isAbstractRaw),
            isGlobalRaw: rawToSerializable(isGlobalRaw),
            isGlobal: normalizeBooleanLike(isGlobalRaw),
            isSingletonRaw: rawToSerializable(isSingletonRaw),
            isSingleton: normalizeBooleanLike(isSingletonRaw)
        });

        scanModelProperties(writer, safe, entityName, entity);
        scanModelRelationships(writer, safe, entityName, entity);
    }

    function scanModelProperties(writer, safe, entityName, entity) {
        var propsRes = safe.readProperty(entity, "properties", "model.entity.properties", null);
        if (!propsRes.ok || !propsRes.value) {
            return;
        }
        var props = propsRes.value;
        var propNamesRes = safe.getOwnPropertyNames(props, "model.properties.names", null);
        if (!propNamesRes.ok || !propNamesRes.value) {
            return;
        }
        var propNames = propNamesRes.value;

        for (var i = 0; i < propNames.length; i += 1) {
            var propName = propNames[i];
            var propDescRes = safe.readProperty(props, propName, "model.property.desc", null);
            if (!propDescRes.ok || !propDescRes.value) {
                continue;
            }
            var propDesc = propDescRes.value;

            var dataTypeRawRes = safe.readProperty(propDesc, "dataType", "model.property.dataType", null);
            var defaultRawRes = safe.readProperty(propDesc, "defaultValue", "model.property.defaultValue", null);
            var dataTypeRaw = dataTypeRawRes.ok ? dataTypeRawRes.value : undefined;
            var defaultRaw = defaultRawRes.ok ? defaultRawRes.value : undefined;

            writer.emit("modelProperty", {
                entityName: entityName,
                name: propName,
                dataTypeRaw: rawToSerializable(dataTypeRaw),
                dataTypeNormalized: normalizeModelDataType(String(dataTypeRaw)),
                defaultValueRaw: rawToSerializable(defaultRaw),
                defaultValueNormalized: normalizeDefaultValue(defaultRaw)
            });
        }
    }

    function scanModelRelationships(writer, safe, entityName, entity) {
        var relRes = safe.readProperty(entity, "relationships", "model.entity.relationships", null);
        if (!relRes.ok || !relRes.value) {
            return;
        }
        var rels = relRes.value;
        var relNamesRes = safe.getOwnPropertyNames(rels, "model.relationship.names", null);
        if (!relNamesRes.ok || !relNamesRes.value) {
            return;
        }
        var relNames = relNamesRes.value;

        for (var i = 0; i < relNames.length; i += 1) {
            var relName = relNames[i];
            var relDescRes = safe.readProperty(rels, relName, "model.relationship.desc", null);
            if (!relDescRes.ok || !relDescRes.value) {
                continue;
            }
            var relDesc = relDescRes.value;

            var cardinalityRawRes = safe.readProperty(relDesc, "cardinality", "model.relationship.cardinality", null);
            var destinationTypeRawRes = safe.readProperty(relDesc, "destinationType", "model.relationship.destinationType", null);
            var isRequiredRawRes = safe.readProperty(relDesc, "isRequired", "model.relationship.isRequired", null);

            var cardinalityRaw = cardinalityRawRes.ok ? cardinalityRawRes.value : undefined;
            var destinationTypeRaw = destinationTypeRawRes.ok ? destinationTypeRawRes.value : undefined;
            var isRequiredRaw = isRequiredRawRes.ok ? isRequiredRawRes.value : undefined;

            writer.emit("modelRelationship", {
                entityName: entityName,
                name: relName,
                cardinalityRaw: rawToSerializable(cardinalityRaw),
                cardinalityNormalized: normalizeCardinality(cardinalityRaw),
                destinationTypeRaw: rawToSerializable(destinationTypeRaw),
                destinationTypeNormalized: destinationTypeRaw === undefined ? null : String(destinationTypeRaw),
                isRequiredRaw: rawToSerializable(isRequiredRaw),
                isRequiredNormalized: normalizeBooleanLike(isRequiredRaw)
            });
        }
    }

    function readFileText(path) {
        var file = studio.system.getFile(path);
        if (!file || !file.open(studio.system.openMode.ReadOnly)) {
            throw new Error("Cannot open source file for reading: " + path);
        }
        try {
            var sizeValue = 0;
            if (typeof file.size === "function") {
                sizeValue = file.size();
            } else if (typeof file.size === "number") {
                sizeValue = file.size;
            }
            if (typeof sizeValue === "number" && sizeValue > 0) {
                return file.readText(sizeValue);
            }
            return file.readText();
        } finally {
            try {
                file.close();
            } catch (closeErr) {
                // ignore
            }
        }
    }

    function writeFileText(path, text) {
        var file = studio.system.getFile(path);
        if (!file || !file.open(studio.system.openMode.WriteOnly)) {
            throw new Error("Cannot open destination file for writing: " + path);
        }
        try {
            file.writeText(text);
        } finally {
            try {
                file.close();
            } catch (closeErr) {
                // ignore
            }
        }
    }

    function exportBuiltins(config, runtimeWriter) {
        var list = config.builtinFiles || [];
        for (var i = 0; i < list.length; i += 1) {
            var item = list[i];
            if (!item || typeof item.source !== "string") {
                continue;
            }
            var dstName = item.destName || basename(item.source);
            var dstPath = joinPath(joinPath(config.outputDir, config.builtinDirName), dstName);
            try {
                var text = readFileText(item.source);
                writeFileText(dstPath, text);
                runtimeWriter.emit("builtinExport", {
                    source: item.source,
                    destination: dstPath,
                    bytes: text ? text.length : 0
                });
            } catch (err) {
                runtimeWriter.emit("error", {
                    stage: "builtin.export",
                    message: makeErrorMessage(err),
                    source: item.source,
                    destination: dstPath
                });
            }
        }
    }

    function run() {
        var config = normalizeConfig(tryLoadConfig());
        var runtimeWriter = null;
        var modelWriter = null;

        try {
            var runtimePath = joinPath(config.outputDir, config.runtimeFileName);
            runtimeWriter = createJsonlWriter(runtimePath);
            scanRuntime(config, runtimeWriter);

            if (config.scanProjectModel) {
                var modelPath = joinPath(config.outputDir, config.modelFileName);
                modelWriter = createJsonlWriter(modelPath);
                scanProjectModel(config, modelWriter);
            }

            if (config.exportBuiltins) {
                exportBuiltins(config, runtimeWriter);
            }

            try {
                console.log("[probe] done");
                console.log("[probe] runtime: " + joinPath(config.outputDir, config.runtimeFileName));
                if (config.scanProjectModel) {
                    console.log("[probe] model: " + joinPath(config.outputDir, config.modelFileName));
                }
                if (config.exportBuiltins) {
                    console.log("[probe] builtin dir: " + joinPath(config.outputDir, config.builtinDirName));
                }
            } catch (logErr) {
                // ignore
            }
        } catch (fatalErr) {
            var message = makeErrorMessage(fatalErr);
            if (runtimeWriter) {
                runtimeWriter.emit("error", {
                    stage: "probe.fatal",
                    message: message
                });
            }
            try {
                console.log("[probe] fatal: " + message);
            } catch (logErr2) {
                // ignore
            }
            throw fatalErr;
        } finally {
            if (runtimeWriter) {
                runtimeWriter.close();
            }
            if (modelWriter) {
                modelWriter.close();
            }
        }
    }

    run();
})(this);
