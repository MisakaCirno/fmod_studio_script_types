declare const require: any;

const fs = require("fs");

export interface JsonlRecord {
    type: string;
    [key: string]: any;
}

export interface ParsedJsonlFile {
    path: string;
    records: JsonlRecord[];
    byType: Record<string, JsonlRecord[]>;
    warnings: string[];
}

export interface ParsedProbeData {
    runtime: ParsedJsonlFile;
    model: ParsedJsonlFile;
    warnings: string[];
}

function isNonEmptyString(value: any): value is string {
    return typeof value === "string" && value.length > 0;
}

function safeParseLine(line: string, lineNo: number, warnings: string[]): JsonlRecord | null {
    let parsed: any;
    try {
        parsed = JSON.parse(line);
    } catch (error: any) {
        warnings.push("Invalid JSON at line " + lineNo + ": " + String(error && error.message || error));
        return null;
    }

    if (!parsed || typeof parsed !== "object") {
        warnings.push("Non-object record at line " + lineNo);
        return null;
    }
    if (!isNonEmptyString(parsed.type)) {
        warnings.push("Missing event type at line " + lineNo);
        return null;
    }
    return parsed as JsonlRecord;
}

export function parseJsonlFile(filePath: string): ParsedJsonlFile {
    const warnings: string[] = [];
    const raw = fs.readFileSync(filePath, "utf8");
    const lines = raw.split(/\r?\n/);

    const records: JsonlRecord[] = [];
    for (let i = 0; i < lines.length; i += 1) {
        const line = lines[i];
        if (!line || !line.trim()) {
            continue;
        }
        const parsed = safeParseLine(line, i + 1, warnings);
        if (parsed) {
            records.push(parsed);
        }
    }

    const byType: Record<string, JsonlRecord[]> = Object.create(null);
    for (let i = 0; i < records.length; i += 1) {
        const record = records[i];
        if (!byType[record.type]) {
            byType[record.type] = [];
        }
        byType[record.type].push(record);
    }

    return {
        path: filePath,
        records,
        byType,
        warnings
    };
}

export function parseProbeData(runtimePath: string, modelPath: string): ParsedProbeData {
    const runtime = parseJsonlFile(runtimePath);
    const model = parseJsonlFile(modelPath);
    const warnings = runtime.warnings.concat(model.warnings);

    return {
        runtime,
        model,
        warnings
    };
}
