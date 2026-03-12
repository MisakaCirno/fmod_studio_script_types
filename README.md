# fmod-generate-type

[English](./README.md) | [中文](./README_CN.md)

TypeScript `.d.ts` generator for the FMOD Studio scripting environment.  
Primary target version: **FMOD Studio 2.02.15**.

## 1. Goals

This project generates usable typings by merging multiple sources:

1. Runtime reflection probe (`data/runtime.jsonl`)
2. `studio.project.model` schema probe (`data/model.jsonl`)
3. Built-in script static analysis (`api.js`, `managed_objects.js`)
4. Official documentation calibration
5. Manual override layer (`src/manual-overrides.d.ts`)

## 2. Repository Layout

```txt
scripts/      Probe scripts executed inside FMOD
tools/        Node-side parsers and d.ts emitters
src/          Type entry and manual override layer
generated/    Auto-generated d.ts files
data/         Probe outputs (local artifacts)
overrides/    Local JSON overrides (incremental fixes)
document/     Project notes, handoff, stage summaries
```

## 3. Requirements

1. Node.js 18+ (recommended)
2. FMOD Studio 2.02.15
3. FMOD Console access (`studio.system.require(...)`)

## 4. Quick Start

### 4.1 Install dependencies

```bash
npm install
```

### 4.2 Run probe inside FMOD

Run in FMOD Console (adjust local paths):

```js
studio.system.require("D:/FMOD/Scripts/fmod_generate_type/scripts/probe-config.js");
ProbeConfig.outputDir = "D:/FMOD/Scripts/fmod_generate_type/data";
studio.system.require("D:/FMOD/Scripts/fmod_generate_type/scripts/probe.js");
```

Outputs:

- `data/runtime.jsonl`
- `data/model.jsonl`
- `data/builtin/api.js`
- `data/builtin/managed_objects.js`
- `data/builtin/qwebchannel.js`

### 4.3 Generate and type-check

```bash
npm run check:types
```

### 4.4 Pack for reuse in other projects

```bash
npm run pack:types
```

This generates a package like `fmod-generate-type-0.1.0.tgz`.

## 5. Use in Another Project

Recommended: install from generated `.tgz` package.

```bash
npm i /path/to/fmod-generate-type-0.1.0.tgz
```

Type entry:

- `src/index.d.ts`

It references:

- `generated/fmod.host.generated.d.ts`
- `generated/fmod.project-model.generated.d.ts`
- `generated/fmod.project-extensions.generated.d.ts`
- `src/manual-overrides.d.ts`

## 6. Common Commands

```bash
npm run build:tools   # Build tools to dist
npm run build:dts     # Build and emit d.ts
npm run check:types   # Emit + type-check
npm run pack:types    # Emit + pack tgz
```

## 7. Override Strategy

1. Manual override file: `src/manual-overrides.d.ts`
2. Local JSON overrides: `overrides/local-overrides.json`

Recommended practice:

1. Do not edit `generated/*.d.ts` directly
2. Patch through `tools/*`, `src/manual-overrides.d.ts`, or `overrides/local-overrides.json`

## 8. Extra Probe: getFile()

Special probe script for `studio.system.getFile()` return object:

- `scripts/probe-getfile.js`

Output:

- `data/getfile-probe.json`

Used to refine `StudioScriptFile` typings.

## 9. Known Limits

1. FMOD script runtime is an incomplete ES5 host, with custom object behavior
2. `QtFunction` argument count cannot be inferred from `length`
3. Some return objects (for example `QByteArray`) are still partially opaque
4. `ManagedObject` deep instance probing is disabled by default (stability first)

## 10. License

See [LICENSE](./LICENSE).
