/* MANUAL OVERRIDES
   This file is intentionally kept as a stable, hand-written override layer.
   Add declaration merging patches here when generated types are not precise enough.
*/

declare namespace FMODProjectExtensions {
    interface FmodManagedObjectCore<TEntityName extends string, TEntityRuntimeName extends string = TEntityName> {
        isOfType<TActual extends EntityName>(entityName: TActual): this is FmodEntityObject<TActual>;
        isOfExactType<TActual extends EntityName>(entityName: TActual): this is FmodEntityObject<TActual>;
    }

    /*
    // Example: method override (later declarations take precedence in overload ordering)
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

type FmodPlatformHardwareTypeValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

declare const enum FmodPlatformHardwareType {
    Desktop = 0,
    Mobile = 1,
    Xbox360 = 2,
    XboxOne = 3,
    PlayStation3 = 4,
    PlayStation4 = 5,
    PlayStationVita = 6,
    WiiU = 7,
    Switch = 8,
    Custom = 9,
    PlayStation5 = 10,
    XboxSeriesXS = 11
}

type FmodSpeakerFormatValue = 1 | 5 | 6;

declare const enum FmodSpeakerFormat {
    Headphones = 1,
    Surround51 = 5,
    Surround71 = 6
}

type FmodPlatformObject = Omit<StudioProjectWorkspacePlatforms0, "hardwareType" | "speakerFormat"> & {
    hardwareType: FmodPlatformHardwareTypeValue;
    speakerFormat: FmodSpeakerFormatValue;
};

type FmodWorkspaceObject = Omit<StudioProjectWorkspace, "platforms"> & {
    platforms: FmodPlatformObject[];
};

type FmodEncodingFormatValue = 0 | 1 | 3;

declare const enum FmodEncodingFormat {
    PCM = 0,
    FADPCM = 1,
    Vorbis = 3
}

type FmodSampleRateModeValue = 0 | 1 | 2;

declare const enum FmodSampleRateMode {
    Custom = 0,
    OptimizedForSize = 1,
    Preserved = 2
}

type FmodLoadingModeValue = 0 | 1 | 2;

declare const enum FmodLoadingMode {
    Compressed = 0,
    Decompressed = 1,
    Streaming = 2
}

type FmodEncodingSettingObject = Omit<StudioProjectWorkspacePlatforms0EncodingSettings, "encodingFormat" | "sampleRateMode" | "loadingMode"> & {
    encodingFormat: FmodEncodingFormatValue;
    sampleRateMode: FmodSampleRateModeValue;
    loadingMode: FmodLoadingModeValue;
};

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