/* global studio, console, ProbeConfig */
(function (root) {
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

    function makeErrorMessage(err) {
        if (!err) {
            return "Unknown error";
        }
        if (typeof err.message === "string" && err.message.length > 0) {
            return err.message;
        }
        try {
            return String(err);
        } catch (_stringErr) {
            return "Unstringifiable error";
        }
    }

    function safeCall(stage, fn) {
        try {
            return { ok: true, stage: stage, value: fn() };
        } catch (err) {
            return { ok: false, stage: stage, error: makeErrorMessage(err) };
        }
    }

    function getOutputDir() {
        if (typeof ProbeConfig !== "undefined" && ProbeConfig && ProbeConfig.outputDir) {
            return toUnixPath(ProbeConfig.outputDir);
        }
        if (typeof __dirname === "string" && __dirname.length > 0) {
            var scriptDir = toUnixPath(__dirname);
            if (/\/scripts$/i.test(scriptDir)) {
                return scriptDir.replace(/\/scripts$/i, "/data");
            }
            return scriptDir + "/data";
        }
        return "data";
    }

    function sortStrings(values) {
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

    function uniqueStrings(values) {
        var seen = Object.create(null);
        var out = [];
        var i;
        for (i = 0; i < values.length; i += 1) {
            var value = values[i];
            if (!value || seen[value]) {
                continue;
            }
            seen[value] = true;
            out.push(value);
        }
        return sortStrings(out);
    }

    function getSignatureMatch(name) {
        return /^([A-Za-z_$][A-Za-z0-9_$]*)\((.*)\)$/.exec(String(name || ""));
    }

    function summarizeValue(value) {
        var t = typeof value;
        if (value === null) {
            return { type: "null", preview: "null" };
        }
        if (t === "undefined") {
            return { type: "undefined", preview: "undefined" };
        }
        if (t === "string") {
            return { type: "string", preview: value.slice(0, 160) };
        }
        if (t === "number" || t === "boolean") {
            return { type: t, preview: String(value) };
        }
        if (t === "function") {
            var fnInfo = {
                type: "function",
                name: "",
                length: null,
                head: "",
                isQtFunction: false
            };
            var nameResult = safeCall("function.name", function () { return value.name; });
            if (nameResult.ok && typeof nameResult.value === "string") {
                fnInfo.name = nameResult.value;
            }
            var lengthResult = safeCall("function.length", function () { return value.length; });
            if (lengthResult.ok && typeof lengthResult.value === "number") {
                fnInfo.length = lengthResult.value;
            }
            var textResult = safeCall("function.toString", function () { return String(value); });
            if (textResult.ok && typeof textResult.value === "string") {
                var text = textResult.value;
                var line = text.split(/\r?\n/)[0];
                fnInfo.head = line.slice(0, 240);
                if (text.indexOf("[object QtFunction]") >= 0 || line.indexOf("[native code]") >= 0) {
                    fnInfo.isQtFunction = true;
                }
            }
            return fnInfo;
        }
        var tagResult = safeCall("object.toStringTag", function () { return Object.prototype.toString.call(value); });
        var ctorNameResult = safeCall("object.constructor.name", function () {
            if (value && value.constructor && value.constructor.name) {
                return value.constructor.name;
            }
            return "";
        });
        return {
            type: "object",
            tag: tagResult.ok ? tagResult.value : "",
            constructorName: ctorNameResult.ok ? ctorNameResult.value : ""
        };
    }

    function collectNames(obj, maxCount) {
        var names = [];
        var map = Object.create(null);

        var enumKeysResult = safeCall("for-in", function () {
            var keys = [];
            var k;
            for (k in obj) {
                keys.push(String(k));
            }
            return keys;
        });
        if (enumKeysResult.ok) {
            var e = enumKeysResult.value;
            var i;
            for (i = 0; i < e.length; i += 1) {
                if (!map[e[i]]) {
                    map[e[i]] = true;
                    names.push(e[i]);
                }
            }
        }

        var ownNamesResult = safeCall("getOwnPropertyNames", function () {
            return Object.getOwnPropertyNames(obj);
        });
        if (ownNamesResult.ok) {
            var o = ownNamesResult.value;
            var j;
            for (j = 0; j < o.length; j += 1) {
                var on = String(o[j]);
                if (!map[on]) {
                    map[on] = true;
                    names.push(on);
                }
            }
        }

        var signatureDerived = [];
        var n;
        for (n = 0; n < names.length; n += 1) {
            var sig = getSignatureMatch(names[n]);
            if (sig && sig[1]) {
                signatureDerived.push(sig[1]);
            }
        }
        for (n = 0; n < signatureDerived.length; n += 1) {
            if (!map[signatureDerived[n]]) {
                map[signatureDerived[n]] = true;
                names.push(signatureDerived[n]);
            }
        }

        names = uniqueStrings(names);
        if (typeof maxCount === "number" && maxCount > 0 && names.length > maxCount) {
            names = names.slice(0, maxCount);
        }
        return names;
    }

    function collectProtoChain(obj, maxDepth) {
        var out = [];
        var depth = 0;
        var cursor = obj;
        while (cursor && depth < maxDepth) {
            var entry = { depth: depth };
            var own = safeCall("proto.getOwnPropertyNames", function () {
                return Object.getOwnPropertyNames(cursor);
            });
            if (own.ok) {
                entry.ownKeys = uniqueStrings(own.value.map(function (x) { return String(x); }));
            } else {
                entry.ownKeysError = own.error;
            }
            out.push(entry);
            var next = safeCall("proto.getPrototypeOf", function () { return Object.getPrototypeOf(cursor); });
            if (!next.ok || !next.value) {
                break;
            }
            cursor = next.value;
            depth += 1;
        }
        return out;
    }

    function collectMembers(obj, names) {
        var members = [];
        var i;
        for (i = 0; i < names.length; i += 1) {
            var name = names[i];
            var item = { name: name };
            var descResult = safeCall("getOwnPropertyDescriptor", function () {
                return Object.getOwnPropertyDescriptor(obj, name);
            });
            if (descResult.ok && descResult.value) {
                var d = descResult.value;
                item.descriptor = {
                    enumerable: !!d.enumerable,
                    configurable: !!d.configurable,
                    writable: typeof d.writable === "boolean" ? d.writable : null,
                    hasValue: Object.prototype.hasOwnProperty.call(d, "value"),
                    hasGetter: typeof d.get === "function",
                    hasSetter: typeof d.set === "function"
                };
                if (Object.prototype.hasOwnProperty.call(d, "value")) {
                    item.value = summarizeValue(d.value);
                }
                if (typeof d.get === "function") {
                    item.getter = summarizeValue(d.get);
                }
                if (typeof d.set === "function") {
                    item.setter = summarizeValue(d.set);
                }
            } else {
                item.descriptorError = descResult.ok ? "missing" : descResult.error;
                var valueResult = safeCall("direct-read", function () { return obj[name]; });
                if (valueResult.ok) {
                    item.value = summarizeValue(valueResult.value);
                } else {
                    item.readError = valueResult.error;
                }
            }
            members.push(item);
        }
        return members;
    }

    function getConstMap(source) {
        var out = {};
        var keysResult = safeCall("const-map.keys", function () {
            return Object.keys(source || {});
        });
        if (!keysResult.ok) {
            out.__error = keysResult.error;
            return out;
        }
        var keys = keysResult.value;
        var i;
        for (i = 0; i < keys.length; i += 1) {
            var key = keys[i];
            var valueResult = safeCall("const-map.value", function () { return source[key]; });
            if (valueResult.ok && typeof valueResult.value === "number") {
                out[key] = valueResult.value;
            }
        }
        return out;
    }

    function runFileOps(file, openMode) {
        var ops = [];

        function pushCall(name, fn) {
            var result = safeCall(name, fn);
            var entry = { name: name, ok: result.ok };
            if (result.ok) {
                entry.value = summarizeValue(result.value);
            } else {
                entry.error = result.error;
            }
            ops.push(entry);
            return result;
        }

        pushCall("exists()", function () { return file.exists(); });
        pushCall("size()", function () { return file.size(); });
        pushCall("permissions()", function () { return file.permissions(); });

        var readOnly = typeof openMode.ReadOnly === "number" ? openMode.ReadOnly : null;
        var text = typeof openMode.Text === "number" ? openMode.Text : 0;

        function probeOpenAndRead(modeName, modeValue) {
            if (typeof modeValue !== "number") {
                ops.push({ name: "open(" + modeName + ")", ok: false, error: "mode unavailable" });
                return;
            }
            var openResult = pushCall("open(" + modeName + ")", function () { return file.open(modeValue); });
            if (openResult.ok && openResult.value) {
                pushCall("readText(0)", function () { return file.readText(0); });
                pushCall("readText(128)", function () { return file.readText(128); });
                pushCall("readBinary(0)", function () { return file.readBinary(0); });
                pushCall("readBinary(128)", function () { return file.readBinary(128); });
                pushCall("close()", function () { return file.close(); });
            }
        }

        probeOpenAndRead("ReadOnly", readOnly);
        probeOpenAndRead("ReadOnly|Text", readOnly !== null ? (readOnly | text) : null);

        return ops;
    }

    function runMutatingOps(outputDir, openMode, permission) {
        var stamp = String(new Date().getTime());
        var base = joinPath(outputDir, "__probe_getfile_tmp_" + stamp);
        var textPath = base + ".txt";
        var copyPath = base + ".copy.txt";
        var binPath = base + ".bin";
        var cleanupPaths = [textPath, copyPath, binPath];
        var operations = [];

        function pushOp(name, fn) {
            var result = safeCall(name, fn);
            var entry = { name: name, ok: result.ok };
            if (result.ok) {
                entry.value = summarizeValue(result.value);
            } else {
                entry.error = result.error;
            }
            operations.push(entry);
            return result;
        }

        function getFile(path) {
            return studio.system.getFile(path);
        }

        function removeIfExists(path) {
            var file = getFile(path);
            var existsResult = pushOp("cleanup.pre.exists(" + path + ")", function () { return file.exists(); });
            if (existsResult.ok && existsResult.value) {
                pushOp("cleanup.pre.remove(" + path + ")", function () { return file.remove(); });
            }
        }

        var writeOnly = typeof openMode.WriteOnly === "number" ? openMode.WriteOnly : null;
        var readOnly = typeof openMode.ReadOnly === "number" ? openMode.ReadOnly : null;
        var text = typeof openMode.Text === "number" ? openMode.Text : 0;
        var truncate = typeof openMode.Truncate === "number" ? openMode.Truncate : 0;

        var modeWriteText = writeOnly !== null ? (writeOnly | text | truncate) : null;
        var modeWriteBinary = writeOnly !== null ? (writeOnly | truncate) : null;
        var modeReadText = readOnly !== null ? (readOnly | text) : null;
        var modeReadBinary = readOnly;

        var readPermMask = 0;
        if (typeof permission.Read === "number") {
            readPermMask = permission.Read;
        }

        var report = {
            enabled: true,
            time: nowIsoString(),
            tempFiles: {
                textPath: textPath,
                copyPath: copyPath,
                binPath: binPath
            },
            operations: operations
        };

        var i;
        for (i = 0; i < cleanupPaths.length; i += 1) {
            removeIfExists(cleanupPaths[i]);
        }

        var textFile = getFile(textPath);
        if (typeof modeWriteText === "number") {
            var openTextWrite = pushOp("text.open(WriteOnly|Text|Truncate)", function () { return textFile.open(modeWriteText); });
            if (openTextWrite.ok && openTextWrite.value) {
                pushOp("text.writeText(sample)", function () { return textFile.writeText("probe-getfile text " + stamp); });
                pushOp("text.close()", function () { return textFile.close(); });
            }
        } else {
            operations.push({ name: "text.open(WriteOnly|Text|Truncate)", ok: false, error: "open mode unavailable" });
        }
        pushOp("text.exists()", function () { return textFile.exists(); });
        pushOp("text.size()", function () { return textFile.size(); });

        if (typeof modeReadText === "number") {
            var openTextRead = pushOp("text.open(ReadOnly|Text)", function () { return textFile.open(modeReadText); });
            if (openTextRead.ok && openTextRead.value) {
                pushOp("text.readText(1024)", function () { return textFile.readText(1024); });
                pushOp("text.close()", function () { return textFile.close(); });
            }
        }

        var textPerm = pushOp("text.permissions()", function () { return textFile.permissions(); });
        if (textPerm.ok && typeof textPerm.value === "number") {
            pushOp("text.setPermissions(same)", function () { return textFile.setPermissions(textPerm.value); });
            if (readPermMask) {
                pushOp("text.setPermissions(Read)", function () { return textFile.setPermissions(readPermMask); });
                pushOp("text.setPermissions(restore)", function () { return textFile.setPermissions(textPerm.value); });
            }
        }

        pushOp("text.copy(copyPath)", function () { return textFile.copy(copyPath); });
        var copied = getFile(copyPath);
        pushOp("copy.exists()", function () { return copied.exists(); });
        pushOp("copy.size()", function () { return copied.size(); });

        var sampleBinary = null;
        var sampleFile = getFile(":/Scripts/api.js");
        if (typeof modeReadBinary === "number") {
            var openSampleRead = pushOp("sample.open(:/Scripts/api.js, ReadOnly)", function () { return sampleFile.open(modeReadBinary); });
            if (openSampleRead.ok && openSampleRead.value) {
                var sampleRead = pushOp("sample.readBinary(128)", function () { return sampleFile.readBinary(128); });
                if (sampleRead.ok) {
                    sampleBinary = sampleRead.value;
                }
                pushOp("sample.close()", function () { return sampleFile.close(); });
            }
        }

        var binFile = getFile(binPath);
        if (sampleBinary && typeof modeWriteBinary === "number") {
            var openBinWrite = pushOp("bin.open(WriteOnly|Truncate)", function () { return binFile.open(modeWriteBinary); });
            if (openBinWrite.ok && openBinWrite.value) {
                pushOp("bin.writeBinary(sampleBinary)", function () { return binFile.writeBinary(sampleBinary); });
                pushOp("bin.close()", function () { return binFile.close(); });
            }
            pushOp("bin.exists()", function () { return binFile.exists(); });
            pushOp("bin.size()", function () { return binFile.size(); });
            if (typeof modeReadBinary === "number") {
                var openBinRead = pushOp("bin.open(ReadOnly)", function () { return binFile.open(modeReadBinary); });
                if (openBinRead.ok && openBinRead.value) {
                    pushOp("bin.readBinary(64)", function () { return binFile.readBinary(64); });
                    pushOp("bin.close()", function () { return binFile.close(); });
                }
            }
        } else {
            operations.push({
                name: "bin.writeBinary(sampleBinary)",
                ok: false,
                error: "sample binary unavailable or write mode unavailable"
            });
        }

        for (i = 0; i < cleanupPaths.length; i += 1) {
            (function (path) {
                var file = getFile(path);
                pushOp("cleanup.post.exists(" + path + ")", function () { return file.exists(); });
                pushOp("cleanup.post.remove(" + path + ")", function () { return file.remove(); });
                pushOp("cleanup.post.existsAfter(" + path + ")", function () { return file.exists(); });
            })(cleanupPaths[i]);
        }

        return report;
    }

    function probeGetFileTarget(targetPath, openMode) {
        var result = {
            path: targetPath,
            time: nowIsoString()
        };

        var getFileResult = safeCall("studio.system.getFile", function () {
            return studio.system.getFile(targetPath);
        });
        if (!getFileResult.ok) {
            result.getFileError = getFileResult.error;
            return result;
        }

        var file = getFileResult.value;
        result.instanceSummary = summarizeValue(file);
        result.preShape = {
            names: collectNames(file, 300),
            protoChain: collectProtoChain(file, 4)
        };
        result.preShape.members = collectMembers(file, result.preShape.names);
        result.operations = runFileOps(file, openMode || {});
        result.postShape = {
            names: collectNames(file, 300),
            protoChain: collectProtoChain(file, 4)
        };
        result.postShape.members = collectMembers(file, result.postShape.names);
        return result;
    }

    function writeJson(filePath, data) {
        var openMode = studio.system.openMode || {};
        var mode = 0;
        if (typeof openMode.WriteOnly === "number") {
            mode = openMode.WriteOnly;
        }
        if (typeof openMode.Text === "number") {
            mode = mode | openMode.Text;
        }
        var file = studio.system.getFile(filePath);
        if (!file || !file.open(mode)) {
            throw new Error("Cannot open output file for writing: " + filePath);
        }
        try {
            file.writeText(JSON.stringify(data, null, 2));
        } finally {
            try {
                file.close();
            } catch (_closeErr) {
                // ignore
            }
        }
    }

    function main() {
        var outputDir = getOutputDir();
        var outputPath = joinPath(outputDir, "getfile-probe.json");
        var openMode = studio.system.openMode || {};
        var permission = studio.system.permission || {};
        var processError = studio.system.processError || {};
        var enableMutatingOps = false;
        var targets = [
            ":/Scripts/api.js",
            ":/Scripts/managed_objects.js",
            ":/qtwebchannel/qwebchannel.js",
            ":/Scripts/__missing_probe_target__.js"
        ];

        if (typeof ProbeConfig !== "undefined" && ProbeConfig && ProbeConfig.getFileProbePaths && ProbeConfig.getFileProbePaths.length) {
            targets = ProbeConfig.getFileProbePaths;
        }
        if (typeof ProbeConfig !== "undefined" && ProbeConfig && typeof ProbeConfig.getFileProbeMutatingOps === "boolean") {
            enableMutatingOps = ProbeConfig.getFileProbeMutatingOps;
        }

        var i;
        var reports = [];
        for (i = 0; i < targets.length; i += 1) {
            reports.push(probeGetFileTarget(String(targets[i]), openMode));
        }

        var report = {
            kind: "getFileProbe",
            probeVersion: "0.1.0",
            time: nowIsoString(),
            targetFmodVersion: (typeof ProbeConfig !== "undefined" && ProbeConfig && ProbeConfig.targetFmodVersion) ? ProbeConfig.targetFmodVersion : "2.02.15",
            outputPath: outputPath,
            constants: {
                openMode: getConstMap(openMode),
                permission: getConstMap(permission),
                processError: getConstMap(processError)
            },
            targets: targets,
            results: reports,
            mutatingProbe: null
        };

        if (enableMutatingOps) {
            report.mutatingProbe = runMutatingOps(outputDir, openMode, permission);
        }

        writeJson(outputPath, report);
        console.log("[probe-getfile] done");
        console.log("[probe-getfile] output: " + outputPath);
    }

    try {
        main();
    } catch (err) {
        console.error("[probe-getfile] fatal:", makeErrorMessage(err));
        throw err;
    }
})(this);
