/* MANUAL OVERRIDES
   This file is intentionally kept as a stable, hand-written override layer.
   Add declaration merging patches here when generated types are not precise enough.
*/

declare namespace FMODProjectExtensions {
    interface FmodManagedObjectCore<TEntityName extends string, TEntityRuntimeName extends string = TEntityName> {
        isOfType<TActual extends EntityName>(entityName: TActual): this is FmodEntityObject<TActual>;
        isOfExactType<TActual extends EntityName>(entityName: TActual): this is FmodEntityObject<TActual>;
    }

    /*    // Example: method override (later declarations take precedence in overload ordering)
    interface EventExtensions {
        getPath(): string;
    }

    // Example: stronger args + return
    interface WorkspaceExtensions {
        addEvent(eventName: string, withSpatializer?: boolean): FmodEntityObject<"Event">;
    }
    */
}

interface Console {
    log(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    info(...args: any[]): void;
    debug(...args: any[]): void;
    assert(condition?: any, ...args: any[]): void;
}

interface String {
    format(...args: any[]): string;
}

type StudioBinaryData = object;

interface StudioScriptFile {
    findChild(...args: any[]): any;
    findChildren(...args: any[]): any[];
    permissions(): number;
    setPermissions(permissions: number): boolean;
    exists(): boolean;
    open(mode: number): boolean;
    writeText(text: string): number;
    readText(maxSize: number): string;
    writeBinary(data: StudioBinaryData): number;
    readBinary(maxSize: number): StudioBinaryData;
    close(): void;
    copy(path: string): boolean;
    remove(): boolean;
    size(): number;

    // Keep signature-style names for hosts that expose Qt signatures as callable properties.
    "permissions()"(): number;
    "setPermissions(int)"(permissions: number): boolean;
    "exists()"(): boolean;
    "open(int)"(mode: number): boolean;
    "writeText(QString)"(text: string): number;
    "readText(qlonglong)"(maxSize: number): string;
    "writeBinary(QByteArray)"(data: StudioBinaryData): number;
    "readBinary(qlonglong)"(maxSize: number): StudioBinaryData;
    "close()"(): void;
    "copy(QString)"(path: string): boolean;
    "remove()"(): boolean;
    "size()"(): number;
}

interface StudioSystem {
    getFile(path: string): StudioScriptFile;
}
