# getFile Probe Notes (2026-03-11)

## Source
- Probe output: `data/getfile-probe.json`
- FMOD target: 2.02.15

## Confirmed Behavior
1. `studio.system.getFile(path)` always returns a file-like object (even for missing path); existence is checked via `exists()`.
2. Core methods (logical names):
- `permissions(): number`
- `setPermissions(number): boolean`
- `exists(): boolean`
- `open(number): boolean`
- `writeText(string): number`
- `readText(number): string`
- `writeBinary(object): number`
- `readBinary(number): object`
- `close(): void` (runtime returns `undefined`)
- `copy(string): boolean`
- `remove(): boolean`
- `size(): number`
3. Signature-style callable properties also exist:
- `open(int)`, `writeText(QString)`, `readText(qlonglong)`, `writeBinary(QByteArray)`, etc.
4. Prototype includes inherited `findChild` / `findChildren`.
5. For a missing resource path:
- `exists() === false`
- `size() === 0`
- `permissions() === 0`
- `open(ReadOnly)` returns `false` (no throw)

## Mutating Probe Result
- Temp files under project `data/` were created and removed successfully.
- Verified successful flow:
  - open write text -> writeText -> close
  - reopen read text -> readText
  - copy -> exists/size check
  - write binary from sampled `readBinary` data
  - remove temp files, final existsAfter is false

## D.TS Changes Applied
- Updated `src/manual-overrides.d.ts`:
  - Added `StudioBinaryData` alias.
  - Tightened `StudioScriptFile` read/write signatures.
  - Added signature-style method names as string-literal members.
  - Kept `StudioSystem.getFile(path): StudioScriptFile`.

## Open Questions
1. `QByteArray` structure remains opaque (`object`), not yet modeled.
2. `findChild/findChildren` argument and return types are still broad (`any`), pending focused QObject probe.
