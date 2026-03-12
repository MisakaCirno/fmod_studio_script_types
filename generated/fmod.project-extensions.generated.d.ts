/* AUTO-GENERATED FILE. DO NOT EDIT. */
/* Source: data/builtin/api.js + data/builtin/managed_objects.js */
/* Additional overlay: tools/manual-doc-overrides.ts (from FMOD docs snapshot 2.02.33) */

declare namespace FMODProjectExtensions {
    type FmodExtensionObjectRef<TEntityName extends string, TEntityRuntimeName extends string = TEntityName> = { readonly entity: TEntityRuntimeName } & Record<string, any>;
    interface Event3DAttributes {
        radialDistance: number;
        azimuth: number;
        height: number;
        rotation: number;
    }

    interface ExtensionMethodMeta {
        callKind: "runExtension" | "runRootExtension" | "native" | "internal" | "unknown";
        internalExtensionName: string | null;
        expectedArgsFromInternal: readonly string[] | null;
    }

    interface AssetExtensions {
        getAbsoluteAssetPath(): string;
        getAssetPath(): string;
        getAssetStatus(): any;
        setAssetPath(filePath: string): boolean;
        readonly __meta: {
            getAbsoluteAssetPath: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            getAssetPath: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            getAssetStatus: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            setAssetPath: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface AudioFileExtensions {
        refreshAudio(): any;
        readonly __meta: {
            refreshAudio: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface AudioTrackExtensions {
        addAutomationTrack(object: any, property: any): FmodEntityObject<"AutomationTrack">;
        readonly __meta: {
            addAutomationTrack: {
                callKind: "runExtension";
                internalExtensionName: "addAutomationTrack";
                expectedArgsFromInternal: readonly ["project", "track", "object", "property"];
            };
        };
    }

    interface AutomatableObjectExtensions {
        addAutomator(property: any): FmodEntityObject<"Automator">;
        addModulator(modulatorType: any, property: any): any;
        readonly __meta: {
            addAutomator: {
                callKind: "runExtension";
                internalExtensionName: "addAutomator";
                expectedArgsFromInternal: readonly ["project", "object", "property"];
            };
            addModulator: {
                callKind: "runExtension";
                internalExtensionName: "addModulator";
                expectedArgsFromInternal: readonly ["project", "object", "modulatorType", "property"];
            };
        };
    }

    interface AutomationCurveExtensions {
        addAutomationPoint(position: any, value: any): FmodEntityObject<"AutomationPoint">;
        readonly __meta: {
            addAutomationPoint: {
                callKind: "runExtension";
                internalExtensionName: "addAutomationPoint";
                expectedArgsFromInternal: readonly ["project", "automationCurve", "position", "value"];
            };
        };
    }

    interface AutomatorExtensions {
        addAutomationCurve(parameter: any): FmodEntityObject<"AutomationCurve">;
        readonly __meta: {
            addAutomationCurve: {
                callKind: "runExtension";
                internalExtensionName: "addAutomationCurve";
                expectedArgsFromInternal: readonly ["project", "automator", "parameter"];
            };
        };
    }

    interface BankExtensions {
        getPath(): string;
        readonly __meta: {
            getPath: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface ConvolutionReverbEffectExtensions {
        setIRFromFilePath(filePath: string): void;
        readonly __meta: {
            setIRFromFilePath: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface EventExtensions {
        addGameParameter(parameterDefinition: any): FmodEntityObject<"ParameterProxy">;
        addGroupTrack(trackName?: any): FmodEntityObject<"GroupTrack">;
        addMarkerTrack(): FmodEntityObject<"MarkerTrack">;
        addReturnTrack(trackName?: any): FmodEntityObject<"ReturnTrack">;
        addTagToEvent(tagName: any): FmodEntityObject<"Tag">;
        get3DAttributes(): Event3DAttributes;
        getCursorPosition(parameter: any): number;
        getParameterPresets(): Array<FmodEntityObject<"GameParameter">>;
        getPath(): string;
        getPlayheadPosition(parameter: any): number;
        is3D(): boolean;
        isOneShot(): boolean;
        isPaused(): boolean;
        isPlaying(): boolean;
        isRecording(): boolean;
        isStopping(): boolean;
        keyOff(): void;
        play(): void;
        returnToStart(): void;
        set3DAttributes(attributes: Event3DAttributes): void;
        setCursorPosition(parameter: any, position: number): void;
        stopImmediate(): void;
        stopNonImmediate(): void;
        togglePause(): void;
        toggleRecording(): void;
        readonly __meta: {
            addGameParameter: {
                callKind: "runExtension";
                internalExtensionName: "addGameParameter";
                expectedArgsFromInternal: readonly ["project", "targetEvent", "parameterDefinition"];
            };
            addGroupTrack: {
                callKind: "runExtension";
                internalExtensionName: "addGroupTrack";
                expectedArgsFromInternal: readonly ["project", "event"];
            };
            addMarkerTrack: {
                callKind: "runExtension";
                internalExtensionName: "addMarkerTrack";
                expectedArgsFromInternal: readonly ["project", "event"];
            };
            addReturnTrack: {
                callKind: "runExtension";
                internalExtensionName: "addReturnTrack";
                expectedArgsFromInternal: readonly ["project", "event"];
            };
            addTagToEvent: {
                callKind: "runExtension";
                internalExtensionName: "addTagToEvent";
                expectedArgsFromInternal: readonly ["project", "tags", "event"];
            };
            get3DAttributes: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            getCursorPosition: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            getParameterPresets: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            getPath: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            getPlayheadPosition: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            is3D: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            isOneShot: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            isPaused: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            isPlaying: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            isRecording: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            isStopping: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            keyOff: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            play: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            returnToStart: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            set3DAttributes: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            setCursorPosition: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            stopImmediate: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            stopNonImmediate: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            togglePause: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            toggleRecording: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface FolderExtensions {
        getItem(path: any): FmodEntityObject<"Folder"> | FmodEntityObject<"MixerGroup">;
        readonly __meta: {
            getItem: {
                callKind: "runExtension";
                internalExtensionName: "getItem";
                expectedArgsFromInternal: readonly ["project", "folder", "path"];
            };
        };
    }

    interface GameParameterExtensions {
        getCursorPosition(): number | undefined;
        setCursorPosition(position: number): void;
        readonly __meta: {
            getCursorPosition: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            setCursorPosition: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface GroupTrackExtensions {
        addSound(parameter: FmodEntityObject<"Parameter"> | FmodEntityObject<"Timeline"> | FmodEntityObject<"GameParameter">, soundType: "SingleSound" | "MultiSound" | "ProgrammerSound", start: number, length: number): FmodEntityObject<"Sound">;
        readonly __meta: {
            addSound: {
                callKind: "runExtension";
                internalExtensionName: "addSound";
                expectedArgsFromInternal: readonly ["project", "track", "parameter", "typeName", "start", "length"];
            };
        };
    }

    interface LoopRegionExtensions {
        addParameterCondition(parameter: any, min: any, max: any): FmodEntityObject<"ParameterCondition">;
        readonly __meta: {
            addParameterCondition: {
                callKind: "runExtension";
                internalExtensionName: "addParameterCondition";
                expectedArgsFromInternal: readonly ["project", "triggerable", "parameter", "min", "max"];
            };
        };
    }

    interface MarkerTrackExtensions {
        addNamedMarker(name: any, position: any): FmodEntityObject<"NamedMarker">;
        addRegion(position: any, length: any, name: any, loopMode: any): FmodEntityObject<"LoopRegion">;
        addSustainPoint(position: any): FmodEntityObject<"SustainPoint">;
        addTransitionMarker(position: any, destination: any): FmodEntityObject<"TransitionMarker">;
        addTransitionRegion(position: any, length: any, destination: any): FmodEntityObject<"TransitionRegion">;
        readonly __meta: {
            addNamedMarker: {
                callKind: "runExtension";
                internalExtensionName: "addNamedMarker";
                expectedArgsFromInternal: readonly ["project", "markerTrack", "name", "position"];
            };
            addRegion: {
                callKind: "runExtension";
                internalExtensionName: "addRegion";
                expectedArgsFromInternal: readonly ["project", "markerTrack", "position", "length", "name", "loopMode"];
            };
            addSustainPoint: {
                callKind: "runExtension";
                internalExtensionName: "addSustainPointToMarkerTrack";
                expectedArgsFromInternal: readonly ["project", "markerTrack", "position"];
            };
            addTransitionMarker: {
                callKind: "runExtension";
                internalExtensionName: "addTransitionMarker";
                expectedArgsFromInternal: readonly ["project", "markerTrack", "position", "destination"];
            };
            addTransitionRegion: {
                callKind: "runExtension";
                internalExtensionName: "addTransitionRegion";
                expectedArgsFromInternal: readonly ["project", "markerTrack", "position", "length", "destination"];
            };
        };
    }

    interface MasterAssetFolderExtensions {
        getAsset(): any;
        readonly __meta: {
            getAsset: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface MixerBusExtensions {
        getInputFormat(): number;
        getOutputFormat(): number;
        readonly __meta: {
            getInputFormat: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            getOutputFormat: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface MixerBusEffectChainExtensions {
        addEffect(effectDefinition: any): FmodEntityObject<"ProxyEffect">;
        readonly __meta: {
            addEffect: {
                callKind: "runExtension";
                internalExtensionName: "addEffect";
                expectedArgsFromInternal: readonly ["project", "targetChain", "effectDefinition"];
            };
        };
    }

    interface MixerGroupExtensions {
        getItem(path: any): FmodEntityObject<"Folder"> | FmodEntityObject<"MixerGroup">;
        readonly __meta: {
            getItem: {
                callKind: "runExtension";
                internalExtensionName: "getItem";
                expectedArgsFromInternal: readonly ["project", "folder", "path"];
            };
        };
    }

    interface MixerStripExtensions {
        getPath(): string;
        readonly __meta: {
            getPath: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface ModuleExtensions {
        addParameterCondition(parameter: any, min: any, max: any): FmodEntityObject<"ParameterCondition">;
        readonly __meta: {
            addParameterCondition: {
                callKind: "runExtension";
                internalExtensionName: "addParameterCondition";
                expectedArgsFromInternal: readonly ["project", "triggerable", "parameter", "min", "max"];
            };
        };
    }

    interface ParameterExtensions {
        getPlayheadPosition(): number;
        readonly __meta: {
            getPlayheadPosition: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface ParameterPresetExtensions {
        getPath(): string;
        readonly __meta: {
            getPath: {
                callKind: "native";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface ParameterProxyExtensions {
        getCursorPosition(): number;
        setCursorPosition(position: number): void;
        readonly __meta: {
            getCursorPosition: {
                callKind: "unknown";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            setCursorPosition: {
                callKind: "unknown";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface SoundExtensions {
        setFadeInCurve(length: number, curveShape?: number): void;
        setFadeOutCurve(length: number, curveShape?: number): void;
        readonly __meta: {
            setFadeInCurve: {
                callKind: "runExtension";
                internalExtensionName: "setFadeInCurve";
                expectedArgsFromInternal: readonly ["project", "sound", "length"];
            };
            setFadeOutCurve: {
                callKind: "runExtension";
                internalExtensionName: "setFadeOutCurve";
                expectedArgsFromInternal: readonly ["project", "sound", "length"];
            };
        };
    }

    interface TimelineExtensions {
        getCursorPosition(): number;
        setCursorPosition(position: number): void;
        readonly __meta: {
            getCursorPosition: {
                callKind: "unknown";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
            setCursorPosition: {
                callKind: "unknown";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface TransitionMarkerExtensions {
        addParameterCondition(parameter: any, min: any, max: any): FmodEntityObject<"ParameterCondition">;
        readonly __meta: {
            addParameterCondition: {
                callKind: "runExtension";
                internalExtensionName: "addParameterCondition";
                expectedArgsFromInternal: readonly ["project", "triggerable", "parameter", "min", "max"];
            };
        };
    }

    interface TransitionRegionExtensions {
        addParameterCondition(parameter: any, min: any, max: any): FmodEntityObject<"ParameterCondition">;
        readonly __meta: {
            addParameterCondition: {
                callKind: "runExtension";
                internalExtensionName: "addParameterCondition";
                expectedArgsFromInternal: readonly ["project", "triggerable", "parameter", "min", "max"];
            };
        };
    }

    interface WorkspaceExtensions {
        addEvent(eventName: string, withSpatializer?: boolean): FmodEntityObject<"Event">;
        addGameParameter(parameterDefinition: any): FmodEntityObject<"GameParameter">;
        addTag(tagName: string): FmodEntityObject<"Tag">;
        createPlugin(identifier: string): FmodEntityObject<string>;
        readonly __meta: {
            addEvent: {
                callKind: "runRootExtension";
                internalExtensionName: "addEvent";
                expectedArgsFromInternal: readonly ["project", "eventName"];
            };
            addGameParameter: {
                callKind: "runRootExtension";
                internalExtensionName: "addParameterPreset";
                expectedArgsFromInternal: readonly ["project", "parameterDefinition"];
            };
            addTag: {
                callKind: "runRootExtension";
                internalExtensionName: "addTagToProject";
                expectedArgsFromInternal: readonly ["project", "tag"];
            };
            createPlugin: {
                callKind: "internal";
                internalExtensionName: null;
                expectedArgsFromInternal: null;
            };
        };
    }

    interface EntityExtensionsMap {
        Asset: AssetExtensions;
        AudioFile: AudioFileExtensions;
        AudioTrack: AudioTrackExtensions;
        AutomatableObject: AutomatableObjectExtensions;
        AutomationCurve: AutomationCurveExtensions;
        Automator: AutomatorExtensions;
        Bank: BankExtensions;
        ConvolutionReverbEffect: ConvolutionReverbEffectExtensions;
        Event: EventExtensions;
        Folder: FolderExtensions;
        GameParameter: GameParameterExtensions;
        GroupTrack: GroupTrackExtensions;
        LoopRegion: LoopRegionExtensions;
        MarkerTrack: MarkerTrackExtensions;
        MasterAssetFolder: MasterAssetFolderExtensions;
        MixerBus: MixerBusExtensions;
        MixerBusEffectChain: MixerBusEffectChainExtensions;
        MixerGroup: MixerGroupExtensions;
        MixerStrip: MixerStripExtensions;
        Module: ModuleExtensions;
        Parameter: ParameterExtensions;
        ParameterPreset: ParameterPresetExtensions;
        ParameterProxy: ParameterProxyExtensions;
        Sound: SoundExtensions;
        Timeline: TimelineExtensions;
        TransitionMarker: TransitionMarkerExtensions;
        TransitionRegion: TransitionRegionExtensions;
        Workspace: WorkspaceExtensions;
    }

    interface ModelEntityDataMap {
        ADSRModulator: {
            attackShape: number;
            attackTime: number;
            decayShape: number;
            decayTime: number;
            finalValue: number;
            holdTime: number;
            initialValue: number;
            nameOfPropertyBeingModulated: any;
            peakValue: number;
            releaseShape: number;
            releaseTime: number;
            sustainValue: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            objectBeingModulated: FmodEntityObject<"AutomatableObject"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        ActionSheet: {
            name: string;
            uiLastHorizontalScrollBarValue: number;
            uiLastRulerScaleRatio: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            event: FmodEntityObject<"Event"> | null;
            eventSelector: FmodEntityObject<"Event"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            modules: FmodEntityObject<"MultiSound"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        Asset: {
            assetPath: string;
            color: string;
            note: string;
            masterAssetFolder: FmodEntityObject<"MasterAssetFolder"> | null;
        };
        AudioFile: {
            assetPath: string;
            channelCount: number;
            color: string;
            frequencyInKHz: number;
            isStreaming: boolean;
            length: any;
            note: string;
            dataReferees: Array<FmodEntityObject<"DataReferee">>;
            encodingSettings: Array<FmodEntityObject<"EncodingSetting">>;
            masterAssetFolder: FmodEntityObject<"MasterAssetFolder"> | null;
            programmerSounds: Array<FmodEntityObject<"ProgrammerSound">>;
            sounds: Array<FmodEntityObject<"SingleSound">>;
        };
        AudioSettings: {
            deviceId: any;
            deviceName: string;
            driverName: string;
            forcedBlockSize: number;
        };
        AudioTable: {
            color: string;
            includeSubDirectories: boolean;
            isLocalized: boolean;
            name: string;
            note: string;
            sourceDirectory: string;
            bank: FmodEntityObject<"Bank"> | null;
            encodingSettings: Array<FmodEntityObject<"EncodingSetting">>;
            folder: FmodEntityObject<"Folder"> | null;
            programmerSounds: Array<FmodEntityObject<"ProgrammerSound">>;
        };
        AudioTrack: {
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
            automationTracks: Array<FmodEntityObject<"AutomationTrack">>;
            modules: Array<FmodEntityObject<"Module">>;
            selector: FmodEntityObject<"Selector"> | null;
        };
        AutomatableObject: {
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        AutomationCurve: {
            automationPoints: Array<FmodEntityObject<"AutomationPoint">>;
            automator: FmodEntityObject<"Automator"> | null;
            parameter: FmodEntityObject<"ParameterPrototype"> | null;
        };
        AutomationPoint: {
            curveShape: number;
            isSCurve: boolean;
            position: any;
            value: number;
            automationCurve: FmodEntityObject<"AutomationCurve"> | null;
            endPointOwner: FmodEntityObject<"FadeCurve"> | null;
            selector: FmodEntityObject<"Selector"> | null;
            startPointOwner: FmodEntityObject<"FadeCurve"> | null;
        };
        AutomationTrack: {
            uiTrackHeight: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automator: FmodEntityObject<"Automator"> | null;
            selector: FmodEntityObject<"Selector"> | null;
        };
        Automator: {
            nameOfPropertyBeingAutomated: any;
            automationCurves: Array<FmodEntityObject<"AutomationCurve">>;
            automationTracks: Array<FmodEntityObject<"AutomationTrack">>;
            objectBeingAutomated: FmodEntityObject<"AutomatableObject"> | null;
        };
        AutopitchModulator: {
            nameOfPropertyBeingModulated: any;
            pitchAtMinimum: number;
            root: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            objectBeingModulated: FmodEntityObject<"AutomatableObject"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        Bank: {
            color: string;
            dontLoopOptionEnabled: boolean;
            isMasterBank: boolean;
            name: string;
            note: string;
            audioTable: FmodEntityObject<"AudioTable"> | null;
            events: Array<FmodEntityObject<"Event">>;
            folder: FmodEntityObject<"Folder"> | null;
        };
        BankFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
        };
        BoolPluginParameter: {
            name: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            plugin: FmodEntityObject<"Plugin"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        ChannelMixEffect: {
            bypass: boolean;
            gain00: number;
            gain01: number;
            gain02: number;
            gain03: number;
            gain04: number;
            gain05: number;
            gain06: number;
            gain07: number;
            gain08: number;
            gain09: number;
            gain10: number;
            gain11: number;
            gain12: number;
            gain13: number;
            gain14: number;
            gain15: number;
            gain16: number;
            gain17: number;
            gain18: number;
            gain19: number;
            gain20: number;
            gain21: number;
            gain22: number;
            gain23: number;
            gain24: number;
            gain25: number;
            gain26: number;
            gain27: number;
            gain28: number;
            gain29: number;
            gain30: number;
            gain31: number;
            output00: number;
            output01: number;
            output02: number;
            output03: number;
            output04: number;
            output05: number;
            output06: number;
            output07: number;
            output08: number;
            output09: number;
            output10: number;
            output11: number;
            output12: number;
            output13: number;
            output14: number;
            output15: number;
            output16: number;
            output17: number;
            output18: number;
            output19: number;
            output20: number;
            output21: number;
            output22: number;
            output23: number;
            output24: number;
            output25: number;
            output26: number;
            output27: number;
            output28: number;
            output29: number;
            output30: number;
            output31: number;
            outputGrouping: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        ChorusEffect: {
            bypass: boolean;
            depth: number;
            mix: number;
            rate: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        Colorable: {
            color: string;
        };
        CommandSound: {
            color: string;
            commandType: number;
            delayType: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            pitch: number;
            quantizationInterval: number;
            start: any;
            startOffset: number;
            targetValue: any;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            volume: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            commandTarget: FmodEntityObject<"CommandTarget"> | null;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"MultiSound"> | null;
            parameter: FmodEntityObject<"Parameter"> | null;
            playPercentage: FmodEntityObject<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        CommandTarget: {
            commandSounds: Array<FmodEntityObject<"CommandSound">>;
        };
        CompressorEffect: {
            attackTime: number;
            bypass: boolean;
            gain: number;
            linkChannels: boolean;
            ratio: number;
            releaseTime: number;
            threshold: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            sidechains: Array<FmodEntityObject<"Sidechain">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        ControlSurface: {
            color: any;
            name: string;
            customBindings: Array<FmodEntityObject<"ControlSurfaceCustomBindings">>;
            protocols: Array<FmodEntityObject<"ControlSurfaceProtocol">>;
        };
        ControlSurfaceCustomBinding: {
            linkedObject: FmodEntityObject<"AutomatableObject"> | null;
            owner: FmodEntityObject<"ControlSurfaceCustomBindings"> | null;
        };
        ControlSurfaceCustomBindings: {
            controlSurface: FmodEntityObject<"ControlSurface"> | null;
            customBindings: Array<FmodEntityObject<"ControlSurfaceCustomBinding">>;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        ControlSurfaceProtocol: {
            controlSurface: FmodEntityObject<"ControlSurface"> | null;
        };
        ConvolutionReverbEffect: {
            bypass: boolean;
            dryLevel: number;
            endFrame: any;
            linkChannels: boolean;
            startFrame: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            wetLevel: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            referenceableData: FmodEntityObject<"AudioFile"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        DAWAsset: {
            assetPath: string;
            channelCount: number;
            color: string;
            frequencyInKHz: number;
            isStreaming: boolean;
            length: any;
            note: string;
            dataReferees: Array<FmodEntityObject<"DataReferee">>;
            encodingSettings: Array<FmodEntityObject<"EncodingSetting">>;
            masterAssetFolder: FmodEntityObject<"MasterAssetFolder"> | null;
            programmerSounds: Array<FmodEntityObject<"ProgrammerSound">>;
            project: FmodEntityObject<"DAWProject"> | null;
            sounds: Array<FmodEntityObject<"SingleSound">>;
        };
        DAWProject: {
            assetPath: string;
            color: string;
            dawProjectPath: string;
            note: string;
            renderedAssetsPath: string;
            assets: Array<FmodEntityObject<"DAWAsset">>;
            encodingSettings: Array<FmodEntityObject<"EncodingSetting">>;
            masterAssetFolder: FmodEntityObject<"MasterAssetFolder"> | null;
        };
        DataFile: {
            assetPath: string;
            color: string;
            note: string;
            dataReferees: Array<FmodEntityObject<"DataReferee">>;
            masterAssetFolder: FmodEntityObject<"MasterAssetFolder"> | null;
        };
        DataPluginParameter: {
            dataType: number;
            name: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: any;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            plugin: FmodEntityObject<"Plugin"> | null;
            referenceableData: FmodEntityObject<"ReferenceableData"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        DataReferee: {
            referenceableData: FmodEntityObject<"ReferenceableData"> | null;
        };
        DelayEffect: {
            bypass: boolean;
            delay: number;
            dryLevel: number;
            feedback: number;
            level: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        DistortionEffect: {
            bypass: boolean;
            level: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        EditorSettings: {
            absoluteMouseModeEnabled: boolean;
            analyticsEnabled: boolean;
            apiPlaybackEnabled: boolean;
            autoSaveEnabled: boolean;
            autoplayAudioFilePlayback: boolean;
            birdsEyeDragMode: number;
            buildThreadCount: number;
            bulkEditEnabled: boolean;
            compressedAudioFilePlayback: boolean;
            continuousZoomToFit: boolean;
            defaultProfilerGraphType: number;
            editorScrollModeAltModifier: number;
            editorScrollModeControlModifier: number;
            editorScrollModeNoModifier: number;
            editorScrollModeShiftModifier: number;
            emailAddress: string;
            eventsBrowserSharesSelection: boolean;
            followCursor: boolean;
            forcedDevicePixelRatio: number;
            initialSyncEnabled: boolean;
            keyboardShortcuts: any;
            linkedAssetsRemovalMode: number;
            linkedAssetsRenderMode: number;
            liveUpdateAutoReconnect: boolean;
            liveUpdateDisableStreamingSounds: boolean;
            liveUpdateSyncConnectedPlatform: boolean;
            loopAudioFilePlayback: boolean;
            loopPlayback: boolean;
            mixerStripHeight: number;
            mixerStripShowsEffects: boolean;
            mixerStripShowsMacros: boolean;
            mixerStripShowsOutputs: boolean;
            mixerStripShowsSends: boolean;
            mixerStripWidth: number;
            preferredOpenItemMethod: number;
            profilerAutomaticScopeInMode: number;
            profilerTableValueMode: number;
            profilerTableVisibleColumns: any;
            reaperApplicationPath: string;
            recentFiles: any;
            recentImportFolder: string;
            recentIpAddress: any;
            recentVersionOpened: number;
            rememberWindowPositions: boolean;
            restoreWindows: boolean;
            sampleEditor: string;
            showAutomationPointValues: boolean;
            showMarkerLines: boolean;
            showOnlyKnownAudioFileTypes: boolean;
            showOverlappingInstrumentsInLanes: boolean;
            snapToItems: boolean;
            snapToRuler: boolean;
            startupMode: number;
            timeDisplayMode: number;
            uiAutomationTracksVisible: number;
            uiDefaultTrackHeight: number;
            uiModulationDrawerVisible: number;
            uiTriggerBehaviorDrawerVisible: number;
            uiView3DFront: boolean;
            uiView3DOrtho: boolean;
            uiView3DSize: number;
        };
        EffectChain: {
            bypass: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            effects: Array<FmodEntityObject<"MixerEffect">>;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        EffectPreset: {
            color: string;
            name: string;
            note: string;
            effect: FmodEntityObject<"MixerEffect"> | null;
            folder: FmodEntityObject<"EffectPresetFolder"> | null;
            proxies: Array<FmodEntityObject<"ProxyEffect">>;
        };
        EffectPresetFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
        };
        Encodable: {
            encodingSettings: Array<FmodEntityObject<"EncodingSetting">>;
        };
        EncodableAsset: {
            assetPath: string;
            color: string;
            note: string;
            encodingSettings: Array<FmodEntityObject<"EncodingSetting">>;
            masterAssetFolder: FmodEntityObject<"MasterAssetFolder"> | null;
        };
        EncodingSetting: {
            encodingFormat: number;
            loadingMode: number;
            quality: number;
            sampleRate: number;
            sampleRateMode: number;
            encodable: FmodEntityObject<"Encodable"> | null;
            platform: FmodEntityObject<"Platform"> | null;
        };
        Event: {
            color: string;
            isDefault: boolean;
            name: string;
            note: string;
            outputFormat: number;
            uiMarkerTracksVisible: boolean;
            uiMaxMarkerTracksVisible: number;
            automatableProperties: FmodEntityObject<"EventAutomatableProperties"> | null;
            banks: Array<FmodEntityObject<"Bank">>;
            clonedEvents: Array<FmodEntityObject<"Event">>;
            commandSounds: Array<FmodEntityObject<"CommandSound">>;
            defaultEvent: FmodEntityObject<"Event"> | null;
            folder: FmodEntityObject<"Folder"> | null;
            groupTracks: Array<FmodEntityObject<"GroupTrack">>;
            items: Array<FmodEntityObject<"Event">>;
            markerTracks: Array<FmodEntityObject<"MarkerTrack">>;
            masterTrack: FmodEntityObject<"MasterTrack"> | null;
            mixer: FmodEntityObject<"EventMixer"> | null;
            mixerInput: FmodEntityObject<"MixerInput"> | null;
            parameters: Array<FmodEntityObject<"Parameter">>;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            references: Array<FmodEntityObject<"EventSound">>;
            returnTracks: Array<FmodEntityObject<"ReturnTrack">>;
            sandboxEmitters: Array<FmodEntityObject<"SandboxEmitter">>;
            selectables: Array<FmodEntityObject<"Selectable">>;
            tags: Array<FmodEntityObject<"Tag">>;
            timeline: FmodEntityObject<"Timeline"> | null;
            uiLastParameterSelection: FmodEntityObject<"Parameter"> | null;
            userProperties: Array<FmodEntityObject<"UserProperty">>;
        };
        EventAutomatableProperties: {
            dopplerEnabled: boolean;
            dopplerScale: number;
            isPersistent: boolean;
            maxVoices: number;
            maximumDistance: number;
            minimumDistance: number;
            noLookahead: boolean;
            priority: number;
            sampleDataLoadingMode: number;
            snapshotIntensity: number;
            triggerCooldown: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            event: FmodEntityObject<"Event"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        EventCondition: {
            eventState: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"Triggerable"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        EventFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
        };
        EventMixer: {
            event: FmodEntityObject<"Event"> | null;
            masterBus: FmodEntityObject<"EventMixerMaster"> | null;
            port: Array<FmodEntityObject<"MixerPort">>;
            snapshotList: FmodEntityObject<"SnapshotList"> | null;
            snapshots: Array<FmodEntityObject<"Snapshot">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
            vca: Array<FmodEntityObject<"MixerVCA">>;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        EventMixerGroup: {
            color: string;
            instanceStealing: number;
            maxInstances: number;
            name: string;
            note: string;
            overridingInputFormat: number;
            pitch: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodEntityObject<"MixerBusEffectChain"> | null;
            groupTrack: FmodEntityObject<"GroupTrack"> | null;
            input: Array<FmodEntityObject<"MixerBus">>;
            masters: Array<FmodEntityObject<"MixerVCA">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            output: FmodEntityObject<"MixerGroup"> | null;
            panner: FmodEntityObject<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
        };
        EventMixerMaster: {
            color: string;
            instanceStealing: number;
            maxInstances: number;
            name: string;
            note: string;
            overridingInputFormat: number;
            pitch: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodEntityObject<"MixerBusEffectChain"> | null;
            groupTrack: FmodEntityObject<"MasterTrack"> | null;
            input: Array<FmodEntityObject<"MixerBus">>;
            masters: Array<FmodEntityObject<"MixerVCA">>;
            mixer: FmodEntityObject<"Mixer"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            output: FmodEntityObject<"MixerGroup"> | null;
            panner: FmodEntityObject<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
        };
        EventMixerReturn: {
            color: string;
            name: string;
            note: string;
            overridingInputFormat: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodEntityObject<"MixerBusEffectChain"> | null;
            input: Array<FmodEntityObject<"MixerSend">>;
            masters: Array<FmodEntityObject<"MixerVCA">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            output: FmodEntityObject<"MixerGroup"> | null;
            panner: FmodEntityObject<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            returnTrack: FmodEntityObject<"ReturnTrack"> | null;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
        };
        EventSound: {
            color: string;
            delayType: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            pitch: number;
            quantizationInterval: number;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            volume: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            event: FmodEntityObject<"Event"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"MultiSound"> | null;
            parameter: FmodEntityObject<"Parameter"> | null;
            parameters: Array<FmodEntityObject<"ParameterProperty">>;
            playPercentage: FmodEntityObject<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        FadeCurve: {
            endPoint: FmodEntityObject<"AutomationPoint"> | null;
            fadeInOwner: FmodEntityObject<"Module"> | null;
            fadeOutOwner: FmodEntityObject<"Module"> | null;
            relatedModule: FmodEntityObject<"Module"> | null;
            startPoint: FmodEntityObject<"AutomationPoint"> | null;
        };
        FlangerEffect: {
            bypass: boolean;
            delay: number;
            mix: number;
            rate: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        FloatPluginParameter: {
            curve: string;
            name: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            plugin: FmodEntityObject<"Plugin"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        Folder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
        };
        GainEffect: {
            bypass: boolean;
            gain: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        GameParameter: {
            cursorPosition: any;
            enumerationLabels: any;
            initialValue: any;
            isExposedRecursively: boolean;
            isGlobal: boolean;
            isHeld: boolean;
            isReadOnly: boolean;
            maximum: any;
            minimum: any;
            parameterType: number;
            seekSpeed: any;
            seekSpeedAsymmetric: boolean;
            seekSpeedDescending: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            velocity: any;
            automationCurves: Array<FmodEntityObject<"AutomationCurve">>;
            automators: Array<FmodEntityObject<"Automator">>;
            commandSounds: Array<FmodEntityObject<"CommandSound">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            parameterConditions: Array<FmodEntityObject<"ParameterCondition">>;
            presetOwner: FmodEntityObject<"ParameterPreset"> | null;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            proxies: Array<FmodEntityObject<"ParameterProxy">>;
            sandboxParameters: Array<FmodEntityObject<"SandboxParameter">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        GroupTrack: {
            streaming: boolean;
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
            automationTracks: Array<FmodEntityObject<"AutomationTrack">>;
            event: FmodEntityObject<"Event"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            mixerGroup: FmodEntityObject<"EventMixerGroup"> | null;
            modules: Array<FmodEntityObject<"Module">>;
            selector: FmodEntityObject<"Selector"> | null;
        };
        HighpassEffect: {
            bypass: boolean;
            cutoff: number;
            resonance: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        HighpassSimpleEffect: {
            bypass: boolean;
            cutoff: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        ITEchoEffect: {
            bypass: boolean;
            feedback: number;
            leftDelay: number;
            panDelay: number;
            rightDelay: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            wetDryMix: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        IntPluginParameter: {
            maximumValue: number;
            minimumValue: number;
            name: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            plugin: FmodEntityObject<"Plugin"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        LFOModulator: {
            beats: number;
            depth: number;
            direction: number;
            isTempoSync: boolean;
            nameOfPropertyBeingModulated: any;
            phase: number;
            rate: number;
            shape: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            objectBeingModulated: FmodEntityObject<"AutomatableObject"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        LimiterEffect: {
            boost: number;
            bypass: boolean;
            ceiling: number;
            linkChannels: boolean;
            release: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        Locale: {
            localeCode: string;
            name: string;
            uiActiveLocaleOwner: FmodEntityObject<"ProjectSettings"> | null;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        LoopRegion: {
            length: any;
            looping: number;
            name: string;
            position: any;
            quantizationInterval: number;
            transitionOffset: number;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTransitionTimelineVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            destination: FmodEntityObject<"TransitionDestination"> | null;
            markerTrack: FmodEntityObject<"MarkerTrack"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            references: Array<FmodEntityObject<"TransitionTimelineOwner">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            timeline: FmodEntityObject<"Timeline"> | null;
            transitionTimeline: FmodEntityObject<"TransitionTimeline"> | null;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        Loopable: {
            looping: boolean;
            playCount: number;
        };
        LoudnessMeter: {
            bypass: boolean;
            loudnessScale: number;
            loudnessTarget: number;
            meterMode: number;
            meterRange: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        LowpassEffect: {
            bypass: boolean;
            cutoff: number;
            resonance: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        LowpassSimpleEffect: {
            bypass: boolean;
            cutoff: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        MackieControlSurface: {
            color: any;
            name: string;
            customBindings: Array<FmodEntityObject<"ControlSurfaceCustomBindings">>;
            protocols: Array<FmodEntityObject<"ControlSurfaceProtocol">>;
        };
        MackieExtendedControlSurface: {
            color: any;
            name: string;
            customBindings: Array<FmodEntityObject<"ControlSurfaceCustomBindings">>;
            protocols: Array<FmodEntityObject<"ControlSurfaceProtocol">>;
        };
        ManagedObject: {
        };
        Marker: {
            position: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodEntityObject<"MarkerTrack"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            timeline: FmodEntityObject<"Timeline"> | null;
        };
        MarkerTrack: {
            uiTrackHeight: number;
            event: FmodEntityObject<"Event"> | null;
            markers: Array<FmodEntityObject<"Marker">>;
            selector: FmodEntityObject<"Selector"> | null;
        };
        MasterAssetFolder: {
            assetDirectory: string;
            assetPath: string;
            color: string;
            dawProjectSourceDirectory: string;
            note: string;
            streamingAssetThresholdLength: any;
            assets: Array<FmodEntityObject<"Asset">>;
            encodingSettings: Array<FmodEntityObject<"EncodingSetting">>;
            masterAssetFolder: FmodEntityObject<"MasterAssetFolder"> | null;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        MasterBankFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        MasterEffectPresetFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        MasterEventFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        MasterParameterPresetFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        MasterSandboxFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        MasterTagFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        MasterTrack: {
            streaming: boolean;
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
            automationTracks: Array<FmodEntityObject<"AutomationTrack">>;
            event: FmodEntityObject<"Event"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            mixerGroup: FmodEntityObject<"EventMixerMaster"> | null;
            modules: Array<FmodEntityObject<"Module">>;
            selector: FmodEntityObject<"Selector"> | null;
        };
        MeteringSettings: {
            meterChannelOrdering: number;
        };
        MidiControlSurfaceProtocol: {
            inputPort: number;
            inputPortName: string;
            outputPort: number;
            outputPortName: string;
            controlSurface: FmodEntityObject<"ControlSurface"> | null;
        };
        Mixer: {
            masterBus: FmodEntityObject<"MixerMaster"> | null;
            port: Array<FmodEntityObject<"MixerPort">>;
            snapshotList: FmodEntityObject<"SnapshotList"> | null;
            snapshots: Array<FmodEntityObject<"Snapshot">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
            vca: Array<FmodEntityObject<"MixerVCA">>;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        MixerBus: {
            color: string;
            note: string;
            overridingInputFormat: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodEntityObject<"MixerBusEffectChain"> | null;
            masters: Array<FmodEntityObject<"MixerVCA">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            output: FmodEntityObject<"MixerGroup"> | null;
            panner: FmodEntityObject<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
        };
        MixerBusEffectChain: {
            bypass: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            bus: FmodEntityObject<"MixerBus"> | null;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            effects: Array<FmodEntityObject<"MixerEffect">>;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        MixerBusFader: {
            bypass: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        MixerBusPanner: {
            LFEUpmixEnabled: boolean;
            bypass: boolean;
            disabledSpeakers: any;
            overridingOutputFormat: number;
            stereoLeftPan: number;
            stereoPan: number;
            stereoRightPan: number;
            stereoToSurroundPanMode: number;
            surroundHeightBlend: number;
            surroundLFELevel: number;
            surroundPanDirection: number;
            surroundPanExtent: number;
            surroundStereoAxis: number;
            surroundStereoSeparation: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            bus: FmodEntityObject<"MixerBus"> | null;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        MixerEffect: {
            bypass: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        MixerGroup: {
            color: string;
            instanceStealing: number;
            maxInstances: number;
            name: string;
            note: string;
            overridingInputFormat: number;
            pitch: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodEntityObject<"MixerBusEffectChain"> | null;
            input: Array<FmodEntityObject<"MixerBus">>;
            masters: Array<FmodEntityObject<"MixerVCA">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            output: FmodEntityObject<"MixerGroup"> | null;
            panner: FmodEntityObject<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
        };
        MixerInput: {
            color: string;
            note: string;
            overridingInputFormat: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodEntityObject<"MixerBusEffectChain"> | null;
            event: FmodEntityObject<"Event"> | null;
            masters: Array<FmodEntityObject<"MixerVCA">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            output: FmodEntityObject<"MixerGroup"> | null;
            panner: FmodEntityObject<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
        };
        MixerMaster: {
            color: string;
            instanceStealing: number;
            maxInstances: number;
            name: string;
            note: string;
            overridingInputFormat: number;
            pitch: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodEntityObject<"MixerBusEffectChain"> | null;
            input: Array<FmodEntityObject<"MixerBus">>;
            masters: Array<FmodEntityObject<"MixerVCA">>;
            mixer: FmodEntityObject<"Mixer"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            output: FmodEntityObject<"MixerGroup"> | null;
            panner: FmodEntityObject<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
        };
        MixerPort: {
            color: string;
            instanceStealing: number;
            maxInstances: number;
            name: string;
            note: string;
            overridingInputFormat: number;
            pitch: number;
            portType: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodEntityObject<"MixerBusEffectChain"> | null;
            input: Array<FmodEntityObject<"MixerBus">>;
            masters: Array<FmodEntityObject<"MixerVCA">>;
            mixer: FmodEntityObject<"Mixer"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            output: FmodEntityObject<"MixerGroup"> | null;
            panner: FmodEntityObject<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
        };
        MixerReturn: {
            color: string;
            name: string;
            note: string;
            overridingInputFormat: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodEntityObject<"MixerBusEffectChain"> | null;
            input: Array<FmodEntityObject<"MixerSend">>;
            masters: Array<FmodEntityObject<"MixerVCA">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            output: FmodEntityObject<"MixerGroup"> | null;
            panner: FmodEntityObject<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
        };
        MixerSend: {
            bypass: boolean;
            inputFormat: number;
            level: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            mixerReturn: FmodEntityObject<"MixerReturn"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        MixerStrip: {
            color: string;
            note: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            masters: Array<FmodEntityObject<"MixerVCA">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
        };
        MixerVCA: {
            color: string;
            name: string;
            note: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            masters: Array<FmodEntityObject<"MixerVCA">>;
            mixer: FmodEntityObject<"Mixer"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            slaves: Array<FmodEntityObject<"MixerStrip">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            uiMixerView: Array<FmodEntityObject<"UiMixerView">>;
        };
        Modulator: {
            nameOfPropertyBeingModulated: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            objectBeingModulated: FmodEntityObject<"AutomatableObject"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        Module: {
            color: string;
            delayType: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            quantizationInterval: number;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            parameter: FmodEntityObject<"Parameter"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        MultiSound: {
            color: string;
            delayType: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            looping: boolean;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            pitch: number;
            playCount: number;
            playbackMode: number;
            playlistMode: number;
            quantizationInterval: number;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            volume: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"MultiSound"> | null;
            parameter: FmodEntityObject<"Parameter"> | null;
            playPercentage: FmodEntityObject<"PlayPercentage"> | null;
            playPercentages: Array<FmodEntityObject<"PlayPercentage">>;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            scattererOwner: FmodEntityObject<"SoundScatterer"> | null;
            selectables: Array<FmodEntityObject<"Selectable">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            sounds: Array<FmodEntityObject<"Sound">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        MultibandEqEffect: {
            bypass: boolean;
            filterTypeA: number;
            filterTypeB: number;
            filterTypeC: number;
            filterTypeD: number;
            filterTypeE: number;
            frequencyA: number;
            frequencyB: number;
            frequencyC: number;
            frequencyD: number;
            frequencyE: number;
            gainA: number;
            gainB: number;
            gainC: number;
            gainD: number;
            gainE: number;
            qualityA: number;
            qualityB: number;
            qualityC: number;
            qualityD: number;
            qualityE: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        NamedMarker: {
            name: string;
            position: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodEntityObject<"MarkerTrack"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            references: Array<FmodEntityObject<"TransitionTimelineOwner">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            timeline: FmodEntityObject<"Timeline"> | null;
        };
        NamedWorkspaceBasedSourceControlProvider: {
            repositoryLocation: string;
            workspaceName: string;
            workspaceRoot: string;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        Notable: {
            note: string;
        };
        ObjectSpatialiserEffect: {
            bypass: boolean;
            derivedMaximumDistance: number;
            derivedMinimumDistance: number;
            distanceRolloffType: number;
            extentMode: number;
            maximumDistance: number;
            minimumDistance: number;
            minimumExtent: number;
            overrideRange: boolean;
            soundSize: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        ObsoleteObject: {
        };
        OscControlSurfaceProtocol: {
            address: string;
            inputPort: number;
            outputPort: number;
            controlSurface: FmodEntityObject<"ControlSurface"> | null;
        };
        PannerEffect: {
            LFEUpmixEnabled: boolean;
            bypass: boolean;
            disabledSpeakers: any;
            overridingOutputFormat: number;
            stereoLeftPan: number;
            stereoPan: number;
            stereoRightPan: number;
            stereoToSurroundPanMode: number;
            surroundHeightBlend: number;
            surroundLFELevel: number;
            surroundPanDirection: number;
            surroundPanExtent: number;
            surroundStereoAxis: number;
            surroundStereoSeparation: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        ParamEqEffect: {
            bandwidth: number;
            bypass: boolean;
            centreFrequency: number;
            gain: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        Parameter: {
            uiLastHorizontalScrollBarValue: number;
            uiLastRulerScaleRatio: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            event: FmodEntityObject<"Event"> | null;
            eventSelector: FmodEntityObject<"Event"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            modules: Array<FmodEntityObject<"Module">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        ParameterCondition: {
            isInverted: boolean;
            maximum: any;
            minimum: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"Triggerable"> | null;
            parameter: FmodEntityObject<"GameParameter"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        ParameterPreset: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"ParameterPresetFolder"> | null;
            parameter: FmodEntityObject<"GameParameter"> | null;
        };
        ParameterPresetFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
        };
        ParameterProperty: {
            position: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EventSound"> | null;
            parameter: FmodEntityObject<"ParameterProxy"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        ParameterPrototype: {
            automationCurves: Array<FmodEntityObject<"AutomationCurve">>;
        };
        ParameterProxy: {
            uiLastHorizontalScrollBarValue: number;
            uiLastRulerScaleRatio: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            event: FmodEntityObject<"Event"> | null;
            eventSelector: FmodEntityObject<"Event"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            modules: Array<FmodEntityObject<"Module">>;
            preset: FmodEntityObject<"GameParameter"> | null;
            references: Array<FmodEntityObject<"ParameterProperty">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        PerforceProvider: {
            p4Charset: string;
            p4Host: string;
            p4Password: string;
            p4Port: string;
            p4User: string;
            p4WorkspaceForm: string;
            repositoryLocation: string;
            workspaceName: string;
            workspaceRoot: string;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        PitchShifterEffect: {
            bypass: boolean;
            fftSize: number;
            maxChannels: number;
            overlap: number;
            pitch: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        Platform: {
            buildMetadataOnly: boolean;
            hardwareType: number;
            name: string;
            speakerFormat: number;
            subDirectory: string;
            associatedSettings: Array<FmodEntityObject<"EncodingSetting">>;
            encodingSettings: FmodEntityObject<"EncodingSetting"> | null;
            excludedItems: Array<FmodEntityObject<"PlatformSpecificItem">>;
            uiActivePlatformOwner: FmodEntityObject<"ProjectSettings"> | null;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        PlatformSpecificItem: {
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
        };
        PlayPercentage: {
            percentage: number;
            owner: FmodEntityObject<"MultiSound"> | null;
            sound: FmodEntityObject<"Sound"> | null;
        };
        Plugin: {
            identifier: string;
            owner: FmodEntityObject<"PluginOwner"> | null;
            pluginParameters: Array<FmodEntityObject<"PluginParameter">>;
        };
        PluginEffect: {
            bypass: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            plugin: FmodEntityObject<"Plugin"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            sidechains: Array<FmodEntityObject<"Sidechain">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        PluginOwner: {
            plugin: FmodEntityObject<"Plugin"> | null;
        };
        PluginParameter: {
            name: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: any;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            plugin: FmodEntityObject<"Plugin"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        PluginSettings: {
            pluginFolders: any;
        };
        PluginSound: {
            color: string;
            delayType: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            pitch: number;
            quantizationInterval: number;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            volume: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"MultiSound"> | null;
            parameter: FmodEntityObject<"Parameter"> | null;
            playPercentage: FmodEntityObject<"PlayPercentage"> | null;
            plugin: FmodEntityObject<"Plugin"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        ProfilerFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
        };
        ProfilerGraph: {
            graphType: number;
            instanceId: number;
            uiTrackHeight: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automator: FmodEntityObject<"Automator"> | null;
            objectBeingGraphed: FmodEntityObject<"ProfilerGraphable"> | null;
            selector: FmodEntityObject<"Selector"> | null;
        };
        ProfilerGraphable: {
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
        };
        ProfilerRecordingMarker: {
            name: string;
            position: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodEntityObject<"MarkerTrack"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            references: Array<FmodEntityObject<"TransitionTimelineOwner">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            timeline: FmodEntityObject<"Timeline"> | null;
        };
        ProfilerSession: {
            color: string;
            isDefault: boolean;
            name: string;
            note: string;
            outputFormat: number;
            uiMarkerTracksVisible: boolean;
            uiMaxMarkerTracksVisible: number;
            automatableProperties: FmodEntityObject<"EventAutomatableProperties"> | null;
            banks: Array<FmodEntityObject<"Bank">>;
            clonedEvents: Array<FmodEntityObject<"Event">>;
            commandSounds: Array<FmodEntityObject<"CommandSound">>;
            defaultEvent: FmodEntityObject<"Event"> | null;
            folder: FmodEntityObject<"ProfilerFolder"> | null;
            groupTracks: Array<FmodEntityObject<"GroupTrack">>;
            items: Array<FmodEntityObject<"Event">>;
            markerTracks: Array<FmodEntityObject<"MarkerTrack">>;
            masterTrack: FmodEntityObject<"MasterTrack"> | null;
            mixer: FmodEntityObject<"EventMixer"> | null;
            mixerInput: FmodEntityObject<"MixerInput"> | null;
            parameters: Array<FmodEntityObject<"Parameter">>;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerSystemTrack: FmodEntityObject<"ProfilerSystemTrack"> | null;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            profilerTracks: Array<FmodEntityObject<"ProfilerTrack">>;
            references: Array<FmodEntityObject<"EventSound">>;
            returnTracks: Array<FmodEntityObject<"ReturnTrack">>;
            sandboxEmitters: Array<FmodEntityObject<"SandboxEmitter">>;
            selectables: Array<FmodEntityObject<"Selectable">>;
            tags: Array<FmodEntityObject<"Tag">>;
            timeline: FmodEntityObject<"Timeline"> | null;
            uiLastParameterSelection: FmodEntityObject<"Parameter"> | null;
            userProperties: Array<FmodEntityObject<"UserProperty">>;
        };
        ProfilerSessionFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        ProfilerSystemTrack: {
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
            automationTracks: Array<FmodEntityObject<"AutomationTrack">>;
            modules: Array<FmodEntityObject<"Module">>;
            objectBeingTracked: FmodEntityObject<"ProfilerTrackable"> | null;
            profilerSession: FmodEntityObject<"ProfilerSession"> | null;
            selector: FmodEntityObject<"Selector"> | null;
        };
        ProfilerTrack: {
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
            automationTracks: Array<FmodEntityObject<"AutomationTrack">>;
            modules: Array<FmodEntityObject<"Module">>;
            objectBeingTracked: FmodEntityObject<"ProfilerTrackable"> | null;
            profilerSession: FmodEntityObject<"ProfilerSession"> | null;
            selector: FmodEntityObject<"Selector"> | null;
        };
        ProfilerTrackable: {
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
        };
        ProgrammerSound: {
            color: string;
            delayType: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            looping: boolean;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            pitch: number;
            playCount: number;
            quantizationInterval: number;
            selectedKey: string;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            volume: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"MultiSound"> | null;
            parameter: FmodEntityObject<"Parameter"> | null;
            placeholder: FmodEntityObject<"ProgrammerSoundPlaceholder"> | null;
            playPercentage: FmodEntityObject<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        ProgrammerSoundPlaceholder: {
            programmerSounds: Array<FmodEntityObject<"ProgrammerSound">>;
        };
        ProjectSettings: {
            openWindows: any;
            windowLayout: any;
            activeLocale: FmodEntityObject<"Locale"> | null;
            activePlatform: FmodEntityObject<"Platform"> | null;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        ProxyEffect: {
            bypass: boolean;
            inputFormat: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            preset: FmodEntityObject<"EffectPreset"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        Quantizable: {
            quantizationInterval: number;
            transitionOffset: number;
        };
        RandomizerModulator: {
            amount: number;
            nameOfPropertyBeingModulated: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            objectBeingModulated: FmodEntityObject<"AutomatableObject"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        ReferenceableData: {
            dataReferees: Array<FmodEntityObject<"DataReferee">>;
        };
        Region: {
            length: any;
            position: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodEntityObject<"MarkerTrack"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            timeline: FmodEntityObject<"Timeline"> | null;
        };
        ReturnTrack: {
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
            automationTracks: Array<FmodEntityObject<"AutomationTrack">>;
            event: FmodEntityObject<"Event"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            mixerReturn: FmodEntityObject<"EventMixerReturn"> | null;
            modules: Array<FmodEntityObject<"Module">>;
            selector: FmodEntityObject<"Selector"> | null;
        };
        SFXReverbEffect: {
            HFDecayRatio: number;
            HFReference: number;
            bypass: boolean;
            decayTime: number;
            density: number;
            diffusion: number;
            dryLevel: number;
            earlyDelay: number;
            earlyLateMix: number;
            highCut: number;
            lateDelay: number;
            lowShelfFrequency: number;
            lowShelfGain: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            wetLevel: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        SandboxEmitter: {
            loopPlayback: boolean;
            positionX: number;
            positionZ: number;
            rotationY: number;
            event: FmodEntityObject<"Event"> | null;
            sandboxParameters: Array<FmodEntityObject<"SandboxParameter">>;
            scene: FmodEntityObject<"SandboxScene"> | null;
            selector: FmodEntityObject<"Selector"> | null;
        };
        SandboxFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
        };
        SandboxListener: {
            positionX: number;
            positionZ: number;
            rotationY: number;
            scene: FmodEntityObject<"SandboxScene"> | null;
            selector: FmodEntityObject<"Selector"> | null;
        };
        SandboxParameter: {
            parameterValue: number;
            parameter: FmodEntityObject<"GameParameter"> | null;
            parameterOwner: FmodEntityObject<"SandboxParameterOwner"> | null;
        };
        SandboxParameterOwner: {
            sandboxParameters: Array<FmodEntityObject<"SandboxParameter">>;
        };
        SandboxPositionable: {
            positionX: number;
            positionZ: number;
            rotationY: number;
            selector: FmodEntityObject<"Selector"> | null;
        };
        SandboxScene: {
            color: string;
            isDefault: boolean;
            name: string;
            note: string;
            outputFormat: number;
            uiLastSceneCenterX: number;
            uiLastSceneCenterZ: number;
            uiLastSceneScale: number;
            uiMarkerTracksVisible: boolean;
            uiMaxMarkerTracksVisible: number;
            automatableProperties: FmodEntityObject<"EventAutomatableProperties"> | null;
            banks: Array<FmodEntityObject<"Bank">>;
            clonedEvents: Array<FmodEntityObject<"Event">>;
            commandSounds: Array<FmodEntityObject<"CommandSound">>;
            defaultEvent: FmodEntityObject<"Event"> | null;
            emitters: Array<FmodEntityObject<"SandboxEmitter">>;
            folder: FmodEntityObject<"SandboxFolder"> | null;
            groupTracks: Array<FmodEntityObject<"GroupTrack">>;
            items: Array<FmodEntityObject<"Event">>;
            listeners: Array<FmodEntityObject<"SandboxListener">>;
            markerTracks: Array<FmodEntityObject<"MarkerTrack">>;
            masterTrack: FmodEntityObject<"MasterTrack"> | null;
            mixer: FmodEntityObject<"EventMixer"> | null;
            mixerInput: FmodEntityObject<"MixerInput"> | null;
            parameters: Array<FmodEntityObject<"Parameter">>;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            references: Array<FmodEntityObject<"EventSound">>;
            returnTracks: Array<FmodEntityObject<"ReturnTrack">>;
            sandboxEmitters: Array<FmodEntityObject<"SandboxEmitter">>;
            sandboxParameters: Array<FmodEntityObject<"SandboxParameter">>;
            selectables: Array<FmodEntityObject<"Selectable">>;
            tags: Array<FmodEntityObject<"Tag">>;
            timeline: FmodEntityObject<"Timeline"> | null;
            uiLastParameterSelection: FmodEntityObject<"Parameter"> | null;
            userProperties: Array<FmodEntityObject<"UserProperty">>;
        };
        ScriptBasedProvider: {
            name: string;
            settings: string;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        Selectable: {
            selector: FmodEntityObject<"Selector"> | null;
        };
        Selector: {
            selectables: Array<FmodEntityObject<"Selectable">>;
        };
        Sidechain: {
            bypass: boolean;
            level: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            targets: Array<FmodEntityObject<"SidechainTarget">>;
        };
        SidechainModulator: {
            amount: number;
            attackTime: number;
            levelMode: number;
            maximumThreshold: number;
            minimumThreshold: number;
            nameOfPropertyBeingModulated: any;
            releaseTime: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            objectBeingModulated: FmodEntityObject<"AutomatableObject"> | null;
            sidechains: Array<FmodEntityObject<"Sidechain">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        SidechainTarget: {
            sidechains: Array<FmodEntityObject<"Sidechain">>;
        };
        SilenceSound: {
            color: string;
            delayType: number;
            duration: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            looping: boolean;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            pitch: number;
            playCount: number;
            quantizationInterval: number;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            volume: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"MultiSound"> | null;
            parameter: FmodEntityObject<"Parameter"> | null;
            playPercentage: FmodEntityObject<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        SingleSound: {
            color: string;
            delayType: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            looping: boolean;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            pitch: number;
            playCount: number;
            quantizationInterval: number;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            volume: number;
            audioFile: FmodEntityObject<"AudioFile"> | null;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"MultiSound"> | null;
            parameter: FmodEntityObject<"Parameter"> | null;
            playPercentage: FmodEntityObject<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        Snapshot: {
            behavior: number;
            color: string;
            isDefault: boolean;
            name: string;
            note: string;
            outputFormat: number;
            uiMarkerTracksVisible: boolean;
            uiMaxMarkerTracksVisible: number;
            automatableProperties: FmodEntityObject<"EventAutomatableProperties"> | null;
            banks: Array<FmodEntityObject<"Bank">>;
            clonedEvents: Array<FmodEntityObject<"Event">>;
            commandSounds: Array<FmodEntityObject<"CommandSound">>;
            defaultEvent: FmodEntityObject<"Event"> | null;
            folder: FmodEntityObject<"SnapshotGroup"> | null;
            groupTracks: Array<FmodEntityObject<"GroupTrack">>;
            items: Array<FmodEntityObject<"Event">>;
            markerTracks: Array<FmodEntityObject<"MarkerTrack">>;
            masterTrack: FmodEntityObject<"MasterTrack"> | null;
            mixer: FmodEntityObject<"Mixer"> | null;
            mixerInput: FmodEntityObject<"MixerInput"> | null;
            parameters: Array<FmodEntityObject<"Parameter">>;
            profilerGraphs: Array<FmodEntityObject<"ProfilerGraph">>;
            profilerTrackers: Array<FmodEntityObject<"ProfilerTrack">>;
            references: Array<FmodEntityObject<"SnapshotModule">>;
            returnTracks: Array<FmodEntityObject<"ReturnTrack">>;
            sandboxEmitters: Array<FmodEntityObject<"SandboxEmitter">>;
            selectables: Array<FmodEntityObject<"Selectable">>;
            snapshotMasterTrack: FmodEntityObject<"SnapshotMasterTrack"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            snapshotTracks: Array<FmodEntityObject<"SnapshotTrack">>;
            tags: Array<FmodEntityObject<"Tag">>;
            timeline: FmodEntityObject<"Timeline"> | null;
            uiLastParameterSelection: FmodEntityObject<"Parameter"> | null;
            userProperties: Array<FmodEntityObject<"UserProperty">>;
        };
        SnapshotGroup: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
        };
        SnapshotList: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
            mixer: FmodEntityObject<"Mixer"> | null;
        };
        SnapshotMasterTrack: {
            color: string;
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
            automationTracks: Array<FmodEntityObject<"AutomationTrack">>;
            modules: Array<FmodEntityObject<"Module">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshot: FmodEntityObject<"Snapshot"> | null;
        };
        SnapshotModule: {
            color: string;
            delayType: number;
            intensity: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            pitch: number;
            quantizationInterval: number;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            volume: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            event: FmodEntityObject<"Snapshot"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"MultiSound"> | null;
            parameter: FmodEntityObject<"Parameter"> | null;
            parameters: Array<FmodEntityObject<"ParameterProperty">>;
            playPercentage: FmodEntityObject<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        SnapshotProperty: {
            propertyName: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: number;
            automatableObject: FmodEntityObject<"AutomatableObject"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            snapshot: FmodEntityObject<"Snapshot"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        SnapshotTrack: {
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
            automationTracks: Array<FmodEntityObject<"AutomationTrack">>;
            mixerStrip: FmodEntityObject<"MixerStrip"> | null;
            modules: Array<FmodEntityObject<"Module">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshot: FmodEntityObject<"Snapshot"> | null;
        };
        Sound: {
            color: string;
            delayType: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            pitch: number;
            quantizationInterval: number;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            volume: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"MultiSound"> | null;
            parameter: FmodEntityObject<"Parameter"> | null;
            playPercentage: FmodEntityObject<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        SoundScatterer: {
            color: string;
            delayType: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            maxVoices: number;
            maximumScatterDistance: number;
            maximumTimeBetweenSounds: number;
            maximumTimeDelay: any;
            minimumScatterDistance: number;
            minimumTimeBetweenSounds: number;
            minimumTimeDelay: any;
            name: string;
            pitch: number;
            pitchRandomization: number;
            polyphony: number;
            quantizationInterval: number;
            soundStealing: number;
            spawnDelayType: number;
            spawnQuantizationInterval: number;
            spawnRate: number;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            totalSounds: number;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            volume: number;
            volumeRandomization: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"MultiSound"> | null;
            parameter: FmodEntityObject<"Parameter"> | null;
            playPercentage: FmodEntityObject<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            sound: FmodEntityObject<"MultiSound"> | null;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        SourceControlProvider: {
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        SpatialEffect: {
            bypass: boolean;
            derivedMaximumDistance: number;
            derivedMinimumDistance: number;
            distanceRolloffType: number;
            extentMode: number;
            maximumDistance: number;
            minimumDistance: number;
            minimumExtent: number;
            overrideRange: boolean;
            soundSize: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        SpatialiserEffect: {
            LFEUpmixEnabled: boolean;
            bypass: boolean;
            derivedMaximumDistance: number;
            derivedMinimumDistance: number;
            distanceRolloffType: number;
            dopplerMultiplier: number;
            extentMode: number;
            maximumDistance: number;
            minimumDistance: number;
            minimumExtent: number;
            occlusionEnabled: boolean;
            overrideRange: boolean;
            panBlend: number;
            soundSize: number;
            stereoToSurroundUserPanMode: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            userLFELevel: number;
            userPanDirection: number;
            userPanExtent: number;
            userStereoAxis: number;
            userStereoSeparation: number;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        SslNucleusControlSurface: {
            color: any;
            name: string;
            customBindings: Array<FmodEntityObject<"ControlSurfaceCustomBindings">>;
            protocols: Array<FmodEntityObject<"ControlSurfaceProtocol">>;
        };
        SustainPoint: {
            position: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodEntityObject<"MarkerTrack"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            timeline: FmodEntityObject<"Timeline"> | null;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        Tag: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"TagFolder"> | null;
            taggables: Array<FmodEntityObject<"Taggable">>;
        };
        TagFolder: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
            items: Array<FmodEntityObject<"WorkspaceItem">>;
        };
        Taggable: {
            tags: Array<FmodEntityObject<"Tag">>;
        };
        TempoMarker: {
            position: any;
            tempo: number;
            timeSignatureDenominator: number;
            timeSignatureNumerator: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodEntityObject<"MarkerTrack"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            timeline: FmodEntityObject<"Timeline"> | null;
        };
        TfsProvider: {
            connectionPath: string;
            connectionPort: number;
            connectionProtocol: string;
            repositoryLocation: string;
            serverURL: string;
            workspaceFormString: string;
            workspaceName: string;
            workspaceRoot: string;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        ThreeEQEffect: {
            bypass: boolean;
            crossoverSlope: number;
            highCrossover: number;
            highGain: number;
            lowCrossover: number;
            lowGain: number;
            midGain: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        Timeline: {
            isProxyEnabled: boolean;
            uiLastHorizontalScrollBarValue: number;
            uiLastRulerScaleRatio: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automationCurves: Array<FmodEntityObject<"AutomationCurve">>;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            event: FmodEntityObject<"Event"> | null;
            eventSelector: FmodEntityObject<"Event"> | null;
            markers: Array<FmodEntityObject<"Marker">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            modules: Array<FmodEntityObject<"Module">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        TouchOscControlSurface: {
            color: any;
            name: string;
            customBindings: Array<FmodEntityObject<"ControlSurfaceCustomBindings">>;
            protocols: Array<FmodEntityObject<"ControlSurfaceProtocol">>;
        };
        Track: {
            uiTrackHeight: number;
            selector: FmodEntityObject<"Selector"> | null;
        };
        TransceiverEffect: {
            bypass: boolean;
            channel: number;
            level: number;
            speakerMode: number;
            transmitMode: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        TransitionDestination: {
            name: string;
            references: Array<FmodEntityObject<"TransitionTimelineOwner">>;
        };
        TransitionDestinationFadeInCurve: {
            endPoint: FmodEntityObject<"AutomationPoint"> | null;
            fadeInOwner: FmodEntityObject<"Module"> | null;
            fadeOutOwner: FmodEntityObject<"Module"> | null;
            relatedModule: FmodEntityObject<"Module"> | null;
            startPoint: FmodEntityObject<"AutomationPoint"> | null;
        };
        TransitionDestinationSound: {
            color: string;
            delayType: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            quantizationInterval: number;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            parameter: FmodEntityObject<"Parameter"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        TransitionFadeCurve: {
            endPoint: FmodEntityObject<"AutomationPoint"> | null;
            fadeInOwner: FmodEntityObject<"Module"> | null;
            fadeOutOwner: FmodEntityObject<"Module"> | null;
            relatedModule: FmodEntityObject<"Module"> | null;
            startPoint: FmodEntityObject<"AutomationPoint"> | null;
        };
        TransitionMarker: {
            position: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTransitionTimelineVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            destination: FmodEntityObject<"TransitionDestination"> | null;
            markerTrack: FmodEntityObject<"MarkerTrack"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            timeline: FmodEntityObject<"Timeline"> | null;
            transitionTimeline: FmodEntityObject<"TransitionTimeline"> | null;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        TransitionRegion: {
            length: any;
            position: any;
            quantizationInterval: number;
            transitionOffset: number;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTransitionTimelineVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            destination: FmodEntityObject<"TransitionDestination"> | null;
            markerTrack: FmodEntityObject<"MarkerTrack"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            timeline: FmodEntityObject<"Timeline"> | null;
            transitionTimeline: FmodEntityObject<"TransitionTimeline"> | null;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        TransitionSourceFadeOutCurve: {
            endPoint: FmodEntityObject<"AutomationPoint"> | null;
            fadeInOwner: FmodEntityObject<"Module"> | null;
            fadeOutOwner: FmodEntityObject<"Module"> | null;
            relatedModule: FmodEntityObject<"Module"> | null;
            startPoint: FmodEntityObject<"AutomationPoint"> | null;
        };
        TransitionSourceSound: {
            color: string;
            delayType: number;
            isAsync: boolean;
            isCutoff: boolean;
            length: any;
            maxVoices: number;
            maximumTimeDelay: any;
            minimumTimeDelay: any;
            name: string;
            quantizationInterval: number;
            start: any;
            startOffset: number;
            timelockedOffset: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            voiceStealing: number;
            audioTrack: FmodEntityObject<"AudioTrack"> | null;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodEntityObject<"FadeCurve"> | null;
            fadeOutCurve: FmodEntityObject<"FadeCurve"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            parameter: FmodEntityObject<"Parameter"> | null;
            relatedFadeCurves: Array<FmodEntityObject<"FadeCurve">>;
            selector: FmodEntityObject<"Selector"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        TransitionTimeline: {
            isProxyEnabled: boolean;
            length: any;
            uiLastHorizontalScrollBarValue: number;
            uiLastRulerScaleRatio: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automationCurves: Array<FmodEntityObject<"AutomationCurve">>;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            event: FmodEntityObject<"TransitionTimelineOwner"> | null;
            eventSelector: FmodEntityObject<"Event"> | null;
            markers: Array<FmodEntityObject<"Marker">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            modules: Array<FmodEntityObject<"Module">>;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        TransitionTimelineOwner: {
            uiTransitionTimelineVisible: boolean;
            destination: FmodEntityObject<"TransitionDestination"> | null;
            transitionTimeline: FmodEntityObject<"TransitionTimeline"> | null;
        };
        TremoloEffect: {
            bypass: boolean;
            depth: number;
            duty: number;
            frequency: number;
            phase: number;
            shape: number;
            skew: number;
            spread: number;
            square: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodEntityObject<"Platform">>;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"EffectChain"> | null;
            presetOwner: FmodEntityObject<"EffectPreset"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        TriggerCondition: {
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            automators: Array<FmodEntityObject<"Automator">>;
            customBindings: FmodEntityObject<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodEntityObject<"Modulator">>;
            owner: FmodEntityObject<"Triggerable"> | null;
            snapshotProperties: Array<FmodEntityObject<"SnapshotProperty">>;
        };
        Triggerable: {
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            triggerConditions: Array<FmodEntityObject<"TriggerCondition">>;
        };
        UiMixerView: {
            name: string;
            assignedStrips: Array<FmodEntityObject<"MixerStrip">>;
            mixer: FmodEntityObject<"Mixer"> | null;
        };
        UserProperty: {
            key: string;
            value: string;
            event: FmodEntityObject<"Event"> | null;
        };
        Workspace: {
            builtBanksEncryptionKey: string;
            builtBanksIncludeFileNames: boolean;
            builtBanksIncludeHash: boolean;
            builtBanksIncludeReferencedEvents: boolean;
            builtBanksMirrorBrowserFolderHierarchy: boolean;
            builtBanksOutputDirectory: string;
            builtBanksSeparateAssets: boolean;
            builtBanksSeparateBankPerAsset: boolean;
            builtBanksSeparateStreams: boolean;
            isSourceControlForAssetsEnabled: boolean;
            isSourceControlForBuiltBanksEnabled: boolean;
            isSourceControlForProfilerSessionsEnabled: boolean;
            changelist: FmodEntityObject<"WorkspaceChangelist"> | null;
            customBindings: Array<FmodEntityObject<"ControlSurfaceCustomBindings">>;
            locales: Array<FmodEntityObject<"Locale">>;
            masterAssetFolder: FmodEntityObject<"MasterAssetFolder"> | null;
            masterBankFolder: FmodEntityObject<"MasterBankFolder"> | null;
            masterEffectPresetFolder: FmodEntityObject<"MasterEffectPresetFolder"> | null;
            masterEventFolder: FmodEntityObject<"MasterEventFolder"> | null;
            masterParameterPresetFolder: FmodEntityObject<"MasterParameterPresetFolder"> | null;
            masterSandboxFolder: FmodEntityObject<"MasterSandboxFolder"> | null;
            masterTagFolder: FmodEntityObject<"MasterTagFolder"> | null;
            mixer: FmodEntityObject<"Mixer"> | null;
            platforms: Array<FmodEntityObject<"Platform">>;
            profilerSessionFolder: FmodEntityObject<"ProfilerSessionFolder"> | null;
            projectSettings: FmodEntityObject<"ProjectSettings"> | null;
            sourceControlProvider: FmodEntityObject<"SourceControlProvider"> | null;
        };
        WorkspaceBasedSourceControlProvider: {
            repositoryLocation: string;
            workspaceRoot: string;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        WorkspaceChangelist: {
            filesExplicitlyLocked: any;
            filesOnHold: any;
            workspace: FmodEntityObject<"Workspace"> | null;
        };
        WorkspaceItem: {
            color: string;
            name: string;
            note: string;
            folder: FmodEntityObject<"Folder"> | null;
        };
    }
    type ExtensionEntityName = keyof EntityExtensionsMap;
    type ModelEntityName = keyof ModelEntityDataMap;
    type EntityName = ExtensionEntityName | ModelEntityName;

    interface EntityRuntimeNameMap {
        ADSRModulator: "ADSRModulator";
        ActionSheet: "ActionSheet";
        Asset: "Asset" | "AudioFile" | "DAWAsset" | "DAWProject" | "DataFile" | "EncodableAsset" | "MasterAssetFolder";
        AudioFile: "AudioFile" | "DAWAsset";
        AudioSettings: "AudioSettings";
        AudioTable: "AudioTable";
        AudioTrack: "AudioTrack" | "GroupTrack" | "MasterTrack" | "ProfilerSystemTrack" | "ProfilerTrack" | "ReturnTrack" | "SnapshotMasterTrack" | "SnapshotTrack";
        AutomatableObject: "ADSRModulator" | "ActionSheet" | "AutomatableObject" | "AutopitchModulator" | "BoolPluginParameter" | "ChannelMixEffect" | "ChorusEffect" | "CommandSound" | "CompressorEffect" | "ConvolutionReverbEffect" | "DataPluginParameter" | "DelayEffect" | "DistortionEffect" | "EffectChain" | "EventAutomatableProperties" | "EventCondition" | "EventMixerGroup" | "EventMixerMaster" | "EventMixerReturn" | "EventSound" | "FlangerEffect" | "FloatPluginParameter" | "GainEffect" | "GameParameter" | "HighpassEffect" | "HighpassSimpleEffect" | "ITEchoEffect" | "IntPluginParameter" | "LFOModulator" | "LimiterEffect" | "LoopRegion" | "LoudnessMeter" | "LowpassEffect" | "LowpassSimpleEffect" | "Marker" | "MixerBus" | "MixerBusEffectChain" | "MixerBusFader" | "MixerBusPanner" | "MixerEffect" | "MixerGroup" | "MixerInput" | "MixerMaster" | "MixerPort" | "MixerReturn" | "MixerSend" | "MixerStrip" | "MixerVCA" | "Modulator" | "Module" | "MultiSound" | "MultibandEqEffect" | "NamedMarker" | "ObjectSpatialiserEffect" | "PannerEffect" | "ParamEqEffect" | "Parameter" | "ParameterCondition" | "ParameterProperty" | "ParameterProxy" | "PitchShifterEffect" | "PluginEffect" | "PluginParameter" | "PluginSound" | "ProfilerRecordingMarker" | "ProgrammerSound" | "ProxyEffect" | "RandomizerModulator" | "Region" | "SFXReverbEffect" | "Sidechain" | "SidechainModulator" | "SilenceSound" | "SingleSound" | "SnapshotModule" | "SnapshotProperty" | "Sound" | "SoundScatterer" | "SpatialEffect" | "SpatialiserEffect" | "SustainPoint" | "TempoMarker" | "ThreeEQEffect" | "Timeline" | "TransceiverEffect" | "TransitionDestinationSound" | "TransitionMarker" | "TransitionRegion" | "TransitionSourceSound" | "TransitionTimeline" | "TremoloEffect" | "TriggerCondition";
        AutomationCurve: "AutomationCurve";
        AutomationPoint: "AutomationPoint";
        AutomationTrack: "AutomationTrack" | "ProfilerGraph";
        Automator: "Automator";
        AutopitchModulator: "AutopitchModulator";
        Bank: "Bank";
        BankFolder: "BankFolder" | "MasterBankFolder";
        BoolPluginParameter: "BoolPluginParameter";
        ChannelMixEffect: "ChannelMixEffect";
        ChorusEffect: "ChorusEffect";
        Colorable: "Asset" | "AudioFile" | "AudioTable" | "Bank" | "BankFolder" | "Colorable" | "CommandSound" | "DAWAsset" | "DAWProject" | "DataFile" | "EffectPreset" | "EffectPresetFolder" | "EncodableAsset" | "Event" | "EventFolder" | "EventMixerGroup" | "EventMixerMaster" | "EventMixerReturn" | "EventSound" | "Folder" | "MasterAssetFolder" | "MasterBankFolder" | "MasterEffectPresetFolder" | "MasterEventFolder" | "MasterParameterPresetFolder" | "MasterSandboxFolder" | "MasterTagFolder" | "MixerBus" | "MixerGroup" | "MixerInput" | "MixerMaster" | "MixerPort" | "MixerReturn" | "MixerStrip" | "MixerVCA" | "Module" | "MultiSound" | "ParameterPreset" | "ParameterPresetFolder" | "PluginSound" | "ProfilerFolder" | "ProfilerSession" | "ProfilerSessionFolder" | "ProgrammerSound" | "SandboxFolder" | "SandboxScene" | "SilenceSound" | "SingleSound" | "Snapshot" | "SnapshotGroup" | "SnapshotList" | "SnapshotMasterTrack" | "SnapshotModule" | "Sound" | "SoundScatterer" | "Tag" | "TagFolder" | "TransitionDestinationSound" | "TransitionSourceSound" | "WorkspaceItem";
        CommandSound: "CommandSound";
        CommandTarget: "CommandTarget" | "Event" | "GameParameter" | "ProfilerSession" | "SandboxScene" | "Snapshot";
        CompressorEffect: "CompressorEffect";
        ControlSurface: "ControlSurface" | "MackieControlSurface" | "MackieExtendedControlSurface" | "SslNucleusControlSurface" | "TouchOscControlSurface";
        ControlSurfaceCustomBinding: "ControlSurfaceCustomBinding";
        ControlSurfaceCustomBindings: "ControlSurfaceCustomBindings";
        ControlSurfaceProtocol: "ControlSurfaceProtocol" | "MidiControlSurfaceProtocol" | "OscControlSurfaceProtocol";
        ConvolutionReverbEffect: "ConvolutionReverbEffect";
        DAWAsset: "DAWAsset";
        DAWProject: "DAWProject";
        DataFile: "DataFile";
        DataPluginParameter: "DataPluginParameter";
        DataReferee: "ConvolutionReverbEffect" | "DataPluginParameter" | "DataReferee";
        DelayEffect: "DelayEffect";
        DistortionEffect: "DistortionEffect";
        EditorSettings: "EditorSettings";
        EffectChain: "EffectChain" | "MixerBusEffectChain";
        EffectPreset: "EffectPreset";
        EffectPresetFolder: "EffectPresetFolder" | "MasterEffectPresetFolder";
        Encodable: "AudioFile" | "AudioTable" | "DAWAsset" | "DAWProject" | "Encodable" | "EncodableAsset" | "MasterAssetFolder" | "Platform";
        EncodableAsset: "AudioFile" | "DAWAsset" | "DAWProject" | "EncodableAsset" | "MasterAssetFolder";
        EncodingSetting: "EncodingSetting";
        Event: "Event" | "ProfilerSession" | "SandboxScene" | "Snapshot";
        EventAutomatableProperties: "EventAutomatableProperties";
        EventCondition: "EventCondition";
        EventFolder: "EventFolder" | "MasterEventFolder";
        EventMixer: "EventMixer";
        EventMixerGroup: "EventMixerGroup";
        EventMixerMaster: "EventMixerMaster";
        EventMixerReturn: "EventMixerReturn";
        EventSound: "EventSound" | "SnapshotModule";
        FadeCurve: "FadeCurve" | "TransitionDestinationFadeInCurve" | "TransitionFadeCurve" | "TransitionSourceFadeOutCurve";
        FlangerEffect: "FlangerEffect";
        FloatPluginParameter: "FloatPluginParameter";
        Folder: "BankFolder" | "EffectPresetFolder" | "Event" | "EventFolder" | "Folder" | "MasterBankFolder" | "MasterEffectPresetFolder" | "MasterEventFolder" | "MasterParameterPresetFolder" | "MasterSandboxFolder" | "MasterTagFolder" | "ParameterPresetFolder" | "ProfilerFolder" | "ProfilerSession" | "ProfilerSessionFolder" | "SandboxFolder" | "SandboxScene" | "Snapshot" | "SnapshotGroup" | "SnapshotList" | "TagFolder";
        GainEffect: "GainEffect";
        GameParameter: "GameParameter";
        GroupTrack: "GroupTrack" | "MasterTrack";
        HighpassEffect: "HighpassEffect";
        HighpassSimpleEffect: "HighpassSimpleEffect";
        ITEchoEffect: "ITEchoEffect";
        IntPluginParameter: "IntPluginParameter";
        LFOModulator: "LFOModulator";
        LimiterEffect: "LimiterEffect";
        Locale: "Locale";
        LoopRegion: "LoopRegion";
        Loopable: "Loopable" | "MultiSound" | "ProgrammerSound" | "SilenceSound" | "SingleSound";
        LoudnessMeter: "LoudnessMeter";
        LowpassEffect: "LowpassEffect";
        LowpassSimpleEffect: "LowpassSimpleEffect";
        MackieControlSurface: "MackieControlSurface";
        MackieExtendedControlSurface: "MackieExtendedControlSurface";
        ManagedObject: "ADSRModulator" | "ActionSheet" | "Asset" | "AudioFile" | "AudioSettings" | "AudioTable" | "AudioTrack" | "AutomatableObject" | "AutomationCurve" | "AutomationPoint" | "AutomationTrack" | "Automator" | "AutopitchModulator" | "Bank" | "BankFolder" | "BoolPluginParameter" | "ChannelMixEffect" | "ChorusEffect" | "Colorable" | "CommandSound" | "CommandTarget" | "CompressorEffect" | "ControlSurface" | "ControlSurfaceCustomBinding" | "ControlSurfaceCustomBindings" | "ControlSurfaceProtocol" | "ConvolutionReverbEffect" | "DAWAsset" | "DAWProject" | "DataFile" | "DataPluginParameter" | "DataReferee" | "DelayEffect" | "DistortionEffect" | "EditorSettings" | "EffectChain" | "EffectPreset" | "EffectPresetFolder" | "Encodable" | "EncodableAsset" | "EncodingSetting" | "Event" | "EventAutomatableProperties" | "EventCondition" | "EventFolder" | "EventMixer" | "EventMixerGroup" | "EventMixerMaster" | "EventMixerReturn" | "EventSound" | "FadeCurve" | "FlangerEffect" | "FloatPluginParameter" | "Folder" | "GainEffect" | "GameParameter" | "GroupTrack" | "HighpassEffect" | "HighpassSimpleEffect" | "ITEchoEffect" | "IntPluginParameter" | "LFOModulator" | "LimiterEffect" | "Locale" | "LoopRegion" | "Loopable" | "LoudnessMeter" | "LowpassEffect" | "LowpassSimpleEffect" | "MackieControlSurface" | "MackieExtendedControlSurface" | "ManagedObject" | "Marker" | "MarkerTrack" | "MasterAssetFolder" | "MasterBankFolder" | "MasterEffectPresetFolder" | "MasterEventFolder" | "MasterParameterPresetFolder" | "MasterSandboxFolder" | "MasterTagFolder" | "MasterTrack" | "MeteringSettings" | "MidiControlSurfaceProtocol" | "Mixer" | "MixerBus" | "MixerBusEffectChain" | "MixerBusFader" | "MixerBusPanner" | "MixerEffect" | "MixerGroup" | "MixerInput" | "MixerMaster" | "MixerPort" | "MixerReturn" | "MixerSend" | "MixerStrip" | "MixerVCA" | "Modulator" | "Module" | "MultiSound" | "MultibandEqEffect" | "NamedMarker" | "NamedWorkspaceBasedSourceControlProvider" | "Notable" | "ObjectSpatialiserEffect" | "OscControlSurfaceProtocol" | "PannerEffect" | "ParamEqEffect" | "Parameter" | "ParameterCondition" | "ParameterPreset" | "ParameterPresetFolder" | "ParameterProperty" | "ParameterPrototype" | "ParameterProxy" | "PerforceProvider" | "PitchShifterEffect" | "Platform" | "PlatformSpecificItem" | "PlayPercentage" | "Plugin" | "PluginEffect" | "PluginOwner" | "PluginParameter" | "PluginSettings" | "PluginSound" | "ProfilerFolder" | "ProfilerGraph" | "ProfilerGraphable" | "ProfilerRecordingMarker" | "ProfilerSession" | "ProfilerSessionFolder" | "ProfilerSystemTrack" | "ProfilerTrack" | "ProfilerTrackable" | "ProgrammerSound" | "ProgrammerSoundPlaceholder" | "ProjectSettings" | "ProxyEffect" | "Quantizable" | "RandomizerModulator" | "ReferenceableData" | "Region" | "ReturnTrack" | "SFXReverbEffect" | "SandboxEmitter" | "SandboxFolder" | "SandboxListener" | "SandboxParameter" | "SandboxParameterOwner" | "SandboxPositionable" | "SandboxScene" | "ScriptBasedProvider" | "Selectable" | "Selector" | "Sidechain" | "SidechainModulator" | "SidechainTarget" | "SilenceSound" | "SingleSound" | "Snapshot" | "SnapshotGroup" | "SnapshotList" | "SnapshotMasterTrack" | "SnapshotModule" | "SnapshotProperty" | "SnapshotTrack" | "Sound" | "SoundScatterer" | "SourceControlProvider" | "SpatialEffect" | "SpatialiserEffect" | "SslNucleusControlSurface" | "SustainPoint" | "Tag" | "TagFolder" | "Taggable" | "TempoMarker" | "TfsProvider" | "ThreeEQEffect" | "Timeline" | "TouchOscControlSurface" | "Track" | "TransceiverEffect" | "TransitionDestination" | "TransitionDestinationFadeInCurve" | "TransitionDestinationSound" | "TransitionFadeCurve" | "TransitionMarker" | "TransitionRegion" | "TransitionSourceFadeOutCurve" | "TransitionSourceSound" | "TransitionTimeline" | "TransitionTimelineOwner" | "TremoloEffect" | "TriggerCondition" | "Triggerable" | "UiMixerView" | "UserProperty" | "Workspace" | "WorkspaceBasedSourceControlProvider" | "WorkspaceChangelist" | "WorkspaceItem";
        Marker: "LoopRegion" | "Marker" | "NamedMarker" | "ProfilerRecordingMarker" | "Region" | "SustainPoint" | "TempoMarker" | "TransitionMarker" | "TransitionRegion";
        MarkerTrack: "MarkerTrack";
        MasterAssetFolder: "MasterAssetFolder";
        MasterBankFolder: "MasterBankFolder";
        MasterEffectPresetFolder: "MasterEffectPresetFolder";
        MasterEventFolder: "MasterEventFolder";
        MasterParameterPresetFolder: "MasterParameterPresetFolder";
        MasterSandboxFolder: "MasterSandboxFolder";
        MasterTagFolder: "MasterTagFolder";
        MasterTrack: "MasterTrack";
        MeteringSettings: "MeteringSettings";
        MidiControlSurfaceProtocol: "MidiControlSurfaceProtocol";
        Mixer: "EventMixer" | "Mixer";
        MixerBus: "EventMixerGroup" | "EventMixerMaster" | "EventMixerReturn" | "MixerBus" | "MixerGroup" | "MixerInput" | "MixerMaster" | "MixerPort" | "MixerReturn";
        MixerBusEffectChain: "MixerBusEffectChain";
        MixerBusFader: "MixerBusFader";
        MixerBusPanner: "MixerBusPanner";
        MixerEffect: "ChannelMixEffect" | "ChorusEffect" | "CompressorEffect" | "ConvolutionReverbEffect" | "DelayEffect" | "DistortionEffect" | "EffectChain" | "FlangerEffect" | "GainEffect" | "HighpassEffect" | "HighpassSimpleEffect" | "ITEchoEffect" | "LimiterEffect" | "LoudnessMeter" | "LowpassEffect" | "LowpassSimpleEffect" | "MixerBusEffectChain" | "MixerBusFader" | "MixerBusPanner" | "MixerEffect" | "MixerSend" | "MultibandEqEffect" | "ObjectSpatialiserEffect" | "PannerEffect" | "ParamEqEffect" | "PitchShifterEffect" | "PluginEffect" | "ProxyEffect" | "SFXReverbEffect" | "Sidechain" | "SpatialEffect" | "SpatialiserEffect" | "ThreeEQEffect" | "TransceiverEffect" | "TremoloEffect";
        MixerGroup: "EventMixerGroup" | "EventMixerMaster" | "MixerGroup" | "MixerMaster" | "MixerPort";
        MixerInput: "MixerInput";
        MixerMaster: "EventMixerMaster" | "MixerMaster";
        MixerPort: "MixerPort";
        MixerReturn: "EventMixerReturn" | "MixerReturn";
        MixerSend: "MixerSend";
        MixerStrip: "EventMixerGroup" | "EventMixerMaster" | "EventMixerReturn" | "MixerBus" | "MixerGroup" | "MixerInput" | "MixerMaster" | "MixerPort" | "MixerReturn" | "MixerStrip" | "MixerVCA";
        MixerVCA: "MixerVCA";
        Modulator: "ADSRModulator" | "AutopitchModulator" | "LFOModulator" | "Modulator" | "RandomizerModulator" | "SidechainModulator";
        Module: "CommandSound" | "EventSound" | "Module" | "MultiSound" | "PluginSound" | "ProgrammerSound" | "SilenceSound" | "SingleSound" | "SnapshotModule" | "Sound" | "SoundScatterer" | "TransitionDestinationSound" | "TransitionSourceSound";
        MultiSound: "MultiSound";
        MultibandEqEffect: "MultibandEqEffect";
        NamedMarker: "NamedMarker" | "ProfilerRecordingMarker";
        NamedWorkspaceBasedSourceControlProvider: "NamedWorkspaceBasedSourceControlProvider" | "PerforceProvider" | "TfsProvider";
        Notable: "Asset" | "AudioFile" | "AudioTable" | "Bank" | "BankFolder" | "DAWAsset" | "DAWProject" | "DataFile" | "EffectPreset" | "EffectPresetFolder" | "EncodableAsset" | "Event" | "EventFolder" | "EventMixerGroup" | "EventMixerMaster" | "EventMixerReturn" | "Folder" | "MasterAssetFolder" | "MasterBankFolder" | "MasterEffectPresetFolder" | "MasterEventFolder" | "MasterParameterPresetFolder" | "MasterSandboxFolder" | "MasterTagFolder" | "MixerBus" | "MixerGroup" | "MixerInput" | "MixerMaster" | "MixerPort" | "MixerReturn" | "MixerStrip" | "MixerVCA" | "Notable" | "ParameterPreset" | "ParameterPresetFolder" | "ProfilerFolder" | "ProfilerSession" | "ProfilerSessionFolder" | "SandboxFolder" | "SandboxScene" | "Snapshot" | "SnapshotGroup" | "SnapshotList" | "Tag" | "TagFolder" | "WorkspaceItem";
        ObjectSpatialiserEffect: "ObjectSpatialiserEffect";
        ObsoleteObject: "ObsoleteObject";
        OscControlSurfaceProtocol: "OscControlSurfaceProtocol";
        PannerEffect: "MixerBusPanner" | "PannerEffect";
        ParamEqEffect: "ParamEqEffect";
        Parameter: "ActionSheet" | "Parameter" | "ParameterProxy" | "Timeline" | "TransitionTimeline";
        ParameterCondition: "ParameterCondition";
        ParameterPreset: "ParameterPreset";
        ParameterPresetFolder: "MasterParameterPresetFolder" | "ParameterPresetFolder";
        ParameterProperty: "ParameterProperty";
        ParameterPrototype: "GameParameter" | "ParameterPrototype" | "Timeline" | "TransitionTimeline";
        ParameterProxy: "ParameterProxy";
        PerforceProvider: "PerforceProvider";
        PitchShifterEffect: "PitchShifterEffect";
        Platform: "Platform";
        PlatformSpecificItem: "ChannelMixEffect" | "ChorusEffect" | "CompressorEffect" | "ConvolutionReverbEffect" | "DelayEffect" | "DistortionEffect" | "EffectChain" | "FlangerEffect" | "GainEffect" | "GroupTrack" | "HighpassEffect" | "HighpassSimpleEffect" | "ITEchoEffect" | "LimiterEffect" | "LoudnessMeter" | "LowpassEffect" | "LowpassSimpleEffect" | "MasterTrack" | "MixerBusEffectChain" | "MixerBusFader" | "MixerBusPanner" | "MixerEffect" | "MixerSend" | "MultibandEqEffect" | "ObjectSpatialiserEffect" | "PannerEffect" | "ParamEqEffect" | "PitchShifterEffect" | "PlatformSpecificItem" | "PluginEffect" | "ProxyEffect" | "ReturnTrack" | "SFXReverbEffect" | "Sidechain" | "SpatialEffect" | "SpatialiserEffect" | "ThreeEQEffect" | "TransceiverEffect" | "TremoloEffect";
        PlayPercentage: "PlayPercentage";
        Plugin: "Plugin";
        PluginEffect: "PluginEffect";
        PluginOwner: "PluginEffect" | "PluginOwner" | "PluginSound";
        PluginParameter: "BoolPluginParameter" | "DataPluginParameter" | "FloatPluginParameter" | "IntPluginParameter" | "PluginParameter";
        PluginSettings: "PluginSettings";
        PluginSound: "PluginSound";
        ProfilerFolder: "ProfilerFolder" | "ProfilerSessionFolder";
        ProfilerGraph: "ProfilerGraph";
        ProfilerGraphable: "Event" | "EventMixerGroup" | "EventMixerMaster" | "EventMixerReturn" | "GameParameter" | "MixerBus" | "MixerGroup" | "MixerInput" | "MixerMaster" | "MixerPort" | "MixerReturn" | "MixerStrip" | "MixerVCA" | "ProfilerGraphable" | "ProfilerSession" | "SandboxScene" | "Snapshot";
        ProfilerRecordingMarker: "ProfilerRecordingMarker";
        ProfilerSession: "ProfilerSession";
        ProfilerSessionFolder: "ProfilerSessionFolder";
        ProfilerSystemTrack: "ProfilerSystemTrack";
        ProfilerTrack: "ProfilerSystemTrack" | "ProfilerTrack";
        ProfilerTrackable: "Event" | "EventMixerGroup" | "EventMixerMaster" | "EventMixerReturn" | "MixerBus" | "MixerGroup" | "MixerInput" | "MixerMaster" | "MixerPort" | "MixerReturn" | "MixerStrip" | "MixerVCA" | "ProfilerSession" | "ProfilerTrackable" | "SandboxScene" | "Snapshot";
        ProgrammerSound: "ProgrammerSound";
        ProgrammerSoundPlaceholder: "AudioFile" | "AudioTable" | "DAWAsset" | "ProgrammerSoundPlaceholder";
        ProjectSettings: "ProjectSettings";
        ProxyEffect: "ProxyEffect";
        Quantizable: "LoopRegion" | "Quantizable" | "TransitionRegion";
        RandomizerModulator: "RandomizerModulator";
        ReferenceableData: "AudioFile" | "DAWAsset" | "DataFile" | "ReferenceableData";
        Region: "LoopRegion" | "Region" | "TransitionRegion";
        ReturnTrack: "ReturnTrack";
        SFXReverbEffect: "SFXReverbEffect";
        SandboxEmitter: "SandboxEmitter";
        SandboxFolder: "MasterSandboxFolder" | "SandboxFolder";
        SandboxListener: "SandboxListener";
        SandboxParameter: "SandboxParameter";
        SandboxParameterOwner: "SandboxEmitter" | "SandboxParameterOwner" | "SandboxScene";
        SandboxPositionable: "SandboxEmitter" | "SandboxListener" | "SandboxPositionable";
        SandboxScene: "SandboxScene";
        ScriptBasedProvider: "ScriptBasedProvider";
        Selectable: "AudioTrack" | "AutomationPoint" | "AutomationTrack" | "CommandSound" | "EventMixerGroup" | "EventMixerMaster" | "EventMixerReturn" | "EventSound" | "GameParameter" | "GroupTrack" | "LoopRegion" | "Marker" | "MarkerTrack" | "MasterTrack" | "Module" | "MultiSound" | "NamedMarker" | "ParameterProxy" | "PluginSound" | "ProfilerGraph" | "ProfilerRecordingMarker" | "ProfilerSystemTrack" | "ProfilerTrack" | "ProgrammerSound" | "Region" | "ReturnTrack" | "SandboxEmitter" | "SandboxListener" | "SandboxPositionable" | "Selectable" | "SilenceSound" | "SingleSound" | "SnapshotMasterTrack" | "SnapshotModule" | "SnapshotTrack" | "Sound" | "SoundScatterer" | "SustainPoint" | "TempoMarker" | "Track" | "TransitionDestinationSound" | "TransitionMarker" | "TransitionRegion" | "TransitionSourceSound";
        Selector: "Event" | "MultiSound" | "ProfilerSession" | "SandboxScene" | "Selector" | "Snapshot";
        Sidechain: "Sidechain";
        SidechainModulator: "SidechainModulator";
        SidechainTarget: "CompressorEffect" | "PluginEffect" | "SidechainModulator" | "SidechainTarget";
        SilenceSound: "SilenceSound";
        SingleSound: "SingleSound";
        Snapshot: "Snapshot";
        SnapshotGroup: "SnapshotGroup" | "SnapshotList";
        SnapshotList: "SnapshotList";
        SnapshotMasterTrack: "SnapshotMasterTrack";
        SnapshotModule: "SnapshotModule";
        SnapshotProperty: "SnapshotProperty";
        SnapshotTrack: "SnapshotTrack";
        Sound: "CommandSound" | "EventSound" | "MultiSound" | "PluginSound" | "ProgrammerSound" | "SilenceSound" | "SingleSound" | "SnapshotModule" | "Sound" | "SoundScatterer";
        SoundScatterer: "SoundScatterer";
        SourceControlProvider: "NamedWorkspaceBasedSourceControlProvider" | "PerforceProvider" | "ScriptBasedProvider" | "SourceControlProvider" | "TfsProvider" | "WorkspaceBasedSourceControlProvider";
        SpatialEffect: "ObjectSpatialiserEffect" | "SpatialEffect" | "SpatialiserEffect";
        SpatialiserEffect: "SpatialiserEffect";
        SslNucleusControlSurface: "SslNucleusControlSurface";
        SustainPoint: "SustainPoint";
        Tag: "Tag";
        TagFolder: "MasterTagFolder" | "TagFolder";
        Taggable: "Event" | "ProfilerSession" | "SandboxScene" | "Snapshot" | "Taggable";
        TempoMarker: "TempoMarker";
        TfsProvider: "TfsProvider";
        ThreeEQEffect: "ThreeEQEffect";
        Timeline: "Timeline" | "TransitionTimeline";
        TouchOscControlSurface: "TouchOscControlSurface";
        Track: "AudioTrack" | "AutomationTrack" | "GroupTrack" | "MarkerTrack" | "MasterTrack" | "ProfilerGraph" | "ProfilerSystemTrack" | "ProfilerTrack" | "ReturnTrack" | "SnapshotMasterTrack" | "SnapshotTrack" | "Track";
        TransceiverEffect: "TransceiverEffect";
        TransitionDestination: "LoopRegion" | "NamedMarker" | "ProfilerRecordingMarker" | "TransitionDestination";
        TransitionDestinationFadeInCurve: "TransitionDestinationFadeInCurve";
        TransitionDestinationSound: "TransitionDestinationSound";
        TransitionFadeCurve: "TransitionDestinationFadeInCurve" | "TransitionFadeCurve" | "TransitionSourceFadeOutCurve";
        TransitionMarker: "TransitionMarker";
        TransitionRegion: "TransitionRegion";
        TransitionSourceFadeOutCurve: "TransitionSourceFadeOutCurve";
        TransitionSourceSound: "TransitionSourceSound";
        TransitionTimeline: "TransitionTimeline";
        TransitionTimelineOwner: "LoopRegion" | "TransitionMarker" | "TransitionRegion" | "TransitionTimelineOwner";
        TremoloEffect: "TremoloEffect";
        TriggerCondition: "EventCondition" | "ParameterCondition" | "TriggerCondition";
        Triggerable: "CommandSound" | "EventSound" | "LoopRegion" | "Module" | "MultiSound" | "PluginSound" | "ProgrammerSound" | "SilenceSound" | "SingleSound" | "SnapshotModule" | "Sound" | "SoundScatterer" | "SustainPoint" | "TransitionDestinationSound" | "TransitionMarker" | "TransitionRegion" | "TransitionSourceSound" | "Triggerable";
        UiMixerView: "UiMixerView";
        UserProperty: "UserProperty";
        Workspace: "Workspace";
        WorkspaceBasedSourceControlProvider: "NamedWorkspaceBasedSourceControlProvider" | "PerforceProvider" | "TfsProvider" | "WorkspaceBasedSourceControlProvider";
        WorkspaceChangelist: "WorkspaceChangelist";
        WorkspaceItem: "AudioTable" | "Bank" | "BankFolder" | "EffectPreset" | "EffectPresetFolder" | "Event" | "EventFolder" | "Folder" | "MasterBankFolder" | "MasterEffectPresetFolder" | "MasterEventFolder" | "MasterParameterPresetFolder" | "MasterSandboxFolder" | "MasterTagFolder" | "ParameterPreset" | "ParameterPresetFolder" | "ProfilerFolder" | "ProfilerSession" | "ProfilerSessionFolder" | "SandboxFolder" | "SandboxScene" | "Snapshot" | "SnapshotGroup" | "SnapshotList" | "Tag" | "TagFolder" | "WorkspaceItem";
    }
    type EntityRuntimeNameOf<TEntityName extends EntityName> = TEntityName extends keyof EntityRuntimeNameMap ? EntityRuntimeNameMap[TEntityName] : TEntityName;

    interface RuntimeEntityInterfaceMap {
        Asset: Record<string, any>;
        AudioFile: Record<string, any>;
        AudioTrack: Record<string, any>;
        AutomatableObject: Record<string, any>;
        AutomationCurve: Record<string, any>;
        Automator: Record<string, any>;
        Bank: Record<string, any>;
        ConvolutionReverbEffect: Record<string, any>;
        Event: Record<string, any>;
        Folder: Record<string, any>;
        GameParameter: Record<string, any>;
        GroupTrack: Record<string, any>;
        LoopRegion: Record<string, any>;
        MarkerTrack: Record<string, any>;
        MasterAssetFolder: StudioProjectWorkspaceMasterAssetFolder;
        MixerBus: Record<string, any>;
        MixerBusEffectChain: StudioProjectWorkspaceMixerMasterBusEffectChain;
        MixerGroup: Record<string, any>;
        MixerStrip: Record<string, any>;
        Module: Record<string, any>;
        Parameter: Record<string, any>;
        ParameterPreset: Record<string, any>;
        ParameterProxy: Record<string, any>;
        Sound: Record<string, any>;
        Timeline: Record<string, any>;
        TransitionMarker: Record<string, any>;
        TransitionRegion: Record<string, any>;
        Workspace: StudioProjectWorkspace;
    }
    interface FmodManagedObjectCore<TEntityName extends string, TEntityRuntimeName extends string = TEntityName> {
        readonly entity: TEntityRuntimeName;
        readonly id: string;
        readonly isValid: boolean;
        readonly properties: any;
        readonly relationships: any;
        document(): string;
        dump(): any;
        isOfType(entityName: string): boolean;
        isOfExactType(entityName: string): boolean;
    }
    type RuntimeInterfaceOf<TEntityName extends EntityName> = TEntityName extends keyof RuntimeEntityInterfaceMap ? RuntimeEntityInterfaceMap[TEntityName] : Record<string, any>;
    type ExtensionInterfaceOf<TEntityName extends EntityName> = TEntityName extends keyof EntityExtensionsMap ? EntityExtensionsMap[TEntityName] : {};
    type ModelDataOf<TEntityName extends EntityName> = TEntityName extends keyof ModelEntityDataMap ? ModelEntityDataMap[TEntityName] : Record<string, any>;
    type FmodEntityObject<TEntityName extends string> = TEntityName extends EntityName
        ? FmodExtensionObjectRef<TEntityName, EntityRuntimeNameOf<TEntityName>> & FmodManagedObjectCore<TEntityName, EntityRuntimeNameOf<TEntityName>> & RuntimeInterfaceOf<TEntityName> & ModelDataOf<TEntityName> & ExtensionInterfaceOf<TEntityName>
        : FmodExtensionObjectRef<TEntityName> & FmodManagedObjectCore<TEntityName>;
}

declare const fmodProjectExtensions: FMODProjectExtensions.EntityExtensionsMap;
type FmodEntityObject<TEntityName extends string> = FMODProjectExtensions.FmodEntityObject<TEntityName>;

/* Entity Runtime Name Enums (auto-generated from EntityRuntimeNameMap) */
type FmodAssetEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Asset"];

declare const enum FmodAssetEntity {
    Asset = "Asset",
    AudioFile = "AudioFile",
    DAWAsset = "DAWAsset",
    DAWProject = "DAWProject",
    DataFile = "DataFile",
    EncodableAsset = "EncodableAsset",
    MasterAssetFolder = "MasterAssetFolder",
}

type FmodAudioFileEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["AudioFile"];

declare const enum FmodAudioFileEntity {
    AudioFile = "AudioFile",
    DAWAsset = "DAWAsset",
}

type FmodAudioTrackEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["AudioTrack"];

declare const enum FmodAudioTrackEntity {
    AudioTrack = "AudioTrack",
    GroupTrack = "GroupTrack",
    MasterTrack = "MasterTrack",
    ProfilerSystemTrack = "ProfilerSystemTrack",
    ProfilerTrack = "ProfilerTrack",
    ReturnTrack = "ReturnTrack",
    SnapshotMasterTrack = "SnapshotMasterTrack",
    SnapshotTrack = "SnapshotTrack",
}

type FmodAutomatableObjectEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["AutomatableObject"];

declare const enum FmodAutomatableObjectEntity {
    ADSRModulator = "ADSRModulator",
    ActionSheet = "ActionSheet",
    AutomatableObject = "AutomatableObject",
    AutopitchModulator = "AutopitchModulator",
    BoolPluginParameter = "BoolPluginParameter",
    ChannelMixEffect = "ChannelMixEffect",
    ChorusEffect = "ChorusEffect",
    CommandSound = "CommandSound",
    CompressorEffect = "CompressorEffect",
    ConvolutionReverbEffect = "ConvolutionReverbEffect",
    DataPluginParameter = "DataPluginParameter",
    DelayEffect = "DelayEffect",
    DistortionEffect = "DistortionEffect",
    EffectChain = "EffectChain",
    EventAutomatableProperties = "EventAutomatableProperties",
    EventCondition = "EventCondition",
    EventMixerGroup = "EventMixerGroup",
    EventMixerMaster = "EventMixerMaster",
    EventMixerReturn = "EventMixerReturn",
    EventSound = "EventSound",
    FlangerEffect = "FlangerEffect",
    FloatPluginParameter = "FloatPluginParameter",
    GainEffect = "GainEffect",
    GameParameter = "GameParameter",
    HighpassEffect = "HighpassEffect",
    HighpassSimpleEffect = "HighpassSimpleEffect",
    ITEchoEffect = "ITEchoEffect",
    IntPluginParameter = "IntPluginParameter",
    LFOModulator = "LFOModulator",
    LimiterEffect = "LimiterEffect",
    LoopRegion = "LoopRegion",
    LoudnessMeter = "LoudnessMeter",
    LowpassEffect = "LowpassEffect",
    LowpassSimpleEffect = "LowpassSimpleEffect",
    Marker = "Marker",
    MixerBus = "MixerBus",
    MixerBusEffectChain = "MixerBusEffectChain",
    MixerBusFader = "MixerBusFader",
    MixerBusPanner = "MixerBusPanner",
    MixerEffect = "MixerEffect",
    MixerGroup = "MixerGroup",
    MixerInput = "MixerInput",
    MixerMaster = "MixerMaster",
    MixerPort = "MixerPort",
    MixerReturn = "MixerReturn",
    MixerSend = "MixerSend",
    MixerStrip = "MixerStrip",
    MixerVCA = "MixerVCA",
    Modulator = "Modulator",
    Module = "Module",
    MultiSound = "MultiSound",
    MultibandEqEffect = "MultibandEqEffect",
    NamedMarker = "NamedMarker",
    ObjectSpatialiserEffect = "ObjectSpatialiserEffect",
    PannerEffect = "PannerEffect",
    ParamEqEffect = "ParamEqEffect",
    Parameter = "Parameter",
    ParameterCondition = "ParameterCondition",
    ParameterProperty = "ParameterProperty",
    ParameterProxy = "ParameterProxy",
    PitchShifterEffect = "PitchShifterEffect",
    PluginEffect = "PluginEffect",
    PluginParameter = "PluginParameter",
    PluginSound = "PluginSound",
    ProfilerRecordingMarker = "ProfilerRecordingMarker",
    ProgrammerSound = "ProgrammerSound",
    ProxyEffect = "ProxyEffect",
    RandomizerModulator = "RandomizerModulator",
    Region = "Region",
    SFXReverbEffect = "SFXReverbEffect",
    Sidechain = "Sidechain",
    SidechainModulator = "SidechainModulator",
    SilenceSound = "SilenceSound",
    SingleSound = "SingleSound",
    SnapshotModule = "SnapshotModule",
    SnapshotProperty = "SnapshotProperty",
    Sound = "Sound",
    SoundScatterer = "SoundScatterer",
    SpatialEffect = "SpatialEffect",
    SpatialiserEffect = "SpatialiserEffect",
    SustainPoint = "SustainPoint",
    TempoMarker = "TempoMarker",
    ThreeEQEffect = "ThreeEQEffect",
    Timeline = "Timeline",
    TransceiverEffect = "TransceiverEffect",
    TransitionDestinationSound = "TransitionDestinationSound",
    TransitionMarker = "TransitionMarker",
    TransitionRegion = "TransitionRegion",
    TransitionSourceSound = "TransitionSourceSound",
    TransitionTimeline = "TransitionTimeline",
    TremoloEffect = "TremoloEffect",
    TriggerCondition = "TriggerCondition",
}

type FmodAutomationTrackEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["AutomationTrack"];

declare const enum FmodAutomationTrackEntity {
    AutomationTrack = "AutomationTrack",
    ProfilerGraph = "ProfilerGraph",
}

type FmodBankFolderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["BankFolder"];

declare const enum FmodBankFolderEntity {
    BankFolder = "BankFolder",
    MasterBankFolder = "MasterBankFolder",
}

type FmodColorableEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Colorable"];

declare const enum FmodColorableEntity {
    Asset = "Asset",
    AudioFile = "AudioFile",
    AudioTable = "AudioTable",
    Bank = "Bank",
    BankFolder = "BankFolder",
    Colorable = "Colorable",
    CommandSound = "CommandSound",
    DAWAsset = "DAWAsset",
    DAWProject = "DAWProject",
    DataFile = "DataFile",
    EffectPreset = "EffectPreset",
    EffectPresetFolder = "EffectPresetFolder",
    EncodableAsset = "EncodableAsset",
    Event = "Event",
    EventFolder = "EventFolder",
    EventMixerGroup = "EventMixerGroup",
    EventMixerMaster = "EventMixerMaster",
    EventMixerReturn = "EventMixerReturn",
    EventSound = "EventSound",
    Folder = "Folder",
    MasterAssetFolder = "MasterAssetFolder",
    MasterBankFolder = "MasterBankFolder",
    MasterEffectPresetFolder = "MasterEffectPresetFolder",
    MasterEventFolder = "MasterEventFolder",
    MasterParameterPresetFolder = "MasterParameterPresetFolder",
    MasterSandboxFolder = "MasterSandboxFolder",
    MasterTagFolder = "MasterTagFolder",
    MixerBus = "MixerBus",
    MixerGroup = "MixerGroup",
    MixerInput = "MixerInput",
    MixerMaster = "MixerMaster",
    MixerPort = "MixerPort",
    MixerReturn = "MixerReturn",
    MixerStrip = "MixerStrip",
    MixerVCA = "MixerVCA",
    Module = "Module",
    MultiSound = "MultiSound",
    ParameterPreset = "ParameterPreset",
    ParameterPresetFolder = "ParameterPresetFolder",
    PluginSound = "PluginSound",
    ProfilerFolder = "ProfilerFolder",
    ProfilerSession = "ProfilerSession",
    ProfilerSessionFolder = "ProfilerSessionFolder",
    ProgrammerSound = "ProgrammerSound",
    SandboxFolder = "SandboxFolder",
    SandboxScene = "SandboxScene",
    SilenceSound = "SilenceSound",
    SingleSound = "SingleSound",
    Snapshot = "Snapshot",
    SnapshotGroup = "SnapshotGroup",
    SnapshotList = "SnapshotList",
    SnapshotMasterTrack = "SnapshotMasterTrack",
    SnapshotModule = "SnapshotModule",
    Sound = "Sound",
    SoundScatterer = "SoundScatterer",
    Tag = "Tag",
    TagFolder = "TagFolder",
    TransitionDestinationSound = "TransitionDestinationSound",
    TransitionSourceSound = "TransitionSourceSound",
    WorkspaceItem = "WorkspaceItem",
}

type FmodCommandTargetEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["CommandTarget"];

declare const enum FmodCommandTargetEntity {
    CommandTarget = "CommandTarget",
    Event = "Event",
    GameParameter = "GameParameter",
    ProfilerSession = "ProfilerSession",
    SandboxScene = "SandboxScene",
    Snapshot = "Snapshot",
}

type FmodControlSurfaceEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["ControlSurface"];

declare const enum FmodControlSurfaceEntity {
    ControlSurface = "ControlSurface",
    MackieControlSurface = "MackieControlSurface",
    MackieExtendedControlSurface = "MackieExtendedControlSurface",
    SslNucleusControlSurface = "SslNucleusControlSurface",
    TouchOscControlSurface = "TouchOscControlSurface",
}

type FmodControlSurfaceProtocolEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["ControlSurfaceProtocol"];

declare const enum FmodControlSurfaceProtocolEntity {
    ControlSurfaceProtocol = "ControlSurfaceProtocol",
    MidiControlSurfaceProtocol = "MidiControlSurfaceProtocol",
    OscControlSurfaceProtocol = "OscControlSurfaceProtocol",
}

type FmodDataRefereeEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["DataReferee"];

declare const enum FmodDataRefereeEntity {
    ConvolutionReverbEffect = "ConvolutionReverbEffect",
    DataPluginParameter = "DataPluginParameter",
    DataReferee = "DataReferee",
}

type FmodEffectChainEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["EffectChain"];

declare const enum FmodEffectChainEntity {
    EffectChain = "EffectChain",
    MixerBusEffectChain = "MixerBusEffectChain",
}

type FmodEffectPresetFolderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["EffectPresetFolder"];

declare const enum FmodEffectPresetFolderEntity {
    EffectPresetFolder = "EffectPresetFolder",
    MasterEffectPresetFolder = "MasterEffectPresetFolder",
}

type FmodEncodableEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Encodable"];

declare const enum FmodEncodableEntity {
    AudioFile = "AudioFile",
    AudioTable = "AudioTable",
    DAWAsset = "DAWAsset",
    DAWProject = "DAWProject",
    Encodable = "Encodable",
    EncodableAsset = "EncodableAsset",
    MasterAssetFolder = "MasterAssetFolder",
    Platform = "Platform",
}

type FmodEncodableAssetEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["EncodableAsset"];

declare const enum FmodEncodableAssetEntity {
    AudioFile = "AudioFile",
    DAWAsset = "DAWAsset",
    DAWProject = "DAWProject",
    EncodableAsset = "EncodableAsset",
    MasterAssetFolder = "MasterAssetFolder",
}

type FmodEventEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Event"];

declare const enum FmodEventEntity {
    Event = "Event",
    ProfilerSession = "ProfilerSession",
    SandboxScene = "SandboxScene",
    Snapshot = "Snapshot",
}

type FmodEventFolderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["EventFolder"];

declare const enum FmodEventFolderEntity {
    EventFolder = "EventFolder",
    MasterEventFolder = "MasterEventFolder",
}

type FmodEventSoundEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["EventSound"];

declare const enum FmodEventSoundEntity {
    EventSound = "EventSound",
    SnapshotModule = "SnapshotModule",
}

type FmodFadeCurveEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["FadeCurve"];

declare const enum FmodFadeCurveEntity {
    FadeCurve = "FadeCurve",
    TransitionDestinationFadeInCurve = "TransitionDestinationFadeInCurve",
    TransitionFadeCurve = "TransitionFadeCurve",
    TransitionSourceFadeOutCurve = "TransitionSourceFadeOutCurve",
}

type FmodFolderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Folder"];

declare const enum FmodFolderEntity {
    BankFolder = "BankFolder",
    EffectPresetFolder = "EffectPresetFolder",
    Event = "Event",
    EventFolder = "EventFolder",
    Folder = "Folder",
    MasterBankFolder = "MasterBankFolder",
    MasterEffectPresetFolder = "MasterEffectPresetFolder",
    MasterEventFolder = "MasterEventFolder",
    MasterParameterPresetFolder = "MasterParameterPresetFolder",
    MasterSandboxFolder = "MasterSandboxFolder",
    MasterTagFolder = "MasterTagFolder",
    ParameterPresetFolder = "ParameterPresetFolder",
    ProfilerFolder = "ProfilerFolder",
    ProfilerSession = "ProfilerSession",
    ProfilerSessionFolder = "ProfilerSessionFolder",
    SandboxFolder = "SandboxFolder",
    SandboxScene = "SandboxScene",
    Snapshot = "Snapshot",
    SnapshotGroup = "SnapshotGroup",
    SnapshotList = "SnapshotList",
    TagFolder = "TagFolder",
}

type FmodGroupTrackEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["GroupTrack"];

declare const enum FmodGroupTrackEntity {
    GroupTrack = "GroupTrack",
    MasterTrack = "MasterTrack",
}

type FmodLoopableEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Loopable"];

declare const enum FmodLoopableEntity {
    Loopable = "Loopable",
    MultiSound = "MultiSound",
    ProgrammerSound = "ProgrammerSound",
    SilenceSound = "SilenceSound",
    SingleSound = "SingleSound",
}

type FmodManagedObjectEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["ManagedObject"];

declare const enum FmodManagedObjectEntity {
    ADSRModulator = "ADSRModulator",
    ActionSheet = "ActionSheet",
    Asset = "Asset",
    AudioFile = "AudioFile",
    AudioSettings = "AudioSettings",
    AudioTable = "AudioTable",
    AudioTrack = "AudioTrack",
    AutomatableObject = "AutomatableObject",
    AutomationCurve = "AutomationCurve",
    AutomationPoint = "AutomationPoint",
    AutomationTrack = "AutomationTrack",
    Automator = "Automator",
    AutopitchModulator = "AutopitchModulator",
    Bank = "Bank",
    BankFolder = "BankFolder",
    BoolPluginParameter = "BoolPluginParameter",
    ChannelMixEffect = "ChannelMixEffect",
    ChorusEffect = "ChorusEffect",
    Colorable = "Colorable",
    CommandSound = "CommandSound",
    CommandTarget = "CommandTarget",
    CompressorEffect = "CompressorEffect",
    ControlSurface = "ControlSurface",
    ControlSurfaceCustomBinding = "ControlSurfaceCustomBinding",
    ControlSurfaceCustomBindings = "ControlSurfaceCustomBindings",
    ControlSurfaceProtocol = "ControlSurfaceProtocol",
    ConvolutionReverbEffect = "ConvolutionReverbEffect",
    DAWAsset = "DAWAsset",
    DAWProject = "DAWProject",
    DataFile = "DataFile",
    DataPluginParameter = "DataPluginParameter",
    DataReferee = "DataReferee",
    DelayEffect = "DelayEffect",
    DistortionEffect = "DistortionEffect",
    EditorSettings = "EditorSettings",
    EffectChain = "EffectChain",
    EffectPreset = "EffectPreset",
    EffectPresetFolder = "EffectPresetFolder",
    Encodable = "Encodable",
    EncodableAsset = "EncodableAsset",
    EncodingSetting = "EncodingSetting",
    Event = "Event",
    EventAutomatableProperties = "EventAutomatableProperties",
    EventCondition = "EventCondition",
    EventFolder = "EventFolder",
    EventMixer = "EventMixer",
    EventMixerGroup = "EventMixerGroup",
    EventMixerMaster = "EventMixerMaster",
    EventMixerReturn = "EventMixerReturn",
    EventSound = "EventSound",
    FadeCurve = "FadeCurve",
    FlangerEffect = "FlangerEffect",
    FloatPluginParameter = "FloatPluginParameter",
    Folder = "Folder",
    GainEffect = "GainEffect",
    GameParameter = "GameParameter",
    GroupTrack = "GroupTrack",
    HighpassEffect = "HighpassEffect",
    HighpassSimpleEffect = "HighpassSimpleEffect",
    ITEchoEffect = "ITEchoEffect",
    IntPluginParameter = "IntPluginParameter",
    LFOModulator = "LFOModulator",
    LimiterEffect = "LimiterEffect",
    Locale = "Locale",
    LoopRegion = "LoopRegion",
    Loopable = "Loopable",
    LoudnessMeter = "LoudnessMeter",
    LowpassEffect = "LowpassEffect",
    LowpassSimpleEffect = "LowpassSimpleEffect",
    MackieControlSurface = "MackieControlSurface",
    MackieExtendedControlSurface = "MackieExtendedControlSurface",
    ManagedObject = "ManagedObject",
    Marker = "Marker",
    MarkerTrack = "MarkerTrack",
    MasterAssetFolder = "MasterAssetFolder",
    MasterBankFolder = "MasterBankFolder",
    MasterEffectPresetFolder = "MasterEffectPresetFolder",
    MasterEventFolder = "MasterEventFolder",
    MasterParameterPresetFolder = "MasterParameterPresetFolder",
    MasterSandboxFolder = "MasterSandboxFolder",
    MasterTagFolder = "MasterTagFolder",
    MasterTrack = "MasterTrack",
    MeteringSettings = "MeteringSettings",
    MidiControlSurfaceProtocol = "MidiControlSurfaceProtocol",
    Mixer = "Mixer",
    MixerBus = "MixerBus",
    MixerBusEffectChain = "MixerBusEffectChain",
    MixerBusFader = "MixerBusFader",
    MixerBusPanner = "MixerBusPanner",
    MixerEffect = "MixerEffect",
    MixerGroup = "MixerGroup",
    MixerInput = "MixerInput",
    MixerMaster = "MixerMaster",
    MixerPort = "MixerPort",
    MixerReturn = "MixerReturn",
    MixerSend = "MixerSend",
    MixerStrip = "MixerStrip",
    MixerVCA = "MixerVCA",
    Modulator = "Modulator",
    Module = "Module",
    MultiSound = "MultiSound",
    MultibandEqEffect = "MultibandEqEffect",
    NamedMarker = "NamedMarker",
    NamedWorkspaceBasedSourceControlProvider = "NamedWorkspaceBasedSourceControlProvider",
    Notable = "Notable",
    ObjectSpatialiserEffect = "ObjectSpatialiserEffect",
    OscControlSurfaceProtocol = "OscControlSurfaceProtocol",
    PannerEffect = "PannerEffect",
    ParamEqEffect = "ParamEqEffect",
    Parameter = "Parameter",
    ParameterCondition = "ParameterCondition",
    ParameterPreset = "ParameterPreset",
    ParameterPresetFolder = "ParameterPresetFolder",
    ParameterProperty = "ParameterProperty",
    ParameterPrototype = "ParameterPrototype",
    ParameterProxy = "ParameterProxy",
    PerforceProvider = "PerforceProvider",
    PitchShifterEffect = "PitchShifterEffect",
    Platform = "Platform",
    PlatformSpecificItem = "PlatformSpecificItem",
    PlayPercentage = "PlayPercentage",
    Plugin = "Plugin",
    PluginEffect = "PluginEffect",
    PluginOwner = "PluginOwner",
    PluginParameter = "PluginParameter",
    PluginSettings = "PluginSettings",
    PluginSound = "PluginSound",
    ProfilerFolder = "ProfilerFolder",
    ProfilerGraph = "ProfilerGraph",
    ProfilerGraphable = "ProfilerGraphable",
    ProfilerRecordingMarker = "ProfilerRecordingMarker",
    ProfilerSession = "ProfilerSession",
    ProfilerSessionFolder = "ProfilerSessionFolder",
    ProfilerSystemTrack = "ProfilerSystemTrack",
    ProfilerTrack = "ProfilerTrack",
    ProfilerTrackable = "ProfilerTrackable",
    ProgrammerSound = "ProgrammerSound",
    ProgrammerSoundPlaceholder = "ProgrammerSoundPlaceholder",
    ProjectSettings = "ProjectSettings",
    ProxyEffect = "ProxyEffect",
    Quantizable = "Quantizable",
    RandomizerModulator = "RandomizerModulator",
    ReferenceableData = "ReferenceableData",
    Region = "Region",
    ReturnTrack = "ReturnTrack",
    SFXReverbEffect = "SFXReverbEffect",
    SandboxEmitter = "SandboxEmitter",
    SandboxFolder = "SandboxFolder",
    SandboxListener = "SandboxListener",
    SandboxParameter = "SandboxParameter",
    SandboxParameterOwner = "SandboxParameterOwner",
    SandboxPositionable = "SandboxPositionable",
    SandboxScene = "SandboxScene",
    ScriptBasedProvider = "ScriptBasedProvider",
    Selectable = "Selectable",
    Selector = "Selector",
    Sidechain = "Sidechain",
    SidechainModulator = "SidechainModulator",
    SidechainTarget = "SidechainTarget",
    SilenceSound = "SilenceSound",
    SingleSound = "SingleSound",
    Snapshot = "Snapshot",
    SnapshotGroup = "SnapshotGroup",
    SnapshotList = "SnapshotList",
    SnapshotMasterTrack = "SnapshotMasterTrack",
    SnapshotModule = "SnapshotModule",
    SnapshotProperty = "SnapshotProperty",
    SnapshotTrack = "SnapshotTrack",
    Sound = "Sound",
    SoundScatterer = "SoundScatterer",
    SourceControlProvider = "SourceControlProvider",
    SpatialEffect = "SpatialEffect",
    SpatialiserEffect = "SpatialiserEffect",
    SslNucleusControlSurface = "SslNucleusControlSurface",
    SustainPoint = "SustainPoint",
    Tag = "Tag",
    TagFolder = "TagFolder",
    Taggable = "Taggable",
    TempoMarker = "TempoMarker",
    TfsProvider = "TfsProvider",
    ThreeEQEffect = "ThreeEQEffect",
    Timeline = "Timeline",
    TouchOscControlSurface = "TouchOscControlSurface",
    Track = "Track",
    TransceiverEffect = "TransceiverEffect",
    TransitionDestination = "TransitionDestination",
    TransitionDestinationFadeInCurve = "TransitionDestinationFadeInCurve",
    TransitionDestinationSound = "TransitionDestinationSound",
    TransitionFadeCurve = "TransitionFadeCurve",
    TransitionMarker = "TransitionMarker",
    TransitionRegion = "TransitionRegion",
    TransitionSourceFadeOutCurve = "TransitionSourceFadeOutCurve",
    TransitionSourceSound = "TransitionSourceSound",
    TransitionTimeline = "TransitionTimeline",
    TransitionTimelineOwner = "TransitionTimelineOwner",
    TremoloEffect = "TremoloEffect",
    TriggerCondition = "TriggerCondition",
    Triggerable = "Triggerable",
    UiMixerView = "UiMixerView",
    UserProperty = "UserProperty",
    Workspace = "Workspace",
    WorkspaceBasedSourceControlProvider = "WorkspaceBasedSourceControlProvider",
    WorkspaceChangelist = "WorkspaceChangelist",
    WorkspaceItem = "WorkspaceItem",
}

type FmodMarkerEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Marker"];

declare const enum FmodMarkerEntity {
    LoopRegion = "LoopRegion",
    Marker = "Marker",
    NamedMarker = "NamedMarker",
    ProfilerRecordingMarker = "ProfilerRecordingMarker",
    Region = "Region",
    SustainPoint = "SustainPoint",
    TempoMarker = "TempoMarker",
    TransitionMarker = "TransitionMarker",
    TransitionRegion = "TransitionRegion",
}

type FmodMixerEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Mixer"];

declare const enum FmodMixerEntity {
    EventMixer = "EventMixer",
    Mixer = "Mixer",
}

type FmodMixerBusEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["MixerBus"];

declare const enum FmodMixerBusEntity {
    EventMixerGroup = "EventMixerGroup",
    EventMixerMaster = "EventMixerMaster",
    EventMixerReturn = "EventMixerReturn",
    MixerBus = "MixerBus",
    MixerGroup = "MixerGroup",
    MixerInput = "MixerInput",
    MixerMaster = "MixerMaster",
    MixerPort = "MixerPort",
    MixerReturn = "MixerReturn",
}

type FmodMixerEffectEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["MixerEffect"];

declare const enum FmodMixerEffectEntity {
    ChannelMixEffect = "ChannelMixEffect",
    ChorusEffect = "ChorusEffect",
    CompressorEffect = "CompressorEffect",
    ConvolutionReverbEffect = "ConvolutionReverbEffect",
    DelayEffect = "DelayEffect",
    DistortionEffect = "DistortionEffect",
    EffectChain = "EffectChain",
    FlangerEffect = "FlangerEffect",
    GainEffect = "GainEffect",
    HighpassEffect = "HighpassEffect",
    HighpassSimpleEffect = "HighpassSimpleEffect",
    ITEchoEffect = "ITEchoEffect",
    LimiterEffect = "LimiterEffect",
    LoudnessMeter = "LoudnessMeter",
    LowpassEffect = "LowpassEffect",
    LowpassSimpleEffect = "LowpassSimpleEffect",
    MixerBusEffectChain = "MixerBusEffectChain",
    MixerBusFader = "MixerBusFader",
    MixerBusPanner = "MixerBusPanner",
    MixerEffect = "MixerEffect",
    MixerSend = "MixerSend",
    MultibandEqEffect = "MultibandEqEffect",
    ObjectSpatialiserEffect = "ObjectSpatialiserEffect",
    PannerEffect = "PannerEffect",
    ParamEqEffect = "ParamEqEffect",
    PitchShifterEffect = "PitchShifterEffect",
    PluginEffect = "PluginEffect",
    ProxyEffect = "ProxyEffect",
    SFXReverbEffect = "SFXReverbEffect",
    Sidechain = "Sidechain",
    SpatialEffect = "SpatialEffect",
    SpatialiserEffect = "SpatialiserEffect",
    ThreeEQEffect = "ThreeEQEffect",
    TransceiverEffect = "TransceiverEffect",
    TremoloEffect = "TremoloEffect",
}

type FmodMixerGroupEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["MixerGroup"];

declare const enum FmodMixerGroupEntity {
    EventMixerGroup = "EventMixerGroup",
    EventMixerMaster = "EventMixerMaster",
    MixerGroup = "MixerGroup",
    MixerMaster = "MixerMaster",
    MixerPort = "MixerPort",
}

type FmodMixerMasterEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["MixerMaster"];

declare const enum FmodMixerMasterEntity {
    EventMixerMaster = "EventMixerMaster",
    MixerMaster = "MixerMaster",
}

type FmodMixerReturnEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["MixerReturn"];

declare const enum FmodMixerReturnEntity {
    EventMixerReturn = "EventMixerReturn",
    MixerReturn = "MixerReturn",
}

type FmodMixerStripEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["MixerStrip"];

declare const enum FmodMixerStripEntity {
    EventMixerGroup = "EventMixerGroup",
    EventMixerMaster = "EventMixerMaster",
    EventMixerReturn = "EventMixerReturn",
    MixerBus = "MixerBus",
    MixerGroup = "MixerGroup",
    MixerInput = "MixerInput",
    MixerMaster = "MixerMaster",
    MixerPort = "MixerPort",
    MixerReturn = "MixerReturn",
    MixerStrip = "MixerStrip",
    MixerVCA = "MixerVCA",
}

type FmodModulatorEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Modulator"];

declare const enum FmodModulatorEntity {
    ADSRModulator = "ADSRModulator",
    AutopitchModulator = "AutopitchModulator",
    LFOModulator = "LFOModulator",
    Modulator = "Modulator",
    RandomizerModulator = "RandomizerModulator",
    SidechainModulator = "SidechainModulator",
}

type FmodModuleEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Module"];

declare const enum FmodModuleEntity {
    CommandSound = "CommandSound",
    EventSound = "EventSound",
    Module = "Module",
    MultiSound = "MultiSound",
    PluginSound = "PluginSound",
    ProgrammerSound = "ProgrammerSound",
    SilenceSound = "SilenceSound",
    SingleSound = "SingleSound",
    SnapshotModule = "SnapshotModule",
    Sound = "Sound",
    SoundScatterer = "SoundScatterer",
    TransitionDestinationSound = "TransitionDestinationSound",
    TransitionSourceSound = "TransitionSourceSound",
}

type FmodNamedMarkerEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["NamedMarker"];

declare const enum FmodNamedMarkerEntity {
    NamedMarker = "NamedMarker",
    ProfilerRecordingMarker = "ProfilerRecordingMarker",
}

type FmodNamedWorkspaceBasedSourceControlProviderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["NamedWorkspaceBasedSourceControlProvider"];

declare const enum FmodNamedWorkspaceBasedSourceControlProviderEntity {
    NamedWorkspaceBasedSourceControlProvider = "NamedWorkspaceBasedSourceControlProvider",
    PerforceProvider = "PerforceProvider",
    TfsProvider = "TfsProvider",
}

type FmodNotableEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Notable"];

declare const enum FmodNotableEntity {
    Asset = "Asset",
    AudioFile = "AudioFile",
    AudioTable = "AudioTable",
    Bank = "Bank",
    BankFolder = "BankFolder",
    DAWAsset = "DAWAsset",
    DAWProject = "DAWProject",
    DataFile = "DataFile",
    EffectPreset = "EffectPreset",
    EffectPresetFolder = "EffectPresetFolder",
    EncodableAsset = "EncodableAsset",
    Event = "Event",
    EventFolder = "EventFolder",
    EventMixerGroup = "EventMixerGroup",
    EventMixerMaster = "EventMixerMaster",
    EventMixerReturn = "EventMixerReturn",
    Folder = "Folder",
    MasterAssetFolder = "MasterAssetFolder",
    MasterBankFolder = "MasterBankFolder",
    MasterEffectPresetFolder = "MasterEffectPresetFolder",
    MasterEventFolder = "MasterEventFolder",
    MasterParameterPresetFolder = "MasterParameterPresetFolder",
    MasterSandboxFolder = "MasterSandboxFolder",
    MasterTagFolder = "MasterTagFolder",
    MixerBus = "MixerBus",
    MixerGroup = "MixerGroup",
    MixerInput = "MixerInput",
    MixerMaster = "MixerMaster",
    MixerPort = "MixerPort",
    MixerReturn = "MixerReturn",
    MixerStrip = "MixerStrip",
    MixerVCA = "MixerVCA",
    Notable = "Notable",
    ParameterPreset = "ParameterPreset",
    ParameterPresetFolder = "ParameterPresetFolder",
    ProfilerFolder = "ProfilerFolder",
    ProfilerSession = "ProfilerSession",
    ProfilerSessionFolder = "ProfilerSessionFolder",
    SandboxFolder = "SandboxFolder",
    SandboxScene = "SandboxScene",
    Snapshot = "Snapshot",
    SnapshotGroup = "SnapshotGroup",
    SnapshotList = "SnapshotList",
    Tag = "Tag",
    TagFolder = "TagFolder",
    WorkspaceItem = "WorkspaceItem",
}

type FmodPannerEffectEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["PannerEffect"];

declare const enum FmodPannerEffectEntity {
    MixerBusPanner = "MixerBusPanner",
    PannerEffect = "PannerEffect",
}

type FmodParameterEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Parameter"];

declare const enum FmodParameterEntity {
    ActionSheet = "ActionSheet",
    Parameter = "Parameter",
    ParameterProxy = "ParameterProxy",
    Timeline = "Timeline",
    TransitionTimeline = "TransitionTimeline",
}

type FmodParameterPresetFolderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["ParameterPresetFolder"];

declare const enum FmodParameterPresetFolderEntity {
    MasterParameterPresetFolder = "MasterParameterPresetFolder",
    ParameterPresetFolder = "ParameterPresetFolder",
}

type FmodParameterPrototypeEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["ParameterPrototype"];

declare const enum FmodParameterPrototypeEntity {
    GameParameter = "GameParameter",
    ParameterPrototype = "ParameterPrototype",
    Timeline = "Timeline",
    TransitionTimeline = "TransitionTimeline",
}

type FmodPlatformSpecificItemEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["PlatformSpecificItem"];

declare const enum FmodPlatformSpecificItemEntity {
    ChannelMixEffect = "ChannelMixEffect",
    ChorusEffect = "ChorusEffect",
    CompressorEffect = "CompressorEffect",
    ConvolutionReverbEffect = "ConvolutionReverbEffect",
    DelayEffect = "DelayEffect",
    DistortionEffect = "DistortionEffect",
    EffectChain = "EffectChain",
    FlangerEffect = "FlangerEffect",
    GainEffect = "GainEffect",
    GroupTrack = "GroupTrack",
    HighpassEffect = "HighpassEffect",
    HighpassSimpleEffect = "HighpassSimpleEffect",
    ITEchoEffect = "ITEchoEffect",
    LimiterEffect = "LimiterEffect",
    LoudnessMeter = "LoudnessMeter",
    LowpassEffect = "LowpassEffect",
    LowpassSimpleEffect = "LowpassSimpleEffect",
    MasterTrack = "MasterTrack",
    MixerBusEffectChain = "MixerBusEffectChain",
    MixerBusFader = "MixerBusFader",
    MixerBusPanner = "MixerBusPanner",
    MixerEffect = "MixerEffect",
    MixerSend = "MixerSend",
    MultibandEqEffect = "MultibandEqEffect",
    ObjectSpatialiserEffect = "ObjectSpatialiserEffect",
    PannerEffect = "PannerEffect",
    ParamEqEffect = "ParamEqEffect",
    PitchShifterEffect = "PitchShifterEffect",
    PlatformSpecificItem = "PlatformSpecificItem",
    PluginEffect = "PluginEffect",
    ProxyEffect = "ProxyEffect",
    ReturnTrack = "ReturnTrack",
    SFXReverbEffect = "SFXReverbEffect",
    Sidechain = "Sidechain",
    SpatialEffect = "SpatialEffect",
    SpatialiserEffect = "SpatialiserEffect",
    ThreeEQEffect = "ThreeEQEffect",
    TransceiverEffect = "TransceiverEffect",
    TremoloEffect = "TremoloEffect",
}

type FmodPluginOwnerEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["PluginOwner"];

declare const enum FmodPluginOwnerEntity {
    PluginEffect = "PluginEffect",
    PluginOwner = "PluginOwner",
    PluginSound = "PluginSound",
}

type FmodPluginParameterEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["PluginParameter"];

declare const enum FmodPluginParameterEntity {
    BoolPluginParameter = "BoolPluginParameter",
    DataPluginParameter = "DataPluginParameter",
    FloatPluginParameter = "FloatPluginParameter",
    IntPluginParameter = "IntPluginParameter",
    PluginParameter = "PluginParameter",
}

type FmodProfilerFolderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["ProfilerFolder"];

declare const enum FmodProfilerFolderEntity {
    ProfilerFolder = "ProfilerFolder",
    ProfilerSessionFolder = "ProfilerSessionFolder",
}

type FmodProfilerGraphableEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["ProfilerGraphable"];

declare const enum FmodProfilerGraphableEntity {
    Event = "Event",
    EventMixerGroup = "EventMixerGroup",
    EventMixerMaster = "EventMixerMaster",
    EventMixerReturn = "EventMixerReturn",
    GameParameter = "GameParameter",
    MixerBus = "MixerBus",
    MixerGroup = "MixerGroup",
    MixerInput = "MixerInput",
    MixerMaster = "MixerMaster",
    MixerPort = "MixerPort",
    MixerReturn = "MixerReturn",
    MixerStrip = "MixerStrip",
    MixerVCA = "MixerVCA",
    ProfilerGraphable = "ProfilerGraphable",
    ProfilerSession = "ProfilerSession",
    SandboxScene = "SandboxScene",
    Snapshot = "Snapshot",
}

type FmodProfilerTrackEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["ProfilerTrack"];

declare const enum FmodProfilerTrackEntity {
    ProfilerSystemTrack = "ProfilerSystemTrack",
    ProfilerTrack = "ProfilerTrack",
}

type FmodProfilerTrackableEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["ProfilerTrackable"];

declare const enum FmodProfilerTrackableEntity {
    Event = "Event",
    EventMixerGroup = "EventMixerGroup",
    EventMixerMaster = "EventMixerMaster",
    EventMixerReturn = "EventMixerReturn",
    MixerBus = "MixerBus",
    MixerGroup = "MixerGroup",
    MixerInput = "MixerInput",
    MixerMaster = "MixerMaster",
    MixerPort = "MixerPort",
    MixerReturn = "MixerReturn",
    MixerStrip = "MixerStrip",
    MixerVCA = "MixerVCA",
    ProfilerSession = "ProfilerSession",
    ProfilerTrackable = "ProfilerTrackable",
    SandboxScene = "SandboxScene",
    Snapshot = "Snapshot",
}

type FmodProgrammerSoundPlaceholderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["ProgrammerSoundPlaceholder"];

declare const enum FmodProgrammerSoundPlaceholderEntity {
    AudioFile = "AudioFile",
    AudioTable = "AudioTable",
    DAWAsset = "DAWAsset",
    ProgrammerSoundPlaceholder = "ProgrammerSoundPlaceholder",
}

type FmodQuantizableEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Quantizable"];

declare const enum FmodQuantizableEntity {
    LoopRegion = "LoopRegion",
    Quantizable = "Quantizable",
    TransitionRegion = "TransitionRegion",
}

type FmodReferenceableDataEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["ReferenceableData"];

declare const enum FmodReferenceableDataEntity {
    AudioFile = "AudioFile",
    DAWAsset = "DAWAsset",
    DataFile = "DataFile",
    ReferenceableData = "ReferenceableData",
}

type FmodRegionEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Region"];

declare const enum FmodRegionEntity {
    LoopRegion = "LoopRegion",
    Region = "Region",
    TransitionRegion = "TransitionRegion",
}

type FmodSandboxFolderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["SandboxFolder"];

declare const enum FmodSandboxFolderEntity {
    MasterSandboxFolder = "MasterSandboxFolder",
    SandboxFolder = "SandboxFolder",
}

type FmodSandboxParameterOwnerEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["SandboxParameterOwner"];

declare const enum FmodSandboxParameterOwnerEntity {
    SandboxEmitter = "SandboxEmitter",
    SandboxParameterOwner = "SandboxParameterOwner",
    SandboxScene = "SandboxScene",
}

type FmodSandboxPositionableEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["SandboxPositionable"];

declare const enum FmodSandboxPositionableEntity {
    SandboxEmitter = "SandboxEmitter",
    SandboxListener = "SandboxListener",
    SandboxPositionable = "SandboxPositionable",
}

type FmodSelectableEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Selectable"];

declare const enum FmodSelectableEntity {
    AudioTrack = "AudioTrack",
    AutomationPoint = "AutomationPoint",
    AutomationTrack = "AutomationTrack",
    CommandSound = "CommandSound",
    EventMixerGroup = "EventMixerGroup",
    EventMixerMaster = "EventMixerMaster",
    EventMixerReturn = "EventMixerReturn",
    EventSound = "EventSound",
    GameParameter = "GameParameter",
    GroupTrack = "GroupTrack",
    LoopRegion = "LoopRegion",
    Marker = "Marker",
    MarkerTrack = "MarkerTrack",
    MasterTrack = "MasterTrack",
    Module = "Module",
    MultiSound = "MultiSound",
    NamedMarker = "NamedMarker",
    ParameterProxy = "ParameterProxy",
    PluginSound = "PluginSound",
    ProfilerGraph = "ProfilerGraph",
    ProfilerRecordingMarker = "ProfilerRecordingMarker",
    ProfilerSystemTrack = "ProfilerSystemTrack",
    ProfilerTrack = "ProfilerTrack",
    ProgrammerSound = "ProgrammerSound",
    Region = "Region",
    ReturnTrack = "ReturnTrack",
    SandboxEmitter = "SandboxEmitter",
    SandboxListener = "SandboxListener",
    SandboxPositionable = "SandboxPositionable",
    Selectable = "Selectable",
    SilenceSound = "SilenceSound",
    SingleSound = "SingleSound",
    SnapshotMasterTrack = "SnapshotMasterTrack",
    SnapshotModule = "SnapshotModule",
    SnapshotTrack = "SnapshotTrack",
    Sound = "Sound",
    SoundScatterer = "SoundScatterer",
    SustainPoint = "SustainPoint",
    TempoMarker = "TempoMarker",
    Track = "Track",
    TransitionDestinationSound = "TransitionDestinationSound",
    TransitionMarker = "TransitionMarker",
    TransitionRegion = "TransitionRegion",
    TransitionSourceSound = "TransitionSourceSound",
}

type FmodSelectorEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Selector"];

declare const enum FmodSelectorEntity {
    Event = "Event",
    MultiSound = "MultiSound",
    ProfilerSession = "ProfilerSession",
    SandboxScene = "SandboxScene",
    Selector = "Selector",
    Snapshot = "Snapshot",
}

type FmodSidechainTargetEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["SidechainTarget"];

declare const enum FmodSidechainTargetEntity {
    CompressorEffect = "CompressorEffect",
    PluginEffect = "PluginEffect",
    SidechainModulator = "SidechainModulator",
    SidechainTarget = "SidechainTarget",
}

type FmodSnapshotGroupEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["SnapshotGroup"];

declare const enum FmodSnapshotGroupEntity {
    SnapshotGroup = "SnapshotGroup",
    SnapshotList = "SnapshotList",
}

type FmodSoundEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Sound"];

declare const enum FmodSoundEntity {
    CommandSound = "CommandSound",
    EventSound = "EventSound",
    MultiSound = "MultiSound",
    PluginSound = "PluginSound",
    ProgrammerSound = "ProgrammerSound",
    SilenceSound = "SilenceSound",
    SingleSound = "SingleSound",
    SnapshotModule = "SnapshotModule",
    Sound = "Sound",
    SoundScatterer = "SoundScatterer",
}

type FmodSourceControlProviderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["SourceControlProvider"];

declare const enum FmodSourceControlProviderEntity {
    NamedWorkspaceBasedSourceControlProvider = "NamedWorkspaceBasedSourceControlProvider",
    PerforceProvider = "PerforceProvider",
    ScriptBasedProvider = "ScriptBasedProvider",
    SourceControlProvider = "SourceControlProvider",
    TfsProvider = "TfsProvider",
    WorkspaceBasedSourceControlProvider = "WorkspaceBasedSourceControlProvider",
}

type FmodSpatialEffectEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["SpatialEffect"];

declare const enum FmodSpatialEffectEntity {
    ObjectSpatialiserEffect = "ObjectSpatialiserEffect",
    SpatialEffect = "SpatialEffect",
    SpatialiserEffect = "SpatialiserEffect",
}

type FmodTagFolderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["TagFolder"];

declare const enum FmodTagFolderEntity {
    MasterTagFolder = "MasterTagFolder",
    TagFolder = "TagFolder",
}

type FmodTaggableEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Taggable"];

declare const enum FmodTaggableEntity {
    Event = "Event",
    ProfilerSession = "ProfilerSession",
    SandboxScene = "SandboxScene",
    Snapshot = "Snapshot",
    Taggable = "Taggable",
}

type FmodTimelineEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Timeline"];

declare const enum FmodTimelineEntity {
    Timeline = "Timeline",
    TransitionTimeline = "TransitionTimeline",
}

type FmodTrackEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Track"];

declare const enum FmodTrackEntity {
    AudioTrack = "AudioTrack",
    AutomationTrack = "AutomationTrack",
    GroupTrack = "GroupTrack",
    MarkerTrack = "MarkerTrack",
    MasterTrack = "MasterTrack",
    ProfilerGraph = "ProfilerGraph",
    ProfilerSystemTrack = "ProfilerSystemTrack",
    ProfilerTrack = "ProfilerTrack",
    ReturnTrack = "ReturnTrack",
    SnapshotMasterTrack = "SnapshotMasterTrack",
    SnapshotTrack = "SnapshotTrack",
    Track = "Track",
}

type FmodTransitionDestinationEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["TransitionDestination"];

declare const enum FmodTransitionDestinationEntity {
    LoopRegion = "LoopRegion",
    NamedMarker = "NamedMarker",
    ProfilerRecordingMarker = "ProfilerRecordingMarker",
    TransitionDestination = "TransitionDestination",
}

type FmodTransitionFadeCurveEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["TransitionFadeCurve"];

declare const enum FmodTransitionFadeCurveEntity {
    TransitionDestinationFadeInCurve = "TransitionDestinationFadeInCurve",
    TransitionFadeCurve = "TransitionFadeCurve",
    TransitionSourceFadeOutCurve = "TransitionSourceFadeOutCurve",
}

type FmodTransitionTimelineOwnerEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["TransitionTimelineOwner"];

declare const enum FmodTransitionTimelineOwnerEntity {
    LoopRegion = "LoopRegion",
    TransitionMarker = "TransitionMarker",
    TransitionRegion = "TransitionRegion",
    TransitionTimelineOwner = "TransitionTimelineOwner",
}

type FmodTriggerConditionEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["TriggerCondition"];

declare const enum FmodTriggerConditionEntity {
    EventCondition = "EventCondition",
    ParameterCondition = "ParameterCondition",
    TriggerCondition = "TriggerCondition",
}

type FmodTriggerableEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["Triggerable"];

declare const enum FmodTriggerableEntity {
    CommandSound = "CommandSound",
    EventSound = "EventSound",
    LoopRegion = "LoopRegion",
    Module = "Module",
    MultiSound = "MultiSound",
    PluginSound = "PluginSound",
    ProgrammerSound = "ProgrammerSound",
    SilenceSound = "SilenceSound",
    SingleSound = "SingleSound",
    SnapshotModule = "SnapshotModule",
    Sound = "Sound",
    SoundScatterer = "SoundScatterer",
    SustainPoint = "SustainPoint",
    TransitionDestinationSound = "TransitionDestinationSound",
    TransitionMarker = "TransitionMarker",
    TransitionRegion = "TransitionRegion",
    TransitionSourceSound = "TransitionSourceSound",
    Triggerable = "Triggerable",
}

type FmodWorkspaceBasedSourceControlProviderEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["WorkspaceBasedSourceControlProvider"];

declare const enum FmodWorkspaceBasedSourceControlProviderEntity {
    NamedWorkspaceBasedSourceControlProvider = "NamedWorkspaceBasedSourceControlProvider",
    PerforceProvider = "PerforceProvider",
    TfsProvider = "TfsProvider",
    WorkspaceBasedSourceControlProvider = "WorkspaceBasedSourceControlProvider",
}

type FmodWorkspaceItemEntityValue = FMODProjectExtensions.EntityRuntimeNameMap["WorkspaceItem"];

declare const enum FmodWorkspaceItemEntity {
    AudioTable = "AudioTable",
    Bank = "Bank",
    BankFolder = "BankFolder",
    EffectPreset = "EffectPreset",
    EffectPresetFolder = "EffectPresetFolder",
    Event = "Event",
    EventFolder = "EventFolder",
    Folder = "Folder",
    MasterBankFolder = "MasterBankFolder",
    MasterEffectPresetFolder = "MasterEffectPresetFolder",
    MasterEventFolder = "MasterEventFolder",
    MasterParameterPresetFolder = "MasterParameterPresetFolder",
    MasterSandboxFolder = "MasterSandboxFolder",
    MasterTagFolder = "MasterTagFolder",
    ParameterPreset = "ParameterPreset",
    ParameterPresetFolder = "ParameterPresetFolder",
    ProfilerFolder = "ProfilerFolder",
    ProfilerSession = "ProfilerSession",
    ProfilerSessionFolder = "ProfilerSessionFolder",
    SandboxFolder = "SandboxFolder",
    SandboxScene = "SandboxScene",
    Snapshot = "Snapshot",
    SnapshotGroup = "SnapshotGroup",
    SnapshotList = "SnapshotList",
    Tag = "Tag",
    TagFolder = "TagFolder",
    WorkspaceItem = "WorkspaceItem",
}

/* Host Interface Augmentation (safe, path-based) */
interface StudioProjectManagedObject_extensionsAsset extends FMODProjectExtensions.AssetExtensions {}
interface StudioProjectManagedObject_extensionsAudioFile extends FMODProjectExtensions.AudioFileExtensions {}
interface StudioProjectManagedObject_extensionsAudioTrack extends FMODProjectExtensions.AudioTrackExtensions {}
interface StudioProjectManagedObject_extensionsAutomatableObject extends FMODProjectExtensions.AutomatableObjectExtensions {}
interface StudioProjectManagedObject_extensionsAutomationCurve extends FMODProjectExtensions.AutomationCurveExtensions {}
interface StudioProjectManagedObject_extensionsAutomator extends FMODProjectExtensions.AutomatorExtensions {}
interface StudioProjectManagedObject_extensionsBank extends FMODProjectExtensions.BankExtensions {}
interface StudioProjectManagedObject_extensionsConvolutionReverbEffect extends FMODProjectExtensions.ConvolutionReverbEffectExtensions {}
interface StudioProjectManagedObject_extensionsEvent extends FMODProjectExtensions.EventExtensions {}
interface StudioProjectManagedObject_extensionsEvent__proto__ extends FMODProjectExtensions.FolderExtensions {}
interface StudioProjectManagedObject_extensionsGameParameter extends FMODProjectExtensions.GameParameterExtensions {}
interface StudioProjectManagedObject_extensionsGroupTrack extends FMODProjectExtensions.GroupTrackExtensions {}
interface StudioProjectManagedObject_extensionsLoopRegion extends FMODProjectExtensions.LoopRegionExtensions {}
interface StudioProjectManagedObject_extensionsMarkerTrack extends FMODProjectExtensions.MarkerTrackExtensions {}
interface StudioProjectManagedObject_extensionsMasterAssetFolder extends FMODProjectExtensions.MasterAssetFolderExtensions {}
interface StudioProjectManagedObject_extensionsMixerBus extends FMODProjectExtensions.MixerBusExtensions {}
interface StudioProjectManagedObject_extensionsMixerBusEffectChain extends FMODProjectExtensions.MixerBusEffectChainExtensions {}
interface StudioProjectManagedObject_extensionsMixerGroup extends FMODProjectExtensions.MixerGroupExtensions {}
interface StudioProjectManagedObject_extensionsMixerStrip extends FMODProjectExtensions.MixerStripExtensions {}
interface StudioProjectManagedObject_extensionsSound__proto__ extends FMODProjectExtensions.ModuleExtensions {}
interface StudioProjectManagedObject_extensionsParameter extends FMODProjectExtensions.ParameterExtensions {}
interface StudioProjectManagedObject_extensionsParameterPreset extends FMODProjectExtensions.ParameterPresetExtensions {}
interface StudioProjectManagedObject_extensionsParameterProxy extends FMODProjectExtensions.ParameterProxyExtensions {}
interface StudioProjectManagedObject_extensionsSound extends FMODProjectExtensions.SoundExtensions {}
interface StudioProjectManagedObject_extensionsTimeline extends FMODProjectExtensions.TimelineExtensions {}
interface StudioProjectManagedObject_extensionsTransitionMarker extends FMODProjectExtensions.TransitionMarkerExtensions {}
interface StudioProjectManagedObject_extensionsTransitionRegion extends FMODProjectExtensions.TransitionRegionExtensions {}
interface StudioProjectManagedObject_extensionsWorkspace extends FMODProjectExtensions.WorkspaceExtensions {}

/* Runtime Instance Interface Augmentation (entity-literal based) */
interface StudioProjectWorkspaceMasterAssetFolder extends FMODProjectExtensions.MasterAssetFolderExtensions {}
interface StudioProjectWorkspaceMixerMasterBusEffectChain extends FMODProjectExtensions.MixerBusEffectChainExtensions {}
interface StudioProjectWorkspace extends FMODProjectExtensions.WorkspaceExtensions {}
