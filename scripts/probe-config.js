/* global studio, console, global */
(function (root) {
    function toUnixPath(path) {
        if (typeof path !== "string") {
            return path;
        }
        return path.replace(/\\/g, "/");
    }

    function readGlobal(name) {
        try {
            return root[name];
        } catch (err) {
            return undefined;
        }
    }

    function addRoot(roots, name) {
        var value = readGlobal(name);
        if (typeof value === "undefined") {
            return;
        }
        roots.push({ name: name, value: value });
    }

    var roots = [];
    addRoot(roots, "studio");
    addRoot(roots, "console");
    addRoot(roots, "global");

    var outputDir = "data";
    if (typeof __dirname === "string" && __dirname.length > 0) {
        var scriptDir = toUnixPath(__dirname);
        if (/\/scripts$/i.test(scriptDir)) {
            outputDir = scriptDir.replace(/\/scripts$/i, "/data");
        } else {
            outputDir = scriptDir + "/data";
        }
    }

    root.ProbeConfig = {
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
        knownHiddenLogicalNames: [
            "getText",
            "getNumber",
            "print",
            "backtrace"
        ],
        builtinFiles: [
            { source: ":/Scripts/api.js", destName: "api.js" },
            { source: ":/Scripts/managed_objects.js", destName: "managed_objects.js" },
            { source: ":/qtwebchannel/qwebchannel.js", destName: "qwebchannel.js" }
        ],
        getFileProbePaths: [
            ":/Scripts/api.js",
            ":/Scripts/managed_objects.js",
            ":/qtwebchannel/qwebchannel.js",
            ":/Scripts/__missing_probe_target__.js"
        ],
        getFileProbeMutatingOps: false,
        expectedProjectModelEntityCount: 205
    };
})(this);
