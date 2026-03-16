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

type StudioUiEnumValue<T> = T[keyof T];

type StudioUiWidgetTypeValue = StudioUiEnumValue<StudioUiWidgetType>;
type StudioUiLayoutTypeValue = StudioUiEnumValue<StudioUiLayoutType>;
type StudioUiAlignmentValue = StudioUiEnumValue<StudioUiAlignment>;
type StudioUiSizePolicyValue = StudioUiEnumValue<StudioUiSizePolicy>;
type StudioUiOrientationValue = StudioUiEnumValue<StudioUiOrientation>;
type StudioUiEchoModeValue = StudioUiEnumValue<StudioUiEchoMode>;
type StudioUiPathTypeValue = StudioUiEnumValue<StudioUiPathType>;

declare const enum FmodStudioUiWidgetType {
    Spacer = 0,
    Layout = 1,
    Label = 2,
    PushButton = 3,
    LineEdit = 4,
    TextEdit = 5,
    ComboBox = 6,
    CheckBox = 7,
    Slider = 8,
    SpinBox = 9,
    PathLineEdit = 10
}

declare const enum FmodStudioUiLayoutType {
    HBoxLayout = 0,
    VBoxLayout = 1,
    GridLayout = 2
}

declare const enum FmodStudioUiAlignment {
    AlignLeft = 1,
    AlignRight = 2,
    AlignHCenter = 4,
    AlignJustify = 8,
    AlignAbsolute = 16,
    AlignTop = 32,
    AlignBottom = 64,
    AlignVCenter = 128,
    AlignBaseline = 256,
    AlignCenter = 132
}

declare const enum FmodStudioUiSizePolicy {
    Fixed = 0,
    Minimum = 1,
    Maximum = 4,
    Preferred = 5,
    MinimumExpanding = 3,
    Expanding = 7,
    Ignored = 13
}

declare const enum FmodStudioUiOrientation {
    Horizontal = 1,
    Vertical = 2
}

declare const enum FmodStudioUiEchoMode {
    Normal = 0,
    NoEcho = 1,
    Password = 2,
    PasswordEchoOnEdit = 3
}

declare const enum FmodStudioUiPathType {
    OpenFile = 0,
    SaveFile = 1,
    Directory = 2
}

interface StudioDialogMargins {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}

interface StudioDialogSizePolicyDescription {
    horizontalPolicy?: StudioUiSizePolicyValue;
    verticalPolicy?: StudioUiSizePolicyValue;
}

interface StudioDialogWidgetHandle {
    findWidget(widgetId: string): StudioDialogWidgetHandle | null;
    closeDialog(): void;
    startTimer(intervalInMs: number): number;
    stopTimer(timerId: number): void;
    [key: string]: any;
}

interface StudioDialogBaseDescription {
    widgetType: StudioUiWidgetTypeValue;
    widgetId?: string;
    isVisible?: boolean;
    isEnabled?: boolean;
    minimumWidth?: number;
    minimumHeight?: number;
    maximumWidth?: number;
    maximumHeight?: number;
    sizePolicy?: StudioDialogSizePolicyDescription;
    toolTip?: string;
    onConstructed?(this: StudioDialogWidgetHandle): void;
    onTimerEvent?(this: StudioDialogWidgetHandle, timerId: number): void;

    // Root dialog options
    windowTitle?: string;
    windowWidth?: number;
    windowHeight?: number;
    onClose?(this: StudioDialogWidgetHandle): void;

    // Layout item options
    stretchFactor?: number;
    alignment?: StudioUiAlignmentValue;
    row?: number;
    column?: number;
    rowSpan?: number;
    columnSpan?: number;
}

interface StudioLayoutDescription extends StudioDialogBaseDescription {
    layout: StudioUiLayoutTypeValue;
    items?: StudioDialogDescription[];
    contentsMargins?: StudioDialogMargins;
    spacing?: number;
}

interface StudioLabelDescription extends StudioDialogBaseDescription {
    text?: string;
    wordWrap?: boolean;
}

interface StudioPushButtonDescription extends StudioDialogBaseDescription {
    text?: string;
    onClicked?(this: StudioDialogWidgetHandle): void;
}

interface StudioLineEditDescription extends StudioDialogBaseDescription {
    text?: string;
    isReadOnly?: boolean;
    echoMode?: StudioUiEchoModeValue;
    onTextEdited?(this: StudioDialogWidgetHandle, text: string): void;
    onEditingFinished?(this: StudioDialogWidgetHandle): void;
}

interface StudioTextEditDescription extends StudioDialogBaseDescription {
    text?: string;
    html?: string;
    isReadOnly?: boolean;
}

interface StudioComboBoxItem {
    text: string;
    userData?: any;
}

interface StudioComboBoxDescription extends StudioDialogBaseDescription {
    items?: StudioComboBoxItem[];
    currentIndex?: number;
    onCurrentIndexChanged?(this: StudioDialogWidgetHandle, index: number): void;
}

interface StudioCheckBoxDescription extends StudioDialogBaseDescription {
    text?: string;
    isChecked?: boolean;
    onToggled?(this: StudioDialogWidgetHandle, checked: boolean): void;
}

interface StudioIntegerRangeDescription {
    minimum: number;
    maximum: number;
}

interface StudioSliderDescription extends StudioDialogBaseDescription {
    value?: number;
    range?: StudioIntegerRangeDescription;
    orientation?: StudioUiOrientationValue;
    onValueChanged?(this: StudioDialogWidgetHandle, value: number): void;
}

interface StudioSpinBoxDescription extends StudioDialogBaseDescription {
    value?: number;
    range?: StudioIntegerRangeDescription;
    onValueChanged?(this: StudioDialogWidgetHandle, value: number): void;
}

interface StudioPathLineEditDescription extends StudioDialogBaseDescription {
    text?: string;
    label?: string;
    caption?: string;
    pathType?: StudioUiPathTypeValue;
}

interface StudioSpacerDescription extends StudioDialogBaseDescription {
}

type StudioDialogDescription =
    | StudioLayoutDescription
    | StudioLabelDescription
    | StudioPushButtonDescription
    | StudioLineEditDescription
    | StudioTextEditDescription
    | StudioComboBoxDescription
    | StudioCheckBoxDescription
    | StudioSliderDescription
    | StudioSpinBoxDescription
    | StudioPathLineEditDescription
    | StudioSpacerDescription;

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

interface StudioUi {
    showModalDialog(description: StudioDialogDescription): boolean;
    showModelessDialog(description: StudioDialogDescription): boolean;
}
