declare const require: any;
declare const process: any;
declare const module: any;

const path = require("path");

import { parseProbeData } from "./parse-jsonl";
import { mergeProbeDataToIR } from "./merge-ir";
import { writeGeneratedDtsFilesWithBuiltin } from "./emit-dts";
import { readBuiltinSnapshots } from "./parse-builtins";
import { readLocalOverrides } from "./local-overrides";

export interface BuildOptions {
    projectRoot: string;
    runtimePath: string;
    modelPath: string;
}

export function resolveBuildOptions(argv: string[]): BuildOptions {
    const cwd = process.cwd();
    const projectRoot = argv[2] ? path.resolve(argv[2]) : cwd;

    return {
        projectRoot,
        runtimePath: path.join(projectRoot, "data", "runtime.jsonl"),
        modelPath: path.join(projectRoot, "data", "model.jsonl")
    };
}

export function buildDts(options: BuildOptions): void {
    const parsed = parseProbeData(options.runtimePath, options.modelPath);
    const ir = mergeProbeDataToIR(parsed);
    const builtinSummary = readBuiltinSnapshots(options.projectRoot);
    const localOverrides = readLocalOverrides(options.projectRoot);
    const written = writeGeneratedDtsFilesWithBuiltin(options.projectRoot, ir, builtinSummary, localOverrides.methodOverrides);

    console.log("[build-dts] runtime records:", parsed.runtime.records.length);
    console.log("[build-dts] model records:", parsed.model.records.length);
    console.log("[build-dts] host interfaces:", ir.hostInterfaces.length);
    console.log("[build-dts] model entities:", ir.modelEntities.length);
    console.log("[build-dts] builtin files:", builtinSummary.files.length);
    console.log("[build-dts] extension methods:", builtinSummary.extensionMethods.length);
    console.log("[build-dts] local method overrides:", Object.keys(localOverrides.methodOverrides).length);
    console.log("[build-dts] wrote host d.ts:", written.hostPath);
    console.log("[build-dts] wrote model d.ts:", written.modelPath);
    console.log("[build-dts] wrote extensions d.ts:", written.extensionPath);
    console.log("[build-dts] wrote index d.ts:", written.indexPath);

    if (ir.warnings.length > 0) {
        console.log("[build-dts] warnings:");
        for (let i = 0; i < ir.warnings.length; i += 1) {
            console.log("  -", ir.warnings[i]);
        }
    }
    if (builtinSummary.warnings.length > 0) {
        console.log("[build-dts] builtin warnings:");
        for (let i = 0; i < builtinSummary.warnings.length; i += 1) {
            console.log("  -", builtinSummary.warnings[i]);
        }
    }
    if (localOverrides.exists) {
        console.log("[build-dts] local overrides path:", localOverrides.path);
    }
    if (localOverrides.warnings.length > 0) {
        console.log("[build-dts] local override warnings:");
        for (let i = 0; i < localOverrides.warnings.length; i += 1) {
            console.log("  -", localOverrides.warnings[i]);
        }
    }
}

if (require.main === module) {
    const options = resolveBuildOptions(process.argv);
    buildDts(options);
}
