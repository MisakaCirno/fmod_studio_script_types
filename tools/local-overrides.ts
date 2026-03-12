declare const require: any;

const fs = require("fs");
const path = require("path");

import { ManualMethodOverride } from "./manual-doc-overrides";

export interface LocalOverridesReadResult {
    path: string;
    exists: boolean;
    methodOverrides: Record<string, ManualMethodOverride>;
    warnings: string[];
}

interface LocalOverridesFilePayload {
    methods?: Record<string, ManualMethodOverride>;
}

function isPlainObject(value: any): boolean {
    return !!value && typeof value === "object" && !Array.isArray(value);
}

export function readLocalOverrides(baseDir: string): LocalOverridesReadResult {
    const filePath = path.join(baseDir, "overrides", "local-overrides.json");
    const warnings: string[] = [];
    const methodOverrides: Record<string, ManualMethodOverride> = Object.create(null);

    if (!fs.existsSync(filePath)) {
        return {
            path: filePath,
            exists: false,
            methodOverrides,
            warnings
        };
    }

    let parsed: LocalOverridesFilePayload | null = null;
    try {
        const text = fs.readFileSync(filePath, "utf8");
        parsed = JSON.parse(text);
    } catch (err: any) {
        warnings.push("Failed to parse local overrides JSON: " + filePath + " (" + String(err && err.message ? err.message : err) + ")");
        return {
            path: filePath,
            exists: true,
            methodOverrides,
            warnings
        };
    }

    if (!parsed || !isPlainObject(parsed)) {
        warnings.push("Local overrides root must be an object: " + filePath);
        return {
            path: filePath,
            exists: true,
            methodOverrides,
            warnings
        };
    }

    if (!parsed.methods) {
        return {
            path: filePath,
            exists: true,
            methodOverrides,
            warnings
        };
    }

    if (!isPlainObject(parsed.methods)) {
        warnings.push("local-overrides.json field 'methods' must be an object.");
        return {
            path: filePath,
            exists: true,
            methodOverrides,
            warnings
        };
    }

    const keys = Object.keys(parsed.methods);
    for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        const value = (parsed.methods as any)[key];
        if (key.indexOf(".") < 1) {
            warnings.push("Invalid method override key (expected Entity.method): " + key);
            continue;
        }
        if (!isPlainObject(value)) {
            warnings.push("Method override must be an object for key: " + key);
            continue;
        }
        methodOverrides[key] = value as ManualMethodOverride;
    }

    return {
        path: filePath,
        exists: true,
        methodOverrides,
        warnings
    };
}

