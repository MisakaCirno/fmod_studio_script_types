function readAllText(path) {
    var f = studio.system.getFile(path);
    if (!f || !f.open(studio.system.openMode.ReadOnly)) {
        throw new Error("读取失败: " + path);
    }

    var text = f.readText(f.size());
    f.close();
    return text;
}

function writeAllText(path, text) {
    var f = studio.system.getFile(path);
    if (!f || !f.open(studio.system.openMode.WriteOnly)) {
        throw new Error("写入失败: " + path);
    }

    f.writeText(text);
    f.close();
}

function saveBuiltinFile(srcPath, dstPath) {
    var text = readAllText(srcPath);
    writeAllText(dstPath, text);
    console.log("saved: " + srcPath + " -> " + dstPath);
}

var outDir = "D:/MiSoftware/FMOD Studio 2.02.15/scripts";

saveBuiltinFile(":/qtwebchannel/qwebchannel.js", outDir + "/qwebchannel.js");
saveBuiltinFile(":/Scripts/api.js", outDir + "/api.js");
saveBuiltinFile(":/Scripts/managed_objects.js", outDir + "/managed_objects.js");

console.log("done");