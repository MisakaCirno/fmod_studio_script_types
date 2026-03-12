/* AUTO-GENERATED FILE. DO NOT EDIT. */
/* Source: data/model.jsonl */

declare namespace FMODProjectModel {
    interface FmodModelRef<TName extends string = string> {
        readonly __entityType?: TName;
    }

    interface ADSRModulatorModelEntity {
        name: "ADSRModulator";
        superEntities: readonly ["Modulator"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            attackShape: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            attackTime: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1000";
                defaultValueNormalized: 1000;
            };
            decayShape: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            decayTime: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1000";
                defaultValueNormalized: 1000;
            };
            finalValue: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            holdTime: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1000";
                defaultValueNormalized: 1000;
            };
            initialValue: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            nameOfPropertyBeingModulated: {
                dataTypeRaw: "Utf8";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            peakValue: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            releaseShape: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            releaseTime: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1000";
                defaultValueNormalized: 1000;
            };
            sustainValue: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            objectBeingModulated: FmodModelRef<"AutomatableObject"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            objectBeingModulated: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomatableObject";
                destinationTypeNormalized: "AutomatableObject";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ActionSheetModelEntity {
        name: "ActionSheet";
        superEntities: readonly ["Parameter"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            name: string;
            uiLastHorizontalScrollBarValue: number;
            uiLastRulerScaleRatio: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Actions";
                defaultValueNormalized: "Actions";
            };
            uiLastHorizontalScrollBarValue: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiLastRulerScaleRatio: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            event: FmodModelRef<"Event"> | null;
            eventSelector: FmodModelRef<"Event"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            modules: FmodModelRef<"MultiSound"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            eventSelector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modules: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface AssetModelEntity {
        name: "Asset";
        superEntities: readonly ["Notable", "Colorable"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            assetPath: string;
            color: string;
            note: string;
        };
        propertyMeta: {
            assetPath: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            masterAssetFolder: FmodModelRef<"MasterAssetFolder"> | null;
        };
        relationshipMeta: {
            masterAssetFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterAssetFolder";
                destinationTypeNormalized: "MasterAssetFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface AudioFileModelEntity {
        name: "AudioFile";
        superEntities: readonly ["EncodableAsset", "ReferenceableData", "ProgrammerSoundPlaceholder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            assetPath: string;
            channelCount: number;
            color: string;
            frequencyInKHz: number;
            isStreaming: boolean;
            length: any;
            note: string;
        };
        propertyMeta: {
            assetPath: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            channelCount: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            frequencyInKHz: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            isStreaming: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            dataReferees: Array<FmodModelRef<"DataReferee">>;
            encodingSettings: Array<FmodModelRef<"EncodingSetting">>;
            masterAssetFolder: FmodModelRef<"MasterAssetFolder"> | null;
            programmerSounds: Array<FmodModelRef<"ProgrammerSound">>;
            sounds: Array<FmodModelRef<"SingleSound">>;
        };
        relationshipMeta: {
            dataReferees: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "DataReferee";
                destinationTypeNormalized: "DataReferee";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            encodingSettings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "EncodingSetting";
                destinationTypeNormalized: "EncodingSetting";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masterAssetFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterAssetFolder";
                destinationTypeNormalized: "MasterAssetFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            programmerSounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProgrammerSound";
                destinationTypeNormalized: "ProgrammerSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            sounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SingleSound";
                destinationTypeNormalized: "SingleSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface AudioSettingsModelEntity {
        name: "AudioSettings";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: true;
        isSingleton: true;
        properties: {
            deviceId: any;
            deviceName: string;
            driverName: string;
            forcedBlockSize: number;
        };
        propertyMeta: {
            deviceId: {
                dataTypeRaw: "Guid";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            deviceName: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            driverName: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            forcedBlockSize: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
        };
        relationshipMeta: {
        };
    }

    interface AudioTableModelEntity {
        name: "AudioTable";
        superEntities: readonly ["WorkspaceItem", "Encodable", "ProgrammerSoundPlaceholder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            includeSubDirectories: boolean;
            isLocalized: boolean;
            name: string;
            note: string;
            sourceDirectory: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            includeSubDirectories: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isLocalized: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            sourceDirectory: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            bank: FmodModelRef<"Bank"> | null;
            encodingSettings: Array<FmodModelRef<"EncodingSetting">>;
            folder: FmodModelRef<"Folder"> | null;
            programmerSounds: Array<FmodModelRef<"ProgrammerSound">>;
        };
        relationshipMeta: {
            bank: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Bank";
                destinationTypeNormalized: "Bank";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            encodingSettings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "EncodingSetting";
                destinationTypeNormalized: "EncodingSetting";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            programmerSounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProgrammerSound";
                destinationTypeNormalized: "ProgrammerSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface AudioTrackModelEntity {
        name: "AudioTrack";
        superEntities: readonly ["Track"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
        };
        propertyMeta: {
            uiAutomationTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automationTracks: Array<FmodModelRef<"AutomationTrack">>;
            modules: Array<FmodModelRef<"Module">>;
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            automationTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationTrack";
                destinationTypeNormalized: "AutomationTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface AutomatableObjectModelEntity {
        name: "AutomatableObject";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface AutomationCurveModelEntity {
        name: "AutomationCurve";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            automationPoints: Array<FmodModelRef<"AutomationPoint">>;
            automator: FmodModelRef<"Automator"> | null;
            parameter: FmodModelRef<"ParameterPrototype"> | null;
        };
        relationshipMeta: {
            automationPoints: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationPoint";
                destinationTypeNormalized: "AutomationPoint";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            automator: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ParameterPrototype";
                destinationTypeNormalized: "ParameterPrototype";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface AutomationPointModelEntity {
        name: "AutomationPoint";
        superEntities: readonly ["Selectable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            curveShape: number;
            isSCurve: boolean;
            position: any;
            value: number;
        };
        propertyMeta: {
            curveShape: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            isSCurve: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            position: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            value: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automationCurve: FmodModelRef<"AutomationCurve"> | null;
            endPointOwner: FmodModelRef<"FadeCurve"> | null;
            selector: FmodModelRef<"Selector"> | null;
            startPointOwner: FmodModelRef<"FadeCurve"> | null;
        };
        relationshipMeta: {
            automationCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomationCurve";
                destinationTypeNormalized: "AutomationCurve";
                isRequiredRaw: "!startPointOwner && !endPointOwner";
                isRequiredNormalized: "!startPointOwner && !endPointOwner";
            };
            endPointOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "!automationCurve && !startPointOwner";
                isRequiredNormalized: "!automationCurve && !startPointOwner";
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            startPointOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "!automationCurve && !endPointOwner";
                isRequiredNormalized: "!automationCurve && !endPointOwner";
            };
        };
    }

    interface AutomationTrackModelEntity {
        name: "AutomationTrack";
        superEntities: readonly ["Track"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiTrackHeight: number;
        };
        propertyMeta: {
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automator: FmodModelRef<"Automator"> | null;
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            automator: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface AutomatorModelEntity {
        name: "Automator";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            nameOfPropertyBeingAutomated: any;
        };
        propertyMeta: {
            nameOfPropertyBeingAutomated: {
                dataTypeRaw: "Utf8";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automationCurves: Array<FmodModelRef<"AutomationCurve">>;
            automationTracks: Array<FmodModelRef<"AutomationTrack">>;
            objectBeingAutomated: FmodModelRef<"AutomatableObject"> | null;
        };
        relationshipMeta: {
            automationCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationCurve";
                destinationTypeNormalized: "AutomationCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            automationTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationTrack";
                destinationTypeNormalized: "AutomationTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            objectBeingAutomated: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomatableObject";
                destinationTypeNormalized: "AutomatableObject";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface AutopitchModulatorModelEntity {
        name: "AutopitchModulator";
        superEntities: readonly ["Modulator"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            nameOfPropertyBeingModulated: any;
            pitchAtMinimum: number;
            root: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            nameOfPropertyBeingModulated: {
                dataTypeRaw: "Utf8";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            pitchAtMinimum: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            root: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            objectBeingModulated: FmodModelRef<"AutomatableObject"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            objectBeingModulated: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomatableObject";
                destinationTypeNormalized: "AutomatableObject";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface BankModelEntity {
        name: "Bank";
        superEntities: readonly ["WorkspaceItem"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            dontLoopOptionEnabled: boolean;
            isMasterBank: boolean;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            dontLoopOptionEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isMasterBank: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            audioTable: FmodModelRef<"AudioTable"> | null;
            events: Array<FmodModelRef<"Event">>;
            folder: FmodModelRef<"Folder"> | null;
        };
        relationshipMeta: {
            audioTable: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTable";
                destinationTypeNormalized: "AudioTable";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            events: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface BankFolderModelEntity {
        name: "BankFolder";
        superEntities: readonly ["Folder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface BoolPluginParameterModelEntity {
        name: "BoolPluginParameter";
        superEntities: readonly ["PluginParameter"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            name: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: boolean;
        };
        propertyMeta: {
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            value: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            plugin: FmodModelRef<"Plugin"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            plugin: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Plugin";
                destinationTypeNormalized: "Plugin";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ChannelMixEffectModelEntity {
        name: "ChannelMixEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            gain00: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain01: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain02: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain03: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain04: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain05: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain06: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain07: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain08: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain09: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain10: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain11: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain12: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain13: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain14: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain15: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain16: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain17: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain18: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain19: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain20: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain21: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain22: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain23: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain24: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain25: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain26: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain27: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain28: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain29: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain30: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gain31: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            output00: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            output01: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            output02: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "2";
                defaultValueNormalized: 2;
            };
            output03: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "3";
                defaultValueNormalized: 3;
            };
            output04: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "4";
                defaultValueNormalized: 4;
            };
            output05: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "5";
                defaultValueNormalized: 5;
            };
            output06: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "6";
                defaultValueNormalized: 6;
            };
            output07: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "7";
                defaultValueNormalized: 7;
            };
            output08: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "8";
                defaultValueNormalized: 8;
            };
            output09: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "9";
                defaultValueNormalized: 9;
            };
            output10: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "10";
                defaultValueNormalized: 10;
            };
            output11: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "11";
                defaultValueNormalized: 11;
            };
            output12: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "12";
                defaultValueNormalized: 12;
            };
            output13: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "13";
                defaultValueNormalized: 13;
            };
            output14: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "14";
                defaultValueNormalized: 14;
            };
            output15: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "15";
                defaultValueNormalized: 15;
            };
            output16: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "16";
                defaultValueNormalized: 16;
            };
            output17: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "17";
                defaultValueNormalized: 17;
            };
            output18: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "18";
                defaultValueNormalized: 18;
            };
            output19: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "19";
                defaultValueNormalized: 19;
            };
            output20: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "20";
                defaultValueNormalized: 20;
            };
            output21: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "21";
                defaultValueNormalized: 21;
            };
            output22: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "22";
                defaultValueNormalized: 22;
            };
            output23: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "23";
                defaultValueNormalized: 23;
            };
            output24: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "24";
                defaultValueNormalized: 24;
            };
            output25: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "25";
                defaultValueNormalized: 25;
            };
            output26: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "26";
                defaultValueNormalized: 26;
            };
            output27: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "27";
                defaultValueNormalized: 27;
            };
            output28: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "28";
                defaultValueNormalized: 28;
            };
            output29: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "29";
                defaultValueNormalized: 29;
            };
            output30: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "30";
                defaultValueNormalized: 30;
            };
            output31: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "31";
                defaultValueNormalized: 31;
            };
            outputGrouping: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ChorusEffectModelEntity {
        name: "ChorusEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            depth: number;
            mix: number;
            rate: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            depth: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "3";
                defaultValueNormalized: 3;
            };
            mix: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            rate: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0.800000011920929";
                defaultValueNormalized: 0.800000011920929;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ColorableModelEntity {
        name: "Colorable";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
        };
        relationships: {
        };
        relationshipMeta: {
        };
    }

    interface CommandSoundModelEntity {
        name: "CommandSound";
        superEntities: readonly ["Sound"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Purple";
                defaultValueNormalized: "Purple";
            };
            commandType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            targetValue: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            commandTarget: FmodModelRef<"CommandTarget"> | null;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"MultiSound"> | null;
            parameter: FmodModelRef<"Parameter"> | null;
            playPercentage: FmodModelRef<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            commandTarget: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "CommandTarget";
                destinationTypeNormalized: "CommandTarget";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "!audioTrack";
                isRequiredNormalized: "!audioTrack";
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            playPercentage: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "PlayPercentage";
                destinationTypeNormalized: "PlayPercentage";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface CommandTargetModelEntity {
        name: "CommandTarget";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            commandSounds: Array<FmodModelRef<"CommandSound">>;
        };
        relationshipMeta: {
            commandSounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "CommandSound";
                destinationTypeNormalized: "CommandSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface CompressorEffectModelEntity {
        name: "CompressorEffect";
        superEntities: readonly ["MixerEffect", "SidechainTarget"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            attackTime: number;
            bypass: boolean;
            gain: number;
            linkChannels: boolean;
            ratio: number;
            releaseTime: number;
            threshold: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            attackTime: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "20";
                defaultValueNormalized: 20;
            };
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            gain: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            linkChannels: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            ratio: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "2.5";
                defaultValueNormalized: 2.5;
            };
            releaseTime: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "200";
                defaultValueNormalized: 200;
            };
            threshold: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            sidechains: Array<FmodModelRef<"Sidechain">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            sidechains: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Sidechain";
                destinationTypeNormalized: "Sidechain";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ControlSurfaceModelEntity {
        name: "ControlSurface";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: true;
        isSingleton: false;
        properties: {
            color: any;
            name: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "Color";
                dataTypeNormalized: "any";
                defaultValueRaw: "#00b0e8";
                defaultValueNormalized: "#00b0e8";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            customBindings: Array<FmodModelRef<"ControlSurfaceCustomBindings">>;
            protocols: Array<FmodModelRef<"ControlSurfaceProtocol">>;
        };
        relationshipMeta: {
            customBindings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceCustomBindings";
                destinationTypeNormalized: "ControlSurfaceCustomBindings";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            protocols: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceProtocol";
                destinationTypeNormalized: "ControlSurfaceProtocol";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ControlSurfaceCustomBindingModelEntity {
        name: "ControlSurfaceCustomBinding";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            linkedObject: FmodModelRef<"AutomatableObject"> | null;
            owner: FmodModelRef<"ControlSurfaceCustomBindings"> | null;
        };
        relationshipMeta: {
            linkedObject: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomatableObject";
                destinationTypeNormalized: "AutomatableObject";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBindings";
                destinationTypeNormalized: "ControlSurfaceCustomBindings";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface ControlSurfaceCustomBindingsModelEntity {
        name: "ControlSurfaceCustomBindings";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            controlSurface: FmodModelRef<"ControlSurface"> | null;
            customBindings: Array<FmodModelRef<"ControlSurfaceCustomBinding">>;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            controlSurface: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurface";
                destinationTypeNormalized: "ControlSurface";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            customBindings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface ControlSurfaceProtocolModelEntity {
        name: "ControlSurfaceProtocol";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: true;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            controlSurface: FmodModelRef<"ControlSurface"> | null;
        };
        relationshipMeta: {
            controlSurface: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurface";
                destinationTypeNormalized: "ControlSurface";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface ConvolutionReverbEffectModelEntity {
        name: "ConvolutionReverbEffect";
        superEntities: readonly ["MixerEffect", "DataReferee"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            dryLevel: number;
            endFrame: any;
            linkChannels: boolean;
            startFrame: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            wetLevel: number;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            dryLevel: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "-80";
                defaultValueNormalized: -80;
            };
            endFrame: {
                dataTypeRaw: "UInt";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            linkChannels: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            startFrame: {
                dataTypeRaw: "UInt";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            wetLevel: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            referenceableData: FmodModelRef<"AudioFile"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            referenceableData: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioFile";
                destinationTypeNormalized: "AudioFile";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface DAWAssetModelEntity {
        name: "DAWAsset";
        superEntities: readonly ["AudioFile"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            assetPath: string;
            channelCount: number;
            color: string;
            frequencyInKHz: number;
            isStreaming: boolean;
            length: any;
            note: string;
        };
        propertyMeta: {
            assetPath: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            channelCount: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            frequencyInKHz: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            isStreaming: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            dataReferees: Array<FmodModelRef<"DataReferee">>;
            encodingSettings: Array<FmodModelRef<"EncodingSetting">>;
            masterAssetFolder: FmodModelRef<"MasterAssetFolder"> | null;
            programmerSounds: Array<FmodModelRef<"ProgrammerSound">>;
            project: FmodModelRef<"DAWProject"> | null;
            sounds: Array<FmodModelRef<"SingleSound">>;
        };
        relationshipMeta: {
            dataReferees: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "DataReferee";
                destinationTypeNormalized: "DataReferee";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            encodingSettings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "EncodingSetting";
                destinationTypeNormalized: "EncodingSetting";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masterAssetFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterAssetFolder";
                destinationTypeNormalized: "MasterAssetFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            programmerSounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProgrammerSound";
                destinationTypeNormalized: "ProgrammerSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            project: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "DAWProject";
                destinationTypeNormalized: "DAWProject";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            sounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SingleSound";
                destinationTypeNormalized: "SingleSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface DAWProjectModelEntity {
        name: "DAWProject";
        superEntities: readonly ["EncodableAsset"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            assetPath: string;
            color: string;
            dawProjectPath: string;
            note: string;
            renderedAssetsPath: string;
        };
        propertyMeta: {
            assetPath: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            dawProjectPath: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            renderedAssetsPath: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            assets: Array<FmodModelRef<"DAWAsset">>;
            encodingSettings: Array<FmodModelRef<"EncodingSetting">>;
            masterAssetFolder: FmodModelRef<"MasterAssetFolder"> | null;
        };
        relationshipMeta: {
            assets: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "DAWAsset";
                destinationTypeNormalized: "DAWAsset";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            encodingSettings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "EncodingSetting";
                destinationTypeNormalized: "EncodingSetting";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masterAssetFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterAssetFolder";
                destinationTypeNormalized: "MasterAssetFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface DataFileModelEntity {
        name: "DataFile";
        superEntities: readonly ["Asset", "ReferenceableData"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            assetPath: string;
            color: string;
            note: string;
        };
        propertyMeta: {
            assetPath: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            dataReferees: Array<FmodModelRef<"DataReferee">>;
            masterAssetFolder: FmodModelRef<"MasterAssetFolder"> | null;
        };
        relationshipMeta: {
            dataReferees: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "DataReferee";
                destinationTypeNormalized: "DataReferee";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masterAssetFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterAssetFolder";
                destinationTypeNormalized: "MasterAssetFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface DataPluginParameterModelEntity {
        name: "DataPluginParameter";
        superEntities: readonly ["PluginParameter", "DataReferee"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            dataType: number;
            name: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: any;
        };
        propertyMeta: {
            dataType: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            value: {
                dataTypeRaw: "ByteArray";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            plugin: FmodModelRef<"Plugin"> | null;
            referenceableData: FmodModelRef<"ReferenceableData"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            plugin: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Plugin";
                destinationTypeNormalized: "Plugin";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            referenceableData: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ReferenceableData";
                destinationTypeNormalized: "ReferenceableData";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface DataRefereeModelEntity {
        name: "DataReferee";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            referenceableData: FmodModelRef<"ReferenceableData"> | null;
        };
        relationshipMeta: {
            referenceableData: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ReferenceableData";
                destinationTypeNormalized: "ReferenceableData";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface DelayEffectModelEntity {
        name: "DelayEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            delay: number;
            dryLevel: number;
            feedback: number;
            level: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            delay: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "500";
                defaultValueNormalized: 500;
            };
            dryLevel: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            feedback: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "50";
                defaultValueNormalized: 50;
            };
            level: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface DistortionEffectModelEntity {
        name: "DistortionEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            level: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            level: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0.5";
                defaultValueNormalized: 0.5;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EditorSettingsModelEntity {
        name: "EditorSettings";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: true;
        isSingleton: true;
        properties: {
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
        propertyMeta: {
            absoluteMouseModeEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            analyticsEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            apiPlaybackEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            autoSaveEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            autoplayAudioFilePlayback: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            birdsEyeDragMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            buildThreadCount: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            bulkEditEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            compressedAudioFilePlayback: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            continuousZoomToFit: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            defaultProfilerGraphType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            editorScrollModeAltModifier: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "3";
                defaultValueNormalized: 3;
            };
            editorScrollModeControlModifier: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            editorScrollModeNoModifier: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            editorScrollModeShiftModifier: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "2";
                defaultValueNormalized: 2;
            };
            emailAddress: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            eventsBrowserSharesSelection: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            followCursor: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            forcedDevicePixelRatio: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            initialSyncEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            keyboardShortcuts: {
                dataTypeRaw: "StringList";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            linkedAssetsRemovalMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            linkedAssetsRenderMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            liveUpdateAutoReconnect: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            liveUpdateDisableStreamingSounds: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            liveUpdateSyncConnectedPlatform: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            loopAudioFilePlayback: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            loopPlayback: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            mixerStripHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            mixerStripShowsEffects: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            mixerStripShowsMacros: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            mixerStripShowsOutputs: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            mixerStripShowsSends: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            mixerStripWidth: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            preferredOpenItemMethod: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            profilerAutomaticScopeInMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            profilerTableValueMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            profilerTableVisibleColumns: {
                dataTypeRaw: "StringList";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            reaperApplicationPath: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            recentFiles: {
                dataTypeRaw: "StringList";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            recentImportFolder: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            recentIpAddress: {
                dataTypeRaw: "StringList";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            recentVersionOpened: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            rememberWindowPositions: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            restoreWindows: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            sampleEditor: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            showAutomationPointValues: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            showMarkerLines: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            showOnlyKnownAudioFileTypes: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            showOverlappingInstrumentsInLanes: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            snapToItems: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            snapToRuler: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            startupMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timeDisplayMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiAutomationTracksVisible: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiDefaultTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiView3DFront: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiView3DOrtho: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiView3DSize: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
        };
        relationships: {
        };
        relationshipMeta: {
        };
    }

    interface EffectChainModelEntity {
        name: "EffectChain";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            effects: Array<FmodModelRef<"MixerEffect">>;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            effects: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerEffect";
                destinationTypeNormalized: "MixerEffect";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EffectPresetModelEntity {
        name: "EffectPreset";
        superEntities: readonly ["WorkspaceItem"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            effect: FmodModelRef<"MixerEffect"> | null;
            folder: FmodModelRef<"EffectPresetFolder"> | null;
            proxies: Array<FmodModelRef<"ProxyEffect">>;
        };
        relationshipMeta: {
            effect: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerEffect";
                destinationTypeNormalized: "MixerEffect";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPresetFolder";
                destinationTypeNormalized: "EffectPresetFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            proxies: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProxyEffect";
                destinationTypeNormalized: "ProxyEffect";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EffectPresetFolderModelEntity {
        name: "EffectPresetFolder";
        superEntities: readonly ["Folder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EncodableModelEntity {
        name: "Encodable";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            encodingSettings: Array<FmodModelRef<"EncodingSetting">>;
        };
        relationshipMeta: {
            encodingSettings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "EncodingSetting";
                destinationTypeNormalized: "EncodingSetting";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EncodableAssetModelEntity {
        name: "EncodableAsset";
        superEntities: readonly ["Asset", "Encodable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            assetPath: string;
            color: string;
            note: string;
        };
        propertyMeta: {
            assetPath: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            encodingSettings: Array<FmodModelRef<"EncodingSetting">>;
            masterAssetFolder: FmodModelRef<"MasterAssetFolder"> | null;
        };
        relationshipMeta: {
            encodingSettings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "EncodingSetting";
                destinationTypeNormalized: "EncodingSetting";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masterAssetFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterAssetFolder";
                destinationTypeNormalized: "MasterAssetFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface EncodingSettingModelEntity {
        name: "EncodingSetting";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            encodingFormat: number;
            loadingMode: number;
            quality: number;
            sampleRate: number;
            sampleRateMode: number;
        };
        propertyMeta: {
            encodingFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            loadingMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            quality: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "80";
                defaultValueNormalized: 80;
            };
            sampleRate: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "48000";
                defaultValueNormalized: 48000;
            };
            sampleRateMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            encodable: FmodModelRef<"Encodable"> | null;
            platform: FmodModelRef<"Platform"> | null;
        };
        relationshipMeta: {
            encodable: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Encodable";
                destinationTypeNormalized: "Encodable";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            platform: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface EventModelEntity {
        name: "Event";
        superEntities: readonly ["Folder", "Selector", "Taggable", "CommandTarget", "ProfilerTrackable", "ProfilerGraphable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            isDefault: boolean;
            name: string;
            note: string;
            outputFormat: number;
            uiMarkerTracksVisible: boolean;
            uiMaxMarkerTracksVisible: number;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            isDefault: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            outputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            uiMarkerTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            uiMaxMarkerTracksVisible: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "8";
                defaultValueNormalized: 8;
            };
        };
        relationships: {
            automatableProperties: FmodModelRef<"EventAutomatableProperties"> | null;
            banks: Array<FmodModelRef<"Bank">>;
            clonedEvents: Array<FmodModelRef<"Event">>;
            commandSounds: Array<FmodModelRef<"CommandSound">>;
            defaultEvent: FmodModelRef<"Event"> | null;
            folder: FmodModelRef<"Folder"> | null;
            groupTracks: Array<FmodModelRef<"GroupTrack">>;
            items: Array<FmodModelRef<"Event">>;
            markerTracks: Array<FmodModelRef<"MarkerTrack">>;
            masterTrack: FmodModelRef<"MasterTrack"> | null;
            mixer: FmodModelRef<"EventMixer"> | null;
            mixerInput: FmodModelRef<"MixerInput"> | null;
            parameters: Array<FmodModelRef<"Parameter">>;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            references: Array<FmodModelRef<"EventSound">>;
            returnTracks: Array<FmodModelRef<"ReturnTrack">>;
            sandboxEmitters: Array<FmodModelRef<"SandboxEmitter">>;
            selectables: Array<FmodModelRef<"Selectable">>;
            tags: Array<FmodModelRef<"Tag">>;
            timeline: FmodModelRef<"Timeline"> | null;
            uiLastParameterSelection: FmodModelRef<"Parameter"> | null;
            userProperties: Array<FmodModelRef<"UserProperty">>;
        };
        relationshipMeta: {
            automatableProperties: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventAutomatableProperties";
                destinationTypeNormalized: "EventAutomatableProperties";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            banks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Bank";
                destinationTypeNormalized: "Bank";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            clonedEvents: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            commandSounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "CommandSound";
                destinationTypeNormalized: "CommandSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            defaultEvent: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            groupTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "GroupTrack";
                destinationTypeNormalized: "GroupTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masterTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterTrack";
                destinationTypeNormalized: "MasterTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            mixer: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventMixer";
                destinationTypeNormalized: "EventMixer";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            mixerInput: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerInput";
                destinationTypeNormalized: "MixerInput";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            parameters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            references: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "EventSound";
                destinationTypeNormalized: "EventSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            returnTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ReturnTrack";
                destinationTypeNormalized: "ReturnTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            sandboxEmitters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SandboxEmitter";
                destinationTypeNormalized: "SandboxEmitter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selectables: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Selectable";
                destinationTypeNormalized: "Selectable";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            tags: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Tag";
                destinationTypeNormalized: "Tag";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            uiLastParameterSelection: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            userProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UserProperty";
                destinationTypeNormalized: "UserProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EventAutomatablePropertiesModelEntity {
        name: "EventAutomatableProperties";
        superEntities: readonly ["AutomatableObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            dopplerEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            dopplerScale: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            isPersistent: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "20";
                defaultValueNormalized: 20;
            };
            minimumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            noLookahead: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            priority: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "2";
                defaultValueNormalized: 2;
            };
            sampleDataLoadingMode: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            snapshotIntensity: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerCooldown: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            event: FmodModelRef<"Event"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EventConditionModelEntity {
        name: "EventCondition";
        superEntities: readonly ["TriggerCondition"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            eventState: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            eventState: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"Triggerable"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Triggerable";
                destinationTypeNormalized: "Triggerable";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EventFolderModelEntity {
        name: "EventFolder";
        superEntities: readonly ["Folder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EventMixerModelEntity {
        name: "EventMixer";
        superEntities: readonly ["Mixer"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            event: FmodModelRef<"Event"> | null;
            masterBus: FmodModelRef<"EventMixerMaster"> | null;
            port: Array<FmodModelRef<"MixerPort">>;
            snapshotList: FmodModelRef<"SnapshotList"> | null;
            snapshots: Array<FmodModelRef<"Snapshot">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
            vca: Array<FmodModelRef<"MixerVCA">>;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masterBus: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventMixerMaster";
                destinationTypeNormalized: "EventMixerMaster";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            port: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerPort";
                destinationTypeNormalized: "MixerPort";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotList: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "SnapshotList";
                destinationTypeNormalized: "SnapshotList";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshots: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Snapshot";
                destinationTypeNormalized: "Snapshot";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            vca: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EventMixerGroupModelEntity {
        name: "EventMixerGroup";
        superEntities: readonly ["MixerGroup", "Selectable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            instanceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            maxInstances: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            overridingInputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodModelRef<"MixerBusEffectChain"> | null;
            groupTrack: FmodModelRef<"GroupTrack"> | null;
            input: Array<FmodModelRef<"MixerBus">>;
            masters: Array<FmodModelRef<"MixerVCA">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            output: FmodModelRef<"MixerGroup"> | null;
            panner: FmodModelRef<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            effectChain: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusEffectChain";
                destinationTypeNormalized: "MixerBusEffectChain";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            groupTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "GroupTrack";
                destinationTypeNormalized: "GroupTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            input: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerBus";
                destinationTypeNormalized: "MixerBus";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            output: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerGroup";
                destinationTypeNormalized: "MixerGroup";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            panner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusPanner";
                destinationTypeNormalized: "MixerBusPanner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EventMixerMasterModelEntity {
        name: "EventMixerMaster";
        superEntities: readonly ["MixerMaster", "Selectable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            instanceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            maxInstances: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Master";
                defaultValueNormalized: "Master";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            overridingInputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodModelRef<"MixerBusEffectChain"> | null;
            groupTrack: FmodModelRef<"MasterTrack"> | null;
            input: Array<FmodModelRef<"MixerBus">>;
            masters: Array<FmodModelRef<"MixerVCA">>;
            mixer: FmodModelRef<"Mixer"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            output: FmodModelRef<"MixerGroup"> | null;
            panner: FmodModelRef<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            effectChain: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusEffectChain";
                destinationTypeNormalized: "MixerBusEffectChain";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            groupTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterTrack";
                destinationTypeNormalized: "MasterTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            input: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerBus";
                destinationTypeNormalized: "MixerBus";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixer: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Mixer";
                destinationTypeNormalized: "Mixer";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            output: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerGroup";
                destinationTypeNormalized: "MixerGroup";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            panner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusPanner";
                destinationTypeNormalized: "MixerBusPanner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EventMixerReturnModelEntity {
        name: "EventMixerReturn";
        superEntities: readonly ["MixerReturn", "Selectable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
            overridingInputFormat: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            overridingInputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodModelRef<"MixerBusEffectChain"> | null;
            input: Array<FmodModelRef<"MixerSend">>;
            masters: Array<FmodModelRef<"MixerVCA">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            output: FmodModelRef<"MixerGroup"> | null;
            panner: FmodModelRef<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            returnTrack: FmodModelRef<"ReturnTrack"> | null;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            effectChain: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusEffectChain";
                destinationTypeNormalized: "MixerBusEffectChain";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            input: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerSend";
                destinationTypeNormalized: "MixerSend";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            output: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerGroup";
                destinationTypeNormalized: "MixerGroup";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            panner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusPanner";
                destinationTypeNormalized: "MixerBusPanner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            returnTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ReturnTrack";
                destinationTypeNormalized: "ReturnTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface EventSoundModelEntity {
        name: "EventSound";
        superEntities: readonly ["Sound"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Yellow";
                defaultValueNormalized: "Yellow";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            event: FmodModelRef<"Event"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"MultiSound"> | null;
            parameter: FmodModelRef<"Parameter"> | null;
            parameters: Array<FmodModelRef<"ParameterProperty">>;
            playPercentage: FmodModelRef<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "!audioTrack";
                isRequiredNormalized: "!audioTrack";
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            parameters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ParameterProperty";
                destinationTypeNormalized: "ParameterProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            playPercentage: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "PlayPercentage";
                destinationTypeNormalized: "PlayPercentage";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface FadeCurveModelEntity {
        name: "FadeCurve";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            endPoint: FmodModelRef<"AutomationPoint"> | null;
            fadeInOwner: FmodModelRef<"Module"> | null;
            fadeOutOwner: FmodModelRef<"Module"> | null;
            relatedModule: FmodModelRef<"Module"> | null;
            startPoint: FmodModelRef<"AutomationPoint"> | null;
        };
        relationshipMeta: {
            endPoint: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomationPoint";
                destinationTypeNormalized: "AutomationPoint";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            fadeInOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "!fadeOutOwner";
                isRequiredNormalized: "!fadeOutOwner";
            };
            fadeOutOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "!fadeInOwner";
                isRequiredNormalized: "!fadeInOwner";
            };
            relatedModule: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            startPoint: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomationPoint";
                destinationTypeNormalized: "AutomationPoint";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface FlangerEffectModelEntity {
        name: "FlangerEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            delay: number;
            mix: number;
            rate: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            delay: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            mix: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "50";
                defaultValueNormalized: 50;
            };
            rate: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0.10000000149011612";
                defaultValueNormalized: 0.10000000149011612;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface FloatPluginParameterModelEntity {
        name: "FloatPluginParameter";
        superEntities: readonly ["PluginParameter"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            curve: string;
            name: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: number;
        };
        propertyMeta: {
            curve: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            value: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            plugin: FmodModelRef<"Plugin"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            plugin: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Plugin";
                destinationTypeNormalized: "Plugin";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface FolderModelEntity {
        name: "Folder";
        superEntities: readonly ["WorkspaceItem"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface GainEffectModelEntity {
        name: "GainEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            gain: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            gain: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface GameParameterModelEntity {
        name: "GameParameter";
        superEntities: readonly ["AutomatableObject", "ParameterPrototype", "CommandTarget", "Selectable", "ProfilerGraphable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            cursorPosition: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            enumerationLabels: {
                dataTypeRaw: "StringList";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            initialValue: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            isExposedRecursively: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            isGlobal: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isHeld: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isReadOnly: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            maximum: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            minimum: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            parameterType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            seekSpeed: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            seekSpeedAsymmetric: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            seekSpeedDescending: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            velocity: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automationCurves: Array<FmodModelRef<"AutomationCurve">>;
            automators: Array<FmodModelRef<"Automator">>;
            commandSounds: Array<FmodModelRef<"CommandSound">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            parameterConditions: Array<FmodModelRef<"ParameterCondition">>;
            presetOwner: FmodModelRef<"ParameterPreset"> | null;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            proxies: Array<FmodModelRef<"ParameterProxy">>;
            sandboxParameters: Array<FmodModelRef<"SandboxParameter">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automationCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationCurve";
                destinationTypeNormalized: "AutomationCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            commandSounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "CommandSound";
                destinationTypeNormalized: "CommandSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            parameterConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ParameterCondition";
                destinationTypeNormalized: "ParameterCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ParameterPreset";
                destinationTypeNormalized: "ParameterPreset";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            proxies: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ParameterProxy";
                destinationTypeNormalized: "ParameterProxy";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            sandboxParameters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SandboxParameter";
                destinationTypeNormalized: "SandboxParameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface GroupTrackModelEntity {
        name: "GroupTrack";
        superEntities: readonly ["AudioTrack", "PlatformSpecificItem"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            streaming: boolean;
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
        };
        propertyMeta: {
            streaming: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiAutomationTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automationTracks: Array<FmodModelRef<"AutomationTrack">>;
            event: FmodModelRef<"Event"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            mixerGroup: FmodModelRef<"EventMixerGroup"> | null;
            modules: Array<FmodModelRef<"Module">>;
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            automationTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationTrack";
                destinationTypeNormalized: "AutomationTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixerGroup: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventMixerGroup";
                destinationTypeNormalized: "EventMixerGroup";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface HighpassEffectModelEntity {
        name: "HighpassEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            cutoff: number;
            resonance: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            cutoff: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "2000";
                defaultValueNormalized: 2000;
            };
            resonance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface HighpassSimpleEffectModelEntity {
        name: "HighpassSimpleEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            cutoff: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            cutoff: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "2000";
                defaultValueNormalized: 2000;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ITEchoEffectModelEntity {
        name: "ITEchoEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            feedback: number;
            leftDelay: number;
            panDelay: number;
            rightDelay: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            wetDryMix: number;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            feedback: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "50";
                defaultValueNormalized: 50;
            };
            leftDelay: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "500";
                defaultValueNormalized: 500;
            };
            panDelay: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            rightDelay: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "500";
                defaultValueNormalized: 500;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            wetDryMix: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "50";
                defaultValueNormalized: 50;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface IntPluginParameterModelEntity {
        name: "IntPluginParameter";
        superEntities: readonly ["PluginParameter"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            maximumValue: number;
            minimumValue: number;
            name: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: number;
        };
        propertyMeta: {
            maximumValue: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            minimumValue: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            value: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            plugin: FmodModelRef<"Plugin"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            plugin: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Plugin";
                destinationTypeNormalized: "Plugin";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface LFOModulatorModelEntity {
        name: "LFOModulator";
        superEntities: readonly ["Modulator"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            beats: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "4";
                defaultValueNormalized: 4;
            };
            depth: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            direction: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            isTempoSync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            nameOfPropertyBeingModulated: {
                dataTypeRaw: "Utf8";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            phase: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            rate: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0.5";
                defaultValueNormalized: 0.5;
            };
            shape: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            objectBeingModulated: FmodModelRef<"AutomatableObject"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            objectBeingModulated: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomatableObject";
                destinationTypeNormalized: "AutomatableObject";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface LimiterEffectModelEntity {
        name: "LimiterEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            boost: number;
            bypass: boolean;
            ceiling: number;
            linkChannels: boolean;
            release: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            boost: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            ceiling: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            linkChannels: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            release: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "10";
                defaultValueNormalized: 10;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface LocaleModelEntity {
        name: "Locale";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            localeCode: string;
            name: string;
        };
        propertyMeta: {
            localeCode: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            uiActiveLocaleOwner: FmodModelRef<"ProjectSettings"> | null;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            uiActiveLocaleOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProjectSettings";
                destinationTypeNormalized: "ProjectSettings";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface LoopRegionModelEntity {
        name: "LoopRegion";
        superEntities: readonly ["Region", "Triggerable", "Quantizable", "TransitionDestination", "TransitionTimelineOwner"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            looping: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            position: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            transitionOffset: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTransitionTimelineVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            destination: FmodModelRef<"TransitionDestination"> | null;
            markerTrack: FmodModelRef<"MarkerTrack"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            references: Array<FmodModelRef<"TransitionTimelineOwner">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            timeline: FmodModelRef<"Timeline"> | null;
            transitionTimeline: FmodModelRef<"TransitionTimeline"> | null;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            destination: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "TransitionDestination";
                destinationTypeNormalized: "TransitionDestination";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            references: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TransitionTimelineOwner";
                destinationTypeNormalized: "TransitionTimelineOwner";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            transitionTimeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "TransitionTimeline";
                destinationTypeNormalized: "TransitionTimeline";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface LoopableModelEntity {
        name: "Loopable";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            looping: boolean;
            playCount: number;
        };
        propertyMeta: {
            looping: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            playCount: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
        };
        relationshipMeta: {
        };
    }

    interface LoudnessMeterModelEntity {
        name: "LoudnessMeter";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            loudnessScale: number;
            loudnessTarget: number;
            meterMode: number;
            meterRange: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            loudnessScale: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            loudnessTarget: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "-23";
                defaultValueNormalized: -23;
            };
            meterMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            meterRange: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface LowpassEffectModelEntity {
        name: "LowpassEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            cutoff: number;
            resonance: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            cutoff: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "2000";
                defaultValueNormalized: 2000;
            };
            resonance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface LowpassSimpleEffectModelEntity {
        name: "LowpassSimpleEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            cutoff: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            cutoff: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "2000";
                defaultValueNormalized: 2000;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MackieControlSurfaceModelEntity {
        name: "MackieControlSurface";
        superEntities: readonly ["ControlSurface"];
        isAbstract: false;
        isGlobal: true;
        isSingleton: false;
        properties: {
            color: any;
            name: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "Color";
                dataTypeNormalized: "any";
                defaultValueRaw: "#00b0e8";
                defaultValueNormalized: "#00b0e8";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            customBindings: Array<FmodModelRef<"ControlSurfaceCustomBindings">>;
            protocols: Array<FmodModelRef<"ControlSurfaceProtocol">>;
        };
        relationshipMeta: {
            customBindings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceCustomBindings";
                destinationTypeNormalized: "ControlSurfaceCustomBindings";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            protocols: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceProtocol";
                destinationTypeNormalized: "ControlSurfaceProtocol";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MackieExtendedControlSurfaceModelEntity {
        name: "MackieExtendedControlSurface";
        superEntities: readonly ["ControlSurface"];
        isAbstract: false;
        isGlobal: true;
        isSingleton: false;
        properties: {
            color: any;
            name: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "Color";
                dataTypeNormalized: "any";
                defaultValueRaw: "#00b0e8";
                defaultValueNormalized: "#00b0e8";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            customBindings: Array<FmodModelRef<"ControlSurfaceCustomBindings">>;
            protocols: Array<FmodModelRef<"ControlSurfaceProtocol">>;
        };
        relationshipMeta: {
            customBindings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceCustomBindings";
                destinationTypeNormalized: "ControlSurfaceCustomBindings";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            protocols: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceProtocol";
                destinationTypeNormalized: "ControlSurfaceProtocol";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ManagedObjectModelEntity {
        name: "ManagedObject";
        superEntities: readonly [];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
        };
        relationshipMeta: {
        };
    }

    interface MarkerModelEntity {
        name: "Marker";
        superEntities: readonly ["AutomatableObject", "Selectable"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            position: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            position: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodModelRef<"MarkerTrack"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            timeline: FmodModelRef<"Timeline"> | null;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface MarkerTrackModelEntity {
        name: "MarkerTrack";
        superEntities: readonly ["Track"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiTrackHeight: number;
        };
        propertyMeta: {
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            event: FmodModelRef<"Event"> | null;
            markers: Array<FmodModelRef<"Marker">>;
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            markers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Marker";
                destinationTypeNormalized: "Marker";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MasterAssetFolderModelEntity {
        name: "MasterAssetFolder";
        superEntities: readonly ["EncodableAsset"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
            assetDirectory: string;
            assetPath: string;
            color: string;
            dawProjectSourceDirectory: string;
            note: string;
            streamingAssetThresholdLength: any;
        };
        propertyMeta: {
            assetDirectory: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            assetPath: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            dawProjectSourceDirectory: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            streamingAssetThresholdLength: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "10";
                defaultValueNormalized: 10;
            };
        };
        relationships: {
            assets: Array<FmodModelRef<"Asset">>;
            encodingSettings: Array<FmodModelRef<"EncodingSetting">>;
            masterAssetFolder: FmodModelRef<"MasterAssetFolder"> | null;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            assets: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Asset";
                destinationTypeNormalized: "Asset";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            encodingSettings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "EncodingSetting";
                destinationTypeNormalized: "EncodingSetting";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masterAssetFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterAssetFolder";
                destinationTypeNormalized: "MasterAssetFolder";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface MasterBankFolderModelEntity {
        name: "MasterBankFolder";
        superEntities: readonly ["BankFolder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Master";
                defaultValueNormalized: "Master";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface MasterEffectPresetFolderModelEntity {
        name: "MasterEffectPresetFolder";
        superEntities: readonly ["EffectPresetFolder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Master";
                defaultValueNormalized: "Master";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface MasterEventFolderModelEntity {
        name: "MasterEventFolder";
        superEntities: readonly ["EventFolder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface MasterParameterPresetFolderModelEntity {
        name: "MasterParameterPresetFolder";
        superEntities: readonly ["ParameterPresetFolder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Master";
                defaultValueNormalized: "Master";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface MasterSandboxFolderModelEntity {
        name: "MasterSandboxFolder";
        superEntities: readonly ["SandboxFolder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Master";
                defaultValueNormalized: "Master";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface MasterTagFolderModelEntity {
        name: "MasterTagFolder";
        superEntities: readonly ["TagFolder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface MasterTrackModelEntity {
        name: "MasterTrack";
        superEntities: readonly ["GroupTrack"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            streaming: boolean;
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
        };
        propertyMeta: {
            streaming: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiAutomationTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automationTracks: Array<FmodModelRef<"AutomationTrack">>;
            event: FmodModelRef<"Event"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            mixerGroup: FmodModelRef<"EventMixerMaster"> | null;
            modules: Array<FmodModelRef<"Module">>;
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            automationTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationTrack";
                destinationTypeNormalized: "AutomationTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixerGroup: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventMixerMaster";
                destinationTypeNormalized: "EventMixerMaster";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MeteringSettingsModelEntity {
        name: "MeteringSettings";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: true;
        isSingleton: true;
        properties: {
            meterChannelOrdering: number;
        };
        propertyMeta: {
            meterChannelOrdering: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "2";
                defaultValueNormalized: 2;
            };
        };
        relationships: {
        };
        relationshipMeta: {
        };
    }

    interface MidiControlSurfaceProtocolModelEntity {
        name: "MidiControlSurfaceProtocol";
        superEntities: readonly ["ControlSurfaceProtocol"];
        isAbstract: false;
        isGlobal: true;
        isSingleton: false;
        properties: {
            inputPort: number;
            inputPortName: string;
            outputPort: number;
            outputPortName: string;
        };
        propertyMeta: {
            inputPort: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            inputPortName: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            outputPort: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            outputPortName: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            controlSurface: FmodModelRef<"ControlSurface"> | null;
        };
        relationshipMeta: {
            controlSurface: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurface";
                destinationTypeNormalized: "ControlSurface";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface MixerModelEntity {
        name: "Mixer";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            masterBus: FmodModelRef<"MixerMaster"> | null;
            port: Array<FmodModelRef<"MixerPort">>;
            snapshotList: FmodModelRef<"SnapshotList"> | null;
            snapshots: Array<FmodModelRef<"Snapshot">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
            vca: Array<FmodModelRef<"MixerVCA">>;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            masterBus: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerMaster";
                destinationTypeNormalized: "MixerMaster";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            port: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerPort";
                destinationTypeNormalized: "MixerPort";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotList: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "SnapshotList";
                destinationTypeNormalized: "SnapshotList";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshots: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Snapshot";
                destinationTypeNormalized: "Snapshot";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            vca: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface MixerBusModelEntity {
        name: "MixerBus";
        superEntities: readonly ["MixerStrip"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            note: string;
            overridingInputFormat: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            overridingInputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodModelRef<"MixerBusEffectChain"> | null;
            masters: Array<FmodModelRef<"MixerVCA">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            output: FmodModelRef<"MixerGroup"> | null;
            panner: FmodModelRef<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            effectChain: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusEffectChain";
                destinationTypeNormalized: "MixerBusEffectChain";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            output: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerGroup";
                destinationTypeNormalized: "MixerGroup";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            panner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusPanner";
                destinationTypeNormalized: "MixerBusPanner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerBusEffectChainModelEntity {
        name: "MixerBusEffectChain";
        superEntities: readonly ["EffectChain"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            bus: FmodModelRef<"MixerBus"> | null;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            effects: Array<FmodModelRef<"MixerEffect">>;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            bus: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBus";
                destinationTypeNormalized: "MixerBus";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            effects: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerEffect";
                destinationTypeNormalized: "MixerEffect";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerBusFaderModelEntity {
        name: "MixerBusFader";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerBusPannerModelEntity {
        name: "MixerBusPanner";
        superEntities: readonly ["PannerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            LFEUpmixEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            disabledSpeakers: {
                dataTypeRaw: "Flags";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            overridingOutputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            stereoLeftPan: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            stereoPan: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            stereoRightPan: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            stereoToSurroundPanMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            surroundHeightBlend: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            surroundLFELevel: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            surroundPanDirection: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            surroundPanExtent: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "360";
                defaultValueNormalized: 360;
            };
            surroundStereoAxis: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            surroundStereoSeparation: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "60";
                defaultValueNormalized: 60;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            bus: FmodModelRef<"MixerBus"> | null;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            bus: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBus";
                destinationTypeNormalized: "MixerBus";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!bus";
                isRequiredNormalized: "!bus";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerEffectModelEntity {
        name: "MixerEffect";
        superEntities: readonly ["AutomatableObject", "PlatformSpecificItem"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerGroupModelEntity {
        name: "MixerGroup";
        superEntities: readonly ["MixerBus"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            instanceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            maxInstances: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            overridingInputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodModelRef<"MixerBusEffectChain"> | null;
            input: Array<FmodModelRef<"MixerBus">>;
            masters: Array<FmodModelRef<"MixerVCA">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            output: FmodModelRef<"MixerGroup"> | null;
            panner: FmodModelRef<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            effectChain: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusEffectChain";
                destinationTypeNormalized: "MixerBusEffectChain";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            input: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerBus";
                destinationTypeNormalized: "MixerBus";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            output: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerGroup";
                destinationTypeNormalized: "MixerGroup";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            panner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusPanner";
                destinationTypeNormalized: "MixerBusPanner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerInputModelEntity {
        name: "MixerInput";
        superEntities: readonly ["MixerBus"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            note: string;
            overridingInputFormat: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            overridingInputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodModelRef<"MixerBusEffectChain"> | null;
            event: FmodModelRef<"Event"> | null;
            masters: Array<FmodModelRef<"MixerVCA">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            output: FmodModelRef<"MixerGroup"> | null;
            panner: FmodModelRef<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            effectChain: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusEffectChain";
                destinationTypeNormalized: "MixerBusEffectChain";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            output: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerGroup";
                destinationTypeNormalized: "MixerGroup";
                isRequiredRaw: "!event.folder.isOfType('Event')";
                isRequiredNormalized: "!event.folder.isOfType('Event')";
            };
            panner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusPanner";
                destinationTypeNormalized: "MixerBusPanner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerMasterModelEntity {
        name: "MixerMaster";
        superEntities: readonly ["MixerGroup"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            instanceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            maxInstances: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Mixer Master";
                defaultValueNormalized: "Mixer Master";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            overridingInputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodModelRef<"MixerBusEffectChain"> | null;
            input: Array<FmodModelRef<"MixerBus">>;
            masters: Array<FmodModelRef<"MixerVCA">>;
            mixer: FmodModelRef<"Mixer"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            output: FmodModelRef<"MixerGroup"> | null;
            panner: FmodModelRef<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            effectChain: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusEffectChain";
                destinationTypeNormalized: "MixerBusEffectChain";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            input: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerBus";
                destinationTypeNormalized: "MixerBus";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixer: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Mixer";
                destinationTypeNormalized: "Mixer";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            output: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerGroup";
                destinationTypeNormalized: "MixerGroup";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            panner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusPanner";
                destinationTypeNormalized: "MixerBusPanner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerPortModelEntity {
        name: "MixerPort";
        superEntities: readonly ["MixerGroup"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            instanceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            maxInstances: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            overridingInputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            portType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodModelRef<"MixerBusEffectChain"> | null;
            input: Array<FmodModelRef<"MixerBus">>;
            masters: Array<FmodModelRef<"MixerVCA">>;
            mixer: FmodModelRef<"Mixer"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            output: FmodModelRef<"MixerGroup"> | null;
            panner: FmodModelRef<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            effectChain: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusEffectChain";
                destinationTypeNormalized: "MixerBusEffectChain";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            input: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerBus";
                destinationTypeNormalized: "MixerBus";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixer: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Mixer";
                destinationTypeNormalized: "Mixer";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            output: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerGroup";
                destinationTypeNormalized: "MixerGroup";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            panner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusPanner";
                destinationTypeNormalized: "MixerBusPanner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerReturnModelEntity {
        name: "MixerReturn";
        superEntities: readonly ["MixerBus"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
            overridingInputFormat: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            overridingInputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            effectChain: FmodModelRef<"MixerBusEffectChain"> | null;
            input: Array<FmodModelRef<"MixerSend">>;
            masters: Array<FmodModelRef<"MixerVCA">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            output: FmodModelRef<"MixerGroup"> | null;
            panner: FmodModelRef<"MixerBusPanner"> | null;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            effectChain: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusEffectChain";
                destinationTypeNormalized: "MixerBusEffectChain";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            input: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerSend";
                destinationTypeNormalized: "MixerSend";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            output: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerGroup";
                destinationTypeNormalized: "MixerGroup";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            panner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerBusPanner";
                destinationTypeNormalized: "MixerBusPanner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerSendModelEntity {
        name: "MixerSend";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            inputFormat: number;
            level: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            inputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            level: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "-80";
                defaultValueNormalized: -80;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            mixerReturn: FmodModelRef<"MixerReturn"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixerReturn: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerReturn";
                destinationTypeNormalized: "MixerReturn";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerStripModelEntity {
        name: "MixerStrip";
        superEntities: readonly ["AutomatableObject", "Notable", "Colorable", "ProfilerTrackable", "ProfilerGraphable"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            note: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            masters: Array<FmodModelRef<"MixerVCA">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MixerVCAModelEntity {
        name: "MixerVCA";
        superEntities: readonly ["MixerStrip"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            volume: number;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            masters: Array<FmodModelRef<"MixerVCA">>;
            mixer: FmodModelRef<"Mixer"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            slaves: Array<FmodModelRef<"MixerStrip">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            uiMixerView: Array<FmodModelRef<"UiMixerView">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerVCA";
                destinationTypeNormalized: "MixerVCA";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixer: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Mixer";
                destinationTypeNormalized: "Mixer";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            slaves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerStrip";
                destinationTypeNormalized: "MixerStrip";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiMixerView: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UiMixerView";
                destinationTypeNormalized: "UiMixerView";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ModulatorModelEntity {
        name: "Modulator";
        superEntities: readonly ["AutomatableObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            nameOfPropertyBeingModulated: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            nameOfPropertyBeingModulated: {
                dataTypeRaw: "Utf8";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            objectBeingModulated: FmodModelRef<"AutomatableObject"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            objectBeingModulated: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomatableObject";
                destinationTypeNormalized: "AutomatableObject";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ModuleModelEntity {
        name: "Module";
        superEntities: readonly ["AutomatableObject", "Selectable", "Triggerable", "Colorable"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Blue";
                defaultValueNormalized: "Blue";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            parameter: FmodModelRef<"Parameter"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MultiSoundModelEntity {
        name: "MultiSound";
        superEntities: readonly ["Sound", "Loopable", "Selector"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Cyan";
                defaultValueNormalized: "Cyan";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            looping: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            playCount: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            playbackMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            playlistMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"MultiSound"> | null;
            parameter: FmodModelRef<"Parameter"> | null;
            playPercentage: FmodModelRef<"PlayPercentage"> | null;
            playPercentages: Array<FmodModelRef<"PlayPercentage">>;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            scattererOwner: FmodModelRef<"SoundScatterer"> | null;
            selectables: Array<FmodModelRef<"Selectable">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            sounds: Array<FmodModelRef<"Sound">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "!owner && !scattererOwner";
                isRequiredNormalized: "!owner && !scattererOwner";
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "!audioTrack && !scattererOwner";
                isRequiredNormalized: "!audioTrack && !scattererOwner";
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "!owner && !scattererOwner";
                isRequiredNormalized: "!owner && !scattererOwner";
            };
            playPercentage: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "PlayPercentage";
                destinationTypeNormalized: "PlayPercentage";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            playPercentages: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "PlayPercentage";
                destinationTypeNormalized: "PlayPercentage";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            scattererOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "SoundScatterer";
                destinationTypeNormalized: "SoundScatterer";
                isRequiredRaw: "!audioTrack && !owner";
                isRequiredNormalized: "!audioTrack && !owner";
            };
            selectables: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Selectable";
                destinationTypeNormalized: "Selectable";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            sounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Sound";
                destinationTypeNormalized: "Sound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface MultibandEqEffectModelEntity {
        name: "MultibandEqEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            filterTypeA: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            filterTypeB: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            filterTypeC: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            filterTypeD: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            filterTypeE: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            frequencyA: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "660";
                defaultValueNormalized: 660;
            };
            frequencyB: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "40";
                defaultValueNormalized: 40;
            };
            frequencyC: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "11000";
                defaultValueNormalized: 11000;
            };
            frequencyD: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "160";
                defaultValueNormalized: 160;
            };
            frequencyE: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "2700";
                defaultValueNormalized: 2700;
            };
            gainA: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gainB: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gainC: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gainD: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            gainE: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            qualityA: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0.7070000171661377";
                defaultValueNormalized: 0.7070000171661377;
            };
            qualityB: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0.7070000171661377";
                defaultValueNormalized: 0.7070000171661377;
            };
            qualityC: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0.7070000171661377";
                defaultValueNormalized: 0.7070000171661377;
            };
            qualityD: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0.7070000171661377";
                defaultValueNormalized: 0.7070000171661377;
            };
            qualityE: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0.7070000171661377";
                defaultValueNormalized: 0.7070000171661377;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface NamedMarkerModelEntity {
        name: "NamedMarker";
        superEntities: readonly ["Marker", "TransitionDestination"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            name: string;
            position: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            position: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodModelRef<"MarkerTrack"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            references: Array<FmodModelRef<"TransitionTimelineOwner">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            timeline: FmodModelRef<"Timeline"> | null;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            references: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TransitionTimelineOwner";
                destinationTypeNormalized: "TransitionTimelineOwner";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface NamedWorkspaceBasedSourceControlProviderModelEntity {
        name: "NamedWorkspaceBasedSourceControlProvider";
        superEntities: readonly ["WorkspaceBasedSourceControlProvider"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            repositoryLocation: string;
            workspaceName: string;
            workspaceRoot: string;
        };
        propertyMeta: {
            repositoryLocation: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            workspaceName: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            workspaceRoot: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface NotableModelEntity {
        name: "Notable";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            note: string;
        };
        propertyMeta: {
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
        };
        relationshipMeta: {
        };
    }

    interface ObjectSpatialiserEffectModelEntity {
        name: "ObjectSpatialiserEffect";
        superEntities: readonly ["SpatialEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            derivedMaximumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            derivedMinimumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            distanceRolloffType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            extentMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            maximumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "20";
                defaultValueNormalized: 20;
            };
            minimumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            minimumExtent: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            overrideRange: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            soundSize: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ObsoleteObjectModelEntity {
        name: "ObsoleteObject";
        superEntities: readonly [];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
        };
        relationshipMeta: {
        };
    }

    interface OscControlSurfaceProtocolModelEntity {
        name: "OscControlSurfaceProtocol";
        superEntities: readonly ["ControlSurfaceProtocol"];
        isAbstract: false;
        isGlobal: true;
        isSingleton: false;
        properties: {
            address: string;
            inputPort: number;
            outputPort: number;
        };
        propertyMeta: {
            address: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            inputPort: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            outputPort: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            controlSurface: FmodModelRef<"ControlSurface"> | null;
        };
        relationshipMeta: {
            controlSurface: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurface";
                destinationTypeNormalized: "ControlSurface";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface PannerEffectModelEntity {
        name: "PannerEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            LFEUpmixEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            disabledSpeakers: {
                dataTypeRaw: "Flags";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            overridingOutputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            stereoLeftPan: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            stereoPan: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            stereoRightPan: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            stereoToSurroundPanMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            surroundHeightBlend: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            surroundLFELevel: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            surroundPanDirection: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            surroundPanExtent: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "360";
                defaultValueNormalized: 360;
            };
            surroundStereoAxis: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            surroundStereoSeparation: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "60";
                defaultValueNormalized: 60;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ParamEqEffectModelEntity {
        name: "ParamEqEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bandwidth: number;
            bypass: boolean;
            centreFrequency: number;
            gain: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bandwidth: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            centreFrequency: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "2000";
                defaultValueNormalized: 2000;
            };
            gain: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ParameterModelEntity {
        name: "Parameter";
        superEntities: readonly ["AutomatableObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiLastHorizontalScrollBarValue: number;
            uiLastRulerScaleRatio: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            uiLastHorizontalScrollBarValue: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiLastRulerScaleRatio: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            event: FmodModelRef<"Event"> | null;
            eventSelector: FmodModelRef<"Event"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            modules: Array<FmodModelRef<"Module">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            eventSelector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ParameterConditionModelEntity {
        name: "ParameterCondition";
        superEntities: readonly ["TriggerCondition"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            isInverted: boolean;
            maximum: any;
            minimum: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            isInverted: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            maximum: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            minimum: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"Triggerable"> | null;
            parameter: FmodModelRef<"GameParameter"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Triggerable";
                destinationTypeNormalized: "Triggerable";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "GameParameter";
                destinationTypeNormalized: "GameParameter";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ParameterPresetModelEntity {
        name: "ParameterPreset";
        superEntities: readonly ["WorkspaceItem"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"ParameterPresetFolder"> | null;
            parameter: FmodModelRef<"GameParameter"> | null;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ParameterPresetFolder";
                destinationTypeNormalized: "ParameterPresetFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "GameParameter";
                destinationTypeNormalized: "GameParameter";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface ParameterPresetFolderModelEntity {
        name: "ParameterPresetFolder";
        superEntities: readonly ["Folder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ParameterPropertyModelEntity {
        name: "ParameterProperty";
        superEntities: readonly ["AutomatableObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            position: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            position: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EventSound"> | null;
            parameter: FmodModelRef<"ParameterProxy"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventSound";
                destinationTypeNormalized: "EventSound";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ParameterProxy";
                destinationTypeNormalized: "ParameterProxy";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ParameterPrototypeModelEntity {
        name: "ParameterPrototype";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            automationCurves: Array<FmodModelRef<"AutomationCurve">>;
        };
        relationshipMeta: {
            automationCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationCurve";
                destinationTypeNormalized: "AutomationCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ParameterProxyModelEntity {
        name: "ParameterProxy";
        superEntities: readonly ["Parameter", "Selectable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiLastHorizontalScrollBarValue: number;
            uiLastRulerScaleRatio: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            uiLastHorizontalScrollBarValue: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiLastRulerScaleRatio: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            event: FmodModelRef<"Event"> | null;
            eventSelector: FmodModelRef<"Event"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            modules: Array<FmodModelRef<"Module">>;
            preset: FmodModelRef<"GameParameter"> | null;
            references: Array<FmodModelRef<"ParameterProperty">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            eventSelector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            preset: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "GameParameter";
                destinationTypeNormalized: "GameParameter";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            references: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ParameterProperty";
                destinationTypeNormalized: "ParameterProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface PerforceProviderModelEntity {
        name: "PerforceProvider";
        superEntities: readonly ["NamedWorkspaceBasedSourceControlProvider"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            p4Charset: string;
            p4Host: string;
            p4Password: string;
            p4Port: string;
            p4User: string;
            p4WorkspaceForm: string;
            repositoryLocation: string;
            workspaceName: string;
            workspaceRoot: string;
        };
        propertyMeta: {
            p4Charset: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            p4Host: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            p4Password: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            p4Port: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            p4User: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            p4WorkspaceForm: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            repositoryLocation: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            workspaceName: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            workspaceRoot: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface PitchShifterEffectModelEntity {
        name: "PitchShifterEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            fftSize: number;
            maxChannels: number;
            overlap: number;
            pitch: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            fftSize: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1024";
                defaultValueNormalized: 1024;
            };
            maxChannels: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            overlap: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "4";
                defaultValueNormalized: 4;
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0.5";
                defaultValueNormalized: 0.5;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface PlatformModelEntity {
        name: "Platform";
        superEntities: readonly ["Encodable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            buildMetadataOnly: boolean;
            hardwareType: number;
            name: string;
            speakerFormat: number;
            subDirectory: string;
        };
        propertyMeta: {
            buildMetadataOnly: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            hardwareType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            speakerFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            subDirectory: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            associatedSettings: Array<FmodModelRef<"EncodingSetting">>;
            encodingSettings: FmodModelRef<"EncodingSetting"> | null;
            excludedItems: Array<FmodModelRef<"PlatformSpecificItem">>;
            uiActivePlatformOwner: FmodModelRef<"ProjectSettings"> | null;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            associatedSettings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "EncodingSetting";
                destinationTypeNormalized: "EncodingSetting";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            encodingSettings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EncodingSetting";
                destinationTypeNormalized: "EncodingSetting";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            excludedItems: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "PlatformSpecificItem";
                destinationTypeNormalized: "PlatformSpecificItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            uiActivePlatformOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProjectSettings";
                destinationTypeNormalized: "ProjectSettings";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface PlatformSpecificItemModelEntity {
        name: "PlatformSpecificItem";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
        };
        relationshipMeta: {
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface PlayPercentageModelEntity {
        name: "PlayPercentage";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            percentage: number;
        };
        propertyMeta: {
            percentage: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            owner: FmodModelRef<"MultiSound"> | null;
            sound: FmodModelRef<"Sound"> | null;
        };
        relationshipMeta: {
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            sound: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Sound";
                destinationTypeNormalized: "Sound";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface PluginModelEntity {
        name: "Plugin";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            identifier: string;
        };
        propertyMeta: {
            identifier: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            owner: FmodModelRef<"PluginOwner"> | null;
            pluginParameters: Array<FmodModelRef<"PluginParameter">>;
        };
        relationshipMeta: {
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "PluginOwner";
                destinationTypeNormalized: "PluginOwner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            pluginParameters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "PluginParameter";
                destinationTypeNormalized: "PluginParameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface PluginEffectModelEntity {
        name: "PluginEffect";
        superEntities: readonly ["MixerEffect", "PluginOwner", "SidechainTarget"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            plugin: FmodModelRef<"Plugin"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            sidechains: Array<FmodModelRef<"Sidechain">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            plugin: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Plugin";
                destinationTypeNormalized: "Plugin";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            sidechains: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Sidechain";
                destinationTypeNormalized: "Sidechain";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface PluginOwnerModelEntity {
        name: "PluginOwner";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            plugin: FmodModelRef<"Plugin"> | null;
        };
        relationshipMeta: {
            plugin: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Plugin";
                destinationTypeNormalized: "Plugin";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface PluginParameterModelEntity {
        name: "PluginParameter";
        superEntities: readonly ["AutomatableObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            name: string;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: any;
        };
        propertyMeta: {
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            value: {
                dataTypeRaw: "Variant";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            plugin: FmodModelRef<"Plugin"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            plugin: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Plugin";
                destinationTypeNormalized: "Plugin";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface PluginSettingsModelEntity {
        name: "PluginSettings";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: true;
        isSingleton: true;
        properties: {
            pluginFolders: any;
        };
        propertyMeta: {
            pluginFolders: {
                dataTypeRaw: "StringList";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
        };
        relationshipMeta: {
        };
    }

    interface PluginSoundModelEntity {
        name: "PluginSound";
        superEntities: readonly ["Sound", "PluginOwner"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Magenta";
                defaultValueNormalized: "Magenta";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"MultiSound"> | null;
            parameter: FmodModelRef<"Parameter"> | null;
            playPercentage: FmodModelRef<"PlayPercentage"> | null;
            plugin: FmodModelRef<"Plugin"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "!audioTrack";
                isRequiredNormalized: "!audioTrack";
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            playPercentage: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "PlayPercentage";
                destinationTypeNormalized: "PlayPercentage";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            plugin: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Plugin";
                destinationTypeNormalized: "Plugin";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ProfilerFolderModelEntity {
        name: "ProfilerFolder";
        superEntities: readonly ["Folder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ProfilerGraphModelEntity {
        name: "ProfilerGraph";
        superEntities: readonly ["AutomationTrack"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            graphType: number;
            instanceId: number;
            uiTrackHeight: number;
        };
        propertyMeta: {
            graphType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            instanceId: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automator: FmodModelRef<"Automator"> | null;
            objectBeingGraphed: FmodModelRef<"ProfilerGraphable"> | null;
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            automator: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            objectBeingGraphed: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProfilerGraphable";
                destinationTypeNormalized: "ProfilerGraphable";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ProfilerGraphableModelEntity {
        name: "ProfilerGraphable";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
        };
        relationshipMeta: {
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ProfilerRecordingMarkerModelEntity {
        name: "ProfilerRecordingMarker";
        superEntities: readonly ["NamedMarker"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            name: string;
            position: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            position: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodModelRef<"MarkerTrack"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            references: Array<FmodModelRef<"TransitionTimelineOwner">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            timeline: FmodModelRef<"Timeline"> | null;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            references: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TransitionTimelineOwner";
                destinationTypeNormalized: "TransitionTimelineOwner";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface ProfilerSessionModelEntity {
        name: "ProfilerSession";
        superEntities: readonly ["Event"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            isDefault: boolean;
            name: string;
            note: string;
            outputFormat: number;
            uiMarkerTracksVisible: boolean;
            uiMaxMarkerTracksVisible: number;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            isDefault: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            outputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            uiMarkerTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            uiMaxMarkerTracksVisible: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "8";
                defaultValueNormalized: 8;
            };
        };
        relationships: {
            automatableProperties: FmodModelRef<"EventAutomatableProperties"> | null;
            banks: Array<FmodModelRef<"Bank">>;
            clonedEvents: Array<FmodModelRef<"Event">>;
            commandSounds: Array<FmodModelRef<"CommandSound">>;
            defaultEvent: FmodModelRef<"Event"> | null;
            folder: FmodModelRef<"ProfilerFolder"> | null;
            groupTracks: Array<FmodModelRef<"GroupTrack">>;
            items: Array<FmodModelRef<"Event">>;
            markerTracks: Array<FmodModelRef<"MarkerTrack">>;
            masterTrack: FmodModelRef<"MasterTrack"> | null;
            mixer: FmodModelRef<"EventMixer"> | null;
            mixerInput: FmodModelRef<"MixerInput"> | null;
            parameters: Array<FmodModelRef<"Parameter">>;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerSystemTrack: FmodModelRef<"ProfilerSystemTrack"> | null;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            profilerTracks: Array<FmodModelRef<"ProfilerTrack">>;
            references: Array<FmodModelRef<"EventSound">>;
            returnTracks: Array<FmodModelRef<"ReturnTrack">>;
            sandboxEmitters: Array<FmodModelRef<"SandboxEmitter">>;
            selectables: Array<FmodModelRef<"Selectable">>;
            tags: Array<FmodModelRef<"Tag">>;
            timeline: FmodModelRef<"Timeline"> | null;
            uiLastParameterSelection: FmodModelRef<"Parameter"> | null;
            userProperties: Array<FmodModelRef<"UserProperty">>;
        };
        relationshipMeta: {
            automatableProperties: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventAutomatableProperties";
                destinationTypeNormalized: "EventAutomatableProperties";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            banks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Bank";
                destinationTypeNormalized: "Bank";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            clonedEvents: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            commandSounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "CommandSound";
                destinationTypeNormalized: "CommandSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            defaultEvent: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProfilerFolder";
                destinationTypeNormalized: "ProfilerFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            groupTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "GroupTrack";
                destinationTypeNormalized: "GroupTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masterTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterTrack";
                destinationTypeNormalized: "MasterTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            mixer: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventMixer";
                destinationTypeNormalized: "EventMixer";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            mixerInput: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerInput";
                destinationTypeNormalized: "MixerInput";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            parameters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerSystemTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProfilerSystemTrack";
                destinationTypeNormalized: "ProfilerSystemTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            references: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "EventSound";
                destinationTypeNormalized: "EventSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            returnTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ReturnTrack";
                destinationTypeNormalized: "ReturnTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            sandboxEmitters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SandboxEmitter";
                destinationTypeNormalized: "SandboxEmitter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selectables: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Selectable";
                destinationTypeNormalized: "Selectable";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            tags: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Tag";
                destinationTypeNormalized: "Tag";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            uiLastParameterSelection: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            userProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UserProperty";
                destinationTypeNormalized: "UserProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ProfilerSessionFolderModelEntity {
        name: "ProfilerSessionFolder";
        superEntities: readonly ["ProfilerFolder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Profiler Sessions";
                defaultValueNormalized: "Profiler Sessions";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface ProfilerSystemTrackModelEntity {
        name: "ProfilerSystemTrack";
        superEntities: readonly ["ProfilerTrack"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
        };
        propertyMeta: {
            uiAutomationTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automationTracks: Array<FmodModelRef<"AutomationTrack">>;
            modules: Array<FmodModelRef<"Module">>;
            objectBeingTracked: FmodModelRef<"ProfilerTrackable"> | null;
            profilerSession: FmodModelRef<"ProfilerSession"> | null;
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            automationTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationTrack";
                destinationTypeNormalized: "AutomationTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            objectBeingTracked: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProfilerTrackable";
                destinationTypeNormalized: "ProfilerTrackable";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerSession: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProfilerSession";
                destinationTypeNormalized: "ProfilerSession";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ProfilerTrackModelEntity {
        name: "ProfilerTrack";
        superEntities: readonly ["AudioTrack"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
        };
        propertyMeta: {
            uiAutomationTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automationTracks: Array<FmodModelRef<"AutomationTrack">>;
            modules: Array<FmodModelRef<"Module">>;
            objectBeingTracked: FmodModelRef<"ProfilerTrackable"> | null;
            profilerSession: FmodModelRef<"ProfilerSession"> | null;
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            automationTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationTrack";
                destinationTypeNormalized: "AutomationTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            objectBeingTracked: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProfilerTrackable";
                destinationTypeNormalized: "ProfilerTrackable";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            profilerSession: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProfilerSession";
                destinationTypeNormalized: "ProfilerSession";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ProfilerTrackableModelEntity {
        name: "ProfilerTrackable";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
        };
        relationshipMeta: {
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ProgrammerSoundModelEntity {
        name: "ProgrammerSound";
        superEntities: readonly ["Sound", "Loopable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Magenta";
                defaultValueNormalized: "Magenta";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            looping: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            playCount: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            selectedKey: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"MultiSound"> | null;
            parameter: FmodModelRef<"Parameter"> | null;
            placeholder: FmodModelRef<"ProgrammerSoundPlaceholder"> | null;
            playPercentage: FmodModelRef<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "!audioTrack";
                isRequiredNormalized: "!audioTrack";
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            placeholder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProgrammerSoundPlaceholder";
                destinationTypeNormalized: "ProgrammerSoundPlaceholder";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            playPercentage: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "PlayPercentage";
                destinationTypeNormalized: "PlayPercentage";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ProgrammerSoundPlaceholderModelEntity {
        name: "ProgrammerSoundPlaceholder";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            programmerSounds: Array<FmodModelRef<"ProgrammerSound">>;
        };
        relationshipMeta: {
            programmerSounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProgrammerSound";
                destinationTypeNormalized: "ProgrammerSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ProjectSettingsModelEntity {
        name: "ProjectSettings";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
            openWindows: any;
            windowLayout: any;
        };
        propertyMeta: {
            openWindows: {
                dataTypeRaw: "StringList";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            windowLayout: {
                dataTypeRaw: "ByteArray";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            activeLocale: FmodModelRef<"Locale"> | null;
            activePlatform: FmodModelRef<"Platform"> | null;
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            activeLocale: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Locale";
                destinationTypeNormalized: "Locale";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            activePlatform: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface ProxyEffectModelEntity {
        name: "ProxyEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            inputFormat: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            inputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            preset: FmodModelRef<"EffectPreset"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            preset: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface QuantizableModelEntity {
        name: "Quantizable";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            quantizationInterval: number;
            transitionOffset: number;
        };
        propertyMeta: {
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            transitionOffset: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
        };
        relationshipMeta: {
        };
    }

    interface RandomizerModulatorModelEntity {
        name: "RandomizerModulator";
        superEntities: readonly ["Modulator"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            amount: number;
            nameOfPropertyBeingModulated: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            amount: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            nameOfPropertyBeingModulated: {
                dataTypeRaw: "Utf8";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            objectBeingModulated: FmodModelRef<"AutomatableObject"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            objectBeingModulated: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomatableObject";
                destinationTypeNormalized: "AutomatableObject";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ReferenceableDataModelEntity {
        name: "ReferenceableData";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            dataReferees: Array<FmodModelRef<"DataReferee">>;
        };
        relationshipMeta: {
            dataReferees: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "DataReferee";
                destinationTypeNormalized: "DataReferee";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface RegionModelEntity {
        name: "Region";
        superEntities: readonly ["Marker"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            length: any;
            position: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            position: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodModelRef<"MarkerTrack"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            timeline: FmodModelRef<"Timeline"> | null;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface ReturnTrackModelEntity {
        name: "ReturnTrack";
        superEntities: readonly ["AudioTrack", "PlatformSpecificItem"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
        };
        propertyMeta: {
            uiAutomationTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automationTracks: Array<FmodModelRef<"AutomationTrack">>;
            event: FmodModelRef<"Event"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            mixerReturn: FmodModelRef<"EventMixerReturn"> | null;
            modules: Array<FmodModelRef<"Module">>;
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            automationTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationTrack";
                destinationTypeNormalized: "AutomationTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixerReturn: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventMixerReturn";
                destinationTypeNormalized: "EventMixerReturn";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SFXReverbEffectModelEntity {
        name: "SFXReverbEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            HFDecayRatio: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "50";
                defaultValueNormalized: 50;
            };
            HFReference: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "5000";
                defaultValueNormalized: 5000;
            };
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            decayTime: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1500";
                defaultValueNormalized: 1500;
            };
            density: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            diffusion: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            dryLevel: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            earlyDelay: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "20";
                defaultValueNormalized: 20;
            };
            earlyLateMix: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "50";
                defaultValueNormalized: 50;
            };
            highCut: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "5000";
                defaultValueNormalized: 5000;
            };
            lateDelay: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "40";
                defaultValueNormalized: 40;
            };
            lowShelfFrequency: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "250";
                defaultValueNormalized: 250;
            };
            lowShelfGain: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            wetLevel: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "-6";
                defaultValueNormalized: -6;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SandboxEmitterModelEntity {
        name: "SandboxEmitter";
        superEntities: readonly ["SandboxPositionable", "SandboxParameterOwner"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            loopPlayback: boolean;
            positionX: number;
            positionZ: number;
            rotationY: number;
        };
        propertyMeta: {
            loopPlayback: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            positionX: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            positionZ: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            rotationY: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            event: FmodModelRef<"Event"> | null;
            sandboxParameters: Array<FmodModelRef<"SandboxParameter">>;
            scene: FmodModelRef<"SandboxScene"> | null;
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            sandboxParameters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SandboxParameter";
                destinationTypeNormalized: "SandboxParameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            scene: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "SandboxScene";
                destinationTypeNormalized: "SandboxScene";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SandboxFolderModelEntity {
        name: "SandboxFolder";
        superEntities: readonly ["Folder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SandboxListenerModelEntity {
        name: "SandboxListener";
        superEntities: readonly ["SandboxPositionable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            positionX: number;
            positionZ: number;
            rotationY: number;
        };
        propertyMeta: {
            positionX: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            positionZ: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            rotationY: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            scene: FmodModelRef<"SandboxScene"> | null;
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            scene: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "SandboxScene";
                destinationTypeNormalized: "SandboxScene";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SandboxParameterModelEntity {
        name: "SandboxParameter";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            parameterValue: number;
        };
        propertyMeta: {
            parameterValue: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            parameter: FmodModelRef<"GameParameter"> | null;
            parameterOwner: FmodModelRef<"SandboxParameterOwner"> | null;
        };
        relationshipMeta: {
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "GameParameter";
                destinationTypeNormalized: "GameParameter";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            parameterOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "SandboxParameterOwner";
                destinationTypeNormalized: "SandboxParameterOwner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface SandboxParameterOwnerModelEntity {
        name: "SandboxParameterOwner";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            sandboxParameters: Array<FmodModelRef<"SandboxParameter">>;
        };
        relationshipMeta: {
            sandboxParameters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SandboxParameter";
                destinationTypeNormalized: "SandboxParameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SandboxPositionableModelEntity {
        name: "SandboxPositionable";
        superEntities: readonly ["Selectable"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            positionX: number;
            positionZ: number;
            rotationY: number;
        };
        propertyMeta: {
            positionX: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            positionZ: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            rotationY: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SandboxSceneModelEntity {
        name: "SandboxScene";
        superEntities: readonly ["Event", "SandboxParameterOwner"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            isDefault: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            outputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            uiLastSceneCenterX: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiLastSceneCenterZ: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiLastSceneScale: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "2";
                defaultValueNormalized: 2;
            };
            uiMarkerTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            uiMaxMarkerTracksVisible: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "8";
                defaultValueNormalized: 8;
            };
        };
        relationships: {
            automatableProperties: FmodModelRef<"EventAutomatableProperties"> | null;
            banks: Array<FmodModelRef<"Bank">>;
            clonedEvents: Array<FmodModelRef<"Event">>;
            commandSounds: Array<FmodModelRef<"CommandSound">>;
            defaultEvent: FmodModelRef<"Event"> | null;
            emitters: Array<FmodModelRef<"SandboxEmitter">>;
            folder: FmodModelRef<"SandboxFolder"> | null;
            groupTracks: Array<FmodModelRef<"GroupTrack">>;
            items: Array<FmodModelRef<"Event">>;
            listeners: Array<FmodModelRef<"SandboxListener">>;
            markerTracks: Array<FmodModelRef<"MarkerTrack">>;
            masterTrack: FmodModelRef<"MasterTrack"> | null;
            mixer: FmodModelRef<"EventMixer"> | null;
            mixerInput: FmodModelRef<"MixerInput"> | null;
            parameters: Array<FmodModelRef<"Parameter">>;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            references: Array<FmodModelRef<"EventSound">>;
            returnTracks: Array<FmodModelRef<"ReturnTrack">>;
            sandboxEmitters: Array<FmodModelRef<"SandboxEmitter">>;
            sandboxParameters: Array<FmodModelRef<"SandboxParameter">>;
            selectables: Array<FmodModelRef<"Selectable">>;
            tags: Array<FmodModelRef<"Tag">>;
            timeline: FmodModelRef<"Timeline"> | null;
            uiLastParameterSelection: FmodModelRef<"Parameter"> | null;
            userProperties: Array<FmodModelRef<"UserProperty">>;
        };
        relationshipMeta: {
            automatableProperties: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventAutomatableProperties";
                destinationTypeNormalized: "EventAutomatableProperties";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            banks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Bank";
                destinationTypeNormalized: "Bank";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            clonedEvents: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            commandSounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "CommandSound";
                destinationTypeNormalized: "CommandSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            defaultEvent: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            emitters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SandboxEmitter";
                destinationTypeNormalized: "SandboxEmitter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "SandboxFolder";
                destinationTypeNormalized: "SandboxFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            groupTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "GroupTrack";
                destinationTypeNormalized: "GroupTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            listeners: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SandboxListener";
                destinationTypeNormalized: "SandboxListener";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masterTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterTrack";
                destinationTypeNormalized: "MasterTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixer: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventMixer";
                destinationTypeNormalized: "EventMixer";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixerInput: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerInput";
                destinationTypeNormalized: "MixerInput";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            parameters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            references: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "EventSound";
                destinationTypeNormalized: "EventSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            returnTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ReturnTrack";
                destinationTypeNormalized: "ReturnTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            sandboxEmitters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SandboxEmitter";
                destinationTypeNormalized: "SandboxEmitter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            sandboxParameters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SandboxParameter";
                destinationTypeNormalized: "SandboxParameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selectables: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Selectable";
                destinationTypeNormalized: "Selectable";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            tags: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Tag";
                destinationTypeNormalized: "Tag";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            uiLastParameterSelection: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            userProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UserProperty";
                destinationTypeNormalized: "UserProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface ScriptBasedProviderModelEntity {
        name: "ScriptBasedProvider";
        superEntities: readonly ["SourceControlProvider"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            name: string;
            settings: string;
        };
        propertyMeta: {
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            settings: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface SelectableModelEntity {
        name: "Selectable";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SelectorModelEntity {
        name: "Selector";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            selectables: Array<FmodModelRef<"Selectable">>;
        };
        relationshipMeta: {
            selectables: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Selectable";
                destinationTypeNormalized: "Selectable";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SidechainModelEntity {
        name: "Sidechain";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            level: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            level: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            targets: Array<FmodModelRef<"SidechainTarget">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            targets: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SidechainTarget";
                destinationTypeNormalized: "SidechainTarget";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SidechainModulatorModelEntity {
        name: "SidechainModulator";
        superEntities: readonly ["Modulator", "SidechainTarget"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            amount: number;
            attackTime: number;
            levelMode: number;
            maximumThreshold: number;
            minimumThreshold: number;
            nameOfPropertyBeingModulated: any;
            releaseTime: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            amount: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            attackTime: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            levelMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            maximumThreshold: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "-6";
                defaultValueNormalized: -6;
            };
            minimumThreshold: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "-24";
                defaultValueNormalized: -24;
            };
            nameOfPropertyBeingModulated: {
                dataTypeRaw: "Utf8";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            releaseTime: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "200";
                defaultValueNormalized: 200;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            objectBeingModulated: FmodModelRef<"AutomatableObject"> | null;
            sidechains: Array<FmodModelRef<"Sidechain">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            objectBeingModulated: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomatableObject";
                destinationTypeNormalized: "AutomatableObject";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            sidechains: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Sidechain";
                destinationTypeNormalized: "Sidechain";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SidechainTargetModelEntity {
        name: "SidechainTarget";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            sidechains: Array<FmodModelRef<"Sidechain">>;
        };
        relationshipMeta: {
            sidechains: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Sidechain";
                destinationTypeNormalized: "Sidechain";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SilenceSoundModelEntity {
        name: "SilenceSound";
        superEntities: readonly ["Sound", "Loopable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Magenta";
                defaultValueNormalized: "Magenta";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            duration: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1000";
                defaultValueNormalized: 1000;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            looping: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            playCount: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"MultiSound"> | null;
            parameter: FmodModelRef<"Parameter"> | null;
            playPercentage: FmodModelRef<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "!audioTrack";
                isRequiredNormalized: "!audioTrack";
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            playPercentage: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "PlayPercentage";
                destinationTypeNormalized: "PlayPercentage";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SingleSoundModelEntity {
        name: "SingleSound";
        superEntities: readonly ["Sound", "Loopable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Blue";
                defaultValueNormalized: "Blue";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            looping: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            playCount: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioFile: FmodModelRef<"AudioFile"> | null;
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"MultiSound"> | null;
            parameter: FmodModelRef<"Parameter"> | null;
            playPercentage: FmodModelRef<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioFile: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioFile";
                destinationTypeNormalized: "AudioFile";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "!audioTrack";
                isRequiredNormalized: "!audioTrack";
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            playPercentage: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "PlayPercentage";
                destinationTypeNormalized: "PlayPercentage";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SnapshotModelEntity {
        name: "Snapshot";
        superEntities: readonly ["Event"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            behavior: number;
            color: string;
            isDefault: boolean;
            name: string;
            note: string;
            outputFormat: number;
            uiMarkerTracksVisible: boolean;
            uiMaxMarkerTracksVisible: number;
        };
        propertyMeta: {
            behavior: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            isDefault: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            outputFormat: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            uiMarkerTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            uiMaxMarkerTracksVisible: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "8";
                defaultValueNormalized: 8;
            };
        };
        relationships: {
            automatableProperties: FmodModelRef<"EventAutomatableProperties"> | null;
            banks: Array<FmodModelRef<"Bank">>;
            clonedEvents: Array<FmodModelRef<"Event">>;
            commandSounds: Array<FmodModelRef<"CommandSound">>;
            defaultEvent: FmodModelRef<"Event"> | null;
            folder: FmodModelRef<"SnapshotGroup"> | null;
            groupTracks: Array<FmodModelRef<"GroupTrack">>;
            items: Array<FmodModelRef<"Event">>;
            markerTracks: Array<FmodModelRef<"MarkerTrack">>;
            masterTrack: FmodModelRef<"MasterTrack"> | null;
            mixer: FmodModelRef<"Mixer"> | null;
            mixerInput: FmodModelRef<"MixerInput"> | null;
            parameters: Array<FmodModelRef<"Parameter">>;
            profilerGraphs: Array<FmodModelRef<"ProfilerGraph">>;
            profilerTrackers: Array<FmodModelRef<"ProfilerTrack">>;
            references: Array<FmodModelRef<"SnapshotModule">>;
            returnTracks: Array<FmodModelRef<"ReturnTrack">>;
            sandboxEmitters: Array<FmodModelRef<"SandboxEmitter">>;
            selectables: Array<FmodModelRef<"Selectable">>;
            snapshotMasterTrack: FmodModelRef<"SnapshotMasterTrack"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            snapshotTracks: Array<FmodModelRef<"SnapshotTrack">>;
            tags: Array<FmodModelRef<"Tag">>;
            timeline: FmodModelRef<"Timeline"> | null;
            uiLastParameterSelection: FmodModelRef<"Parameter"> | null;
            userProperties: Array<FmodModelRef<"UserProperty">>;
        };
        relationshipMeta: {
            automatableProperties: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EventAutomatableProperties";
                destinationTypeNormalized: "EventAutomatableProperties";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            banks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Bank";
                destinationTypeNormalized: "Bank";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            clonedEvents: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            commandSounds: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "CommandSound";
                destinationTypeNormalized: "CommandSound";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            defaultEvent: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "SnapshotGroup";
                destinationTypeNormalized: "SnapshotGroup";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            groupTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "GroupTrack";
                destinationTypeNormalized: "GroupTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masterTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterTrack";
                destinationTypeNormalized: "MasterTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixer: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Mixer";
                destinationTypeNormalized: "Mixer";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            mixerInput: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerInput";
                destinationTypeNormalized: "MixerInput";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            parameters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerGraphs: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerGraph";
                destinationTypeNormalized: "ProfilerGraph";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerTrackers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ProfilerTrack";
                destinationTypeNormalized: "ProfilerTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            references: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotModule";
                destinationTypeNormalized: "SnapshotModule";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            returnTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ReturnTrack";
                destinationTypeNormalized: "ReturnTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            sandboxEmitters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SandboxEmitter";
                destinationTypeNormalized: "SandboxEmitter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selectables: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Selectable";
                destinationTypeNormalized: "Selectable";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotMasterTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "SnapshotMasterTrack";
                destinationTypeNormalized: "SnapshotMasterTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotTrack";
                destinationTypeNormalized: "SnapshotTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            tags: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Tag";
                destinationTypeNormalized: "Tag";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            uiLastParameterSelection: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            userProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "UserProperty";
                destinationTypeNormalized: "UserProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SnapshotGroupModelEntity {
        name: "SnapshotGroup";
        superEntities: readonly ["Folder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SnapshotListModelEntity {
        name: "SnapshotList";
        superEntities: readonly ["SnapshotGroup"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
            mixer: FmodModelRef<"Mixer"> | null;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixer: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Mixer";
                destinationTypeNormalized: "Mixer";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface SnapshotMasterTrackModelEntity {
        name: "SnapshotMasterTrack";
        superEntities: readonly ["AudioTrack", "Colorable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            uiAutomationTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automationTracks: Array<FmodModelRef<"AutomationTrack">>;
            modules: Array<FmodModelRef<"Module">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshot: FmodModelRef<"Snapshot"> | null;
        };
        relationshipMeta: {
            automationTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationTrack";
                destinationTypeNormalized: "AutomationTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshot: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Snapshot";
                destinationTypeNormalized: "Snapshot";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface SnapshotModuleModelEntity {
        name: "SnapshotModule";
        superEntities: readonly ["EventSound"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Red";
                defaultValueNormalized: "Red";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            intensity: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            event: FmodModelRef<"Snapshot"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"MultiSound"> | null;
            parameter: FmodModelRef<"Parameter"> | null;
            parameters: Array<FmodModelRef<"ParameterProperty">>;
            playPercentage: FmodModelRef<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Snapshot";
                destinationTypeNormalized: "Snapshot";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "!audioTrack";
                isRequiredNormalized: "!audioTrack";
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            parameters: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ParameterProperty";
                destinationTypeNormalized: "ParameterProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            playPercentage: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "PlayPercentage";
                destinationTypeNormalized: "PlayPercentage";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SnapshotPropertyModelEntity {
        name: "SnapshotProperty";
        superEntities: readonly ["AutomatableObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            propertyName: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
            value: number;
        };
        propertyMeta: {
            propertyName: {
                dataTypeRaw: "Utf8";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            value: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automatableObject: FmodModelRef<"AutomatableObject"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            snapshot: FmodModelRef<"Snapshot"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automatableObject: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomatableObject";
                destinationTypeNormalized: "AutomatableObject";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshot: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Snapshot";
                destinationTypeNormalized: "Snapshot";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SnapshotTrackModelEntity {
        name: "SnapshotTrack";
        superEntities: readonly ["AudioTrack"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiAutomationTracksVisible: boolean;
            uiTrackHeight: number;
        };
        propertyMeta: {
            uiAutomationTracksVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            automationTracks: Array<FmodModelRef<"AutomationTrack">>;
            mixerStrip: FmodModelRef<"MixerStrip"> | null;
            modules: Array<FmodModelRef<"Module">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshot: FmodModelRef<"Snapshot"> | null;
        };
        relationshipMeta: {
            automationTracks: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationTrack";
                destinationTypeNormalized: "AutomationTrack";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixerStrip: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MixerStrip";
                destinationTypeNormalized: "MixerStrip";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshot: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Snapshot";
                destinationTypeNormalized: "Snapshot";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface SoundModelEntity {
        name: "Sound";
        superEntities: readonly ["Module"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Blue";
                defaultValueNormalized: "Blue";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"MultiSound"> | null;
            parameter: FmodModelRef<"Parameter"> | null;
            playPercentage: FmodModelRef<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "!audioTrack";
                isRequiredNormalized: "!audioTrack";
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            playPercentage: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "PlayPercentage";
                destinationTypeNormalized: "PlayPercentage";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SoundScattererModelEntity {
        name: "SoundScatterer";
        superEntities: readonly ["Sound"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Green";
                defaultValueNormalized: "Green";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumScatterDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "20";
                defaultValueNormalized: 20;
            };
            maximumTimeBetweenSounds: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1000";
                defaultValueNormalized: 1000;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumScatterDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            minimumTimeBetweenSounds: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "500";
                defaultValueNormalized: 500;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            pitch: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            pitchRandomization: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            polyphony: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "16";
                defaultValueNormalized: 16;
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            soundStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            spawnDelayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            spawnQuantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "2";
                defaultValueNormalized: 2;
            };
            spawnRate: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            totalSounds: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "33";
                defaultValueNormalized: 33;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            volume: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            volumeRandomization: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"MultiSound"> | null;
            parameter: FmodModelRef<"Parameter"> | null;
            playPercentage: FmodModelRef<"PlayPercentage"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            sound: FmodModelRef<"MultiSound"> | null;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "!audioTrack";
                isRequiredNormalized: "!audioTrack";
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            playPercentage: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "PlayPercentage";
                destinationTypeNormalized: "PlayPercentage";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            sound: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MultiSound";
                destinationTypeNormalized: "MultiSound";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SourceControlProviderModelEntity {
        name: "SourceControlProvider";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface SpatialEffectModelEntity {
        name: "SpatialEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            derivedMaximumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            derivedMinimumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            distanceRolloffType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            extentMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            maximumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "20";
                defaultValueNormalized: 20;
            };
            minimumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            minimumExtent: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            overrideRange: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            soundSize: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SpatialiserEffectModelEntity {
        name: "SpatialiserEffect";
        superEntities: readonly ["SpatialEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            LFEUpmixEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            derivedMaximumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            derivedMinimumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            distanceRolloffType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            dopplerMultiplier: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            extentMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            maximumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "20";
                defaultValueNormalized: 20;
            };
            minimumDistance: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            minimumExtent: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            occlusionEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            overrideRange: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            panBlend: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            soundSize: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            stereoToSurroundUserPanMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            userLFELevel: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            userPanDirection: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            userPanExtent: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "360";
                defaultValueNormalized: 360;
            };
            userStereoAxis: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            userStereoSeparation: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "60";
                defaultValueNormalized: 60;
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SslNucleusControlSurfaceModelEntity {
        name: "SslNucleusControlSurface";
        superEntities: readonly ["ControlSurface"];
        isAbstract: false;
        isGlobal: true;
        isSingleton: false;
        properties: {
            color: any;
            name: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "Color";
                dataTypeNormalized: "any";
                defaultValueRaw: "#00b0e8";
                defaultValueNormalized: "#00b0e8";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            customBindings: Array<FmodModelRef<"ControlSurfaceCustomBindings">>;
            protocols: Array<FmodModelRef<"ControlSurfaceProtocol">>;
        };
        relationshipMeta: {
            customBindings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceCustomBindings";
                destinationTypeNormalized: "ControlSurfaceCustomBindings";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            protocols: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceProtocol";
                destinationTypeNormalized: "ControlSurfaceProtocol";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface SustainPointModelEntity {
        name: "SustainPoint";
        superEntities: readonly ["Marker", "Triggerable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            position: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            position: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodModelRef<"MarkerTrack"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            timeline: FmodModelRef<"Timeline"> | null;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TagModelEntity {
        name: "Tag";
        superEntities: readonly ["WorkspaceItem"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"TagFolder"> | null;
            taggables: Array<FmodModelRef<"Taggable">>;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "TagFolder";
                destinationTypeNormalized: "TagFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            taggables: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Taggable";
                destinationTypeNormalized: "Taggable";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TagFolderModelEntity {
        name: "TagFolder";
        superEntities: readonly ["Folder"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
            items: Array<FmodModelRef<"WorkspaceItem">>;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            items: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "WorkspaceItem";
                destinationTypeNormalized: "WorkspaceItem";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TaggableModelEntity {
        name: "Taggable";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            tags: Array<FmodModelRef<"Tag">>;
        };
        relationshipMeta: {
            tags: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Tag";
                destinationTypeNormalized: "Tag";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TempoMarkerModelEntity {
        name: "TempoMarker";
        superEntities: readonly ["Marker"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            position: any;
            tempo: number;
            timeSignatureDenominator: number;
            timeSignatureNumerator: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            position: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            tempo: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "120";
                defaultValueNormalized: 120;
            };
            timeSignatureDenominator: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "4";
                defaultValueNormalized: 4;
            };
            timeSignatureNumerator: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "4";
                defaultValueNormalized: 4;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            markerTrack: FmodModelRef<"MarkerTrack"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            timeline: FmodModelRef<"Timeline"> | null;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface TfsProviderModelEntity {
        name: "TfsProvider";
        superEntities: readonly ["NamedWorkspaceBasedSourceControlProvider"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            connectionPath: string;
            connectionPort: number;
            connectionProtocol: string;
            repositoryLocation: string;
            serverURL: string;
            workspaceFormString: string;
            workspaceName: string;
            workspaceRoot: string;
        };
        propertyMeta: {
            connectionPath: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            connectionPort: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "8080";
                defaultValueNormalized: 8080;
            };
            connectionProtocol: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "http";
                defaultValueNormalized: "http";
            };
            repositoryLocation: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            serverURL: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            workspaceFormString: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            workspaceName: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            workspaceRoot: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface ThreeEQEffectModelEntity {
        name: "ThreeEQEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            crossoverSlope: number;
            highCrossover: number;
            highGain: number;
            lowCrossover: number;
            lowGain: number;
            midGain: number;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            crossoverSlope: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            highCrossover: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "4000";
                defaultValueNormalized: 4000;
            };
            highGain: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            lowCrossover: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "400";
                defaultValueNormalized: 400;
            };
            lowGain: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            midGain: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TimelineModelEntity {
        name: "Timeline";
        superEntities: readonly ["Parameter", "ParameterPrototype"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            isProxyEnabled: boolean;
            uiLastHorizontalScrollBarValue: number;
            uiLastRulerScaleRatio: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            isProxyEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            uiLastHorizontalScrollBarValue: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiLastRulerScaleRatio: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automationCurves: Array<FmodModelRef<"AutomationCurve">>;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            event: FmodModelRef<"Event"> | null;
            eventSelector: FmodModelRef<"Event"> | null;
            markers: Array<FmodModelRef<"Marker">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            modules: Array<FmodModelRef<"Module">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automationCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationCurve";
                destinationTypeNormalized: "AutomationCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            eventSelector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Marker";
                destinationTypeNormalized: "Marker";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TouchOscControlSurfaceModelEntity {
        name: "TouchOscControlSurface";
        superEntities: readonly ["ControlSurface"];
        isAbstract: false;
        isGlobal: true;
        isSingleton: false;
        properties: {
            color: any;
            name: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "Color";
                dataTypeNormalized: "any";
                defaultValueRaw: "#00b0e8";
                defaultValueNormalized: "#00b0e8";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            customBindings: Array<FmodModelRef<"ControlSurfaceCustomBindings">>;
            protocols: Array<FmodModelRef<"ControlSurfaceProtocol">>;
        };
        relationshipMeta: {
            customBindings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceCustomBindings";
                destinationTypeNormalized: "ControlSurfaceCustomBindings";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            protocols: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceProtocol";
                destinationTypeNormalized: "ControlSurfaceProtocol";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TrackModelEntity {
        name: "Track";
        superEntities: readonly ["Selectable"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiTrackHeight: number;
        };
        propertyMeta: {
            uiTrackHeight: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            selector: FmodModelRef<"Selector"> | null;
        };
        relationshipMeta: {
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TransceiverEffectModelEntity {
        name: "TransceiverEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            bypass: boolean;
            channel: number;
            level: number;
            speakerMode: number;
            transmitMode: boolean;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            channel: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            level: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            speakerMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "-1";
                defaultValueNormalized: -1;
            };
            transmitMode: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TransitionDestinationModelEntity {
        name: "TransitionDestination";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            name: string;
        };
        propertyMeta: {
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            references: Array<FmodModelRef<"TransitionTimelineOwner">>;
        };
        relationshipMeta: {
            references: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TransitionTimelineOwner";
                destinationTypeNormalized: "TransitionTimelineOwner";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TransitionDestinationFadeInCurveModelEntity {
        name: "TransitionDestinationFadeInCurve";
        superEntities: readonly ["TransitionFadeCurve"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            endPoint: FmodModelRef<"AutomationPoint"> | null;
            fadeInOwner: FmodModelRef<"Module"> | null;
            fadeOutOwner: FmodModelRef<"Module"> | null;
            relatedModule: FmodModelRef<"Module"> | null;
            startPoint: FmodModelRef<"AutomationPoint"> | null;
        };
        relationshipMeta: {
            endPoint: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomationPoint";
                destinationTypeNormalized: "AutomationPoint";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            fadeInOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "!fadeOutOwner";
                isRequiredNormalized: "!fadeOutOwner";
            };
            fadeOutOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "!fadeInOwner";
                isRequiredNormalized: "!fadeInOwner";
            };
            relatedModule: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            startPoint: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomationPoint";
                destinationTypeNormalized: "AutomationPoint";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface TransitionDestinationSoundModelEntity {
        name: "TransitionDestinationSound";
        superEntities: readonly ["Module"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Blue";
                defaultValueNormalized: "Blue";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            parameter: FmodModelRef<"Parameter"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TransitionFadeCurveModelEntity {
        name: "TransitionFadeCurve";
        superEntities: readonly ["FadeCurve"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            endPoint: FmodModelRef<"AutomationPoint"> | null;
            fadeInOwner: FmodModelRef<"Module"> | null;
            fadeOutOwner: FmodModelRef<"Module"> | null;
            relatedModule: FmodModelRef<"Module"> | null;
            startPoint: FmodModelRef<"AutomationPoint"> | null;
        };
        relationshipMeta: {
            endPoint: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomationPoint";
                destinationTypeNormalized: "AutomationPoint";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            fadeInOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "!fadeOutOwner";
                isRequiredNormalized: "!fadeOutOwner";
            };
            fadeOutOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "!fadeInOwner";
                isRequiredNormalized: "!fadeInOwner";
            };
            relatedModule: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            startPoint: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomationPoint";
                destinationTypeNormalized: "AutomationPoint";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface TransitionMarkerModelEntity {
        name: "TransitionMarker";
        superEntities: readonly ["Marker", "TransitionTimelineOwner", "Triggerable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            position: any;
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
            uiModulationDrawerVisible: boolean;
            uiTransitionTimelineVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            position: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTransitionTimelineVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            destination: FmodModelRef<"TransitionDestination"> | null;
            markerTrack: FmodModelRef<"MarkerTrack"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            timeline: FmodModelRef<"Timeline"> | null;
            transitionTimeline: FmodModelRef<"TransitionTimeline"> | null;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            destination: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "TransitionDestination";
                destinationTypeNormalized: "TransitionDestination";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            transitionTimeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "TransitionTimeline";
                destinationTypeNormalized: "TransitionTimeline";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TransitionRegionModelEntity {
        name: "TransitionRegion";
        superEntities: readonly ["Region", "TransitionTimelineOwner", "Triggerable", "Quantizable"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            position: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            transitionOffset: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTransitionTimelineVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            destination: FmodModelRef<"TransitionDestination"> | null;
            markerTrack: FmodModelRef<"MarkerTrack"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            timeline: FmodModelRef<"Timeline"> | null;
            transitionTimeline: FmodModelRef<"TransitionTimeline"> | null;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            destination: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "TransitionDestination";
                destinationTypeNormalized: "TransitionDestination";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markerTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MarkerTrack";
                destinationTypeNormalized: "MarkerTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            timeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Timeline";
                destinationTypeNormalized: "Timeline";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            transitionTimeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "TransitionTimeline";
                destinationTypeNormalized: "TransitionTimeline";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TransitionSourceFadeOutCurveModelEntity {
        name: "TransitionSourceFadeOutCurve";
        superEntities: readonly ["TransitionFadeCurve"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
        };
        propertyMeta: {
        };
        relationships: {
            endPoint: FmodModelRef<"AutomationPoint"> | null;
            fadeInOwner: FmodModelRef<"Module"> | null;
            fadeOutOwner: FmodModelRef<"Module"> | null;
            relatedModule: FmodModelRef<"Module"> | null;
            startPoint: FmodModelRef<"AutomationPoint"> | null;
        };
        relationshipMeta: {
            endPoint: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomationPoint";
                destinationTypeNormalized: "AutomationPoint";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            fadeInOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "!fadeOutOwner";
                isRequiredNormalized: "!fadeOutOwner";
            };
            fadeOutOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "!fadeInOwner";
                isRequiredNormalized: "!fadeInOwner";
            };
            relatedModule: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            startPoint: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AutomationPoint";
                destinationTypeNormalized: "AutomationPoint";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface TransitionSourceSoundModelEntity {
        name: "TransitionSourceSound";
        superEntities: readonly ["Module"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Blue";
                defaultValueNormalized: "Blue";
            };
            delayType: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            isAsync: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isCutoff: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            maxVoices: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "65";
                defaultValueNormalized: 65;
            };
            maximumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            minimumTimeDelay: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            quantizationInterval: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            start: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            startOffset: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            timelockedOffset: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            voiceStealing: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
        };
        relationships: {
            audioTrack: FmodModelRef<"AudioTrack"> | null;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            fadeInCurve: FmodModelRef<"FadeCurve"> | null;
            fadeOutCurve: FmodModelRef<"FadeCurve"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            parameter: FmodModelRef<"Parameter"> | null;
            relatedFadeCurves: Array<FmodModelRef<"FadeCurve">>;
            selector: FmodModelRef<"Selector"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            audioTrack: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "AudioTrack";
                destinationTypeNormalized: "AudioTrack";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeInCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            fadeOutCurve: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            parameter: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Parameter";
                destinationTypeNormalized: "Parameter";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            relatedFadeCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "FadeCurve";
                destinationTypeNormalized: "FadeCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            selector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Selector";
                destinationTypeNormalized: "Selector";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TransitionTimelineModelEntity {
        name: "TransitionTimeline";
        superEntities: readonly ["Timeline"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            isProxyEnabled: boolean;
            length: any;
            uiLastHorizontalScrollBarValue: number;
            uiLastRulerScaleRatio: any;
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            isProxyEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            length: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            uiLastHorizontalScrollBarValue: {
                dataTypeRaw: "Int";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiLastRulerScaleRatio: {
                dataTypeRaw: "Double";
                dataTypeNormalized: "any";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automationCurves: Array<FmodModelRef<"AutomationCurve">>;
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            event: FmodModelRef<"TransitionTimelineOwner"> | null;
            eventSelector: FmodModelRef<"Event"> | null;
            markers: Array<FmodModelRef<"Marker">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            modules: Array<FmodModelRef<"Module">>;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automationCurves: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "AutomationCurve";
                destinationTypeNormalized: "AutomationCurve";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "TransitionTimelineOwner";
                destinationTypeNormalized: "TransitionTimelineOwner";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            eventSelector: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            markers: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Marker";
                destinationTypeNormalized: "Marker";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modules: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Module";
                destinationTypeNormalized: "Module";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TransitionTimelineOwnerModelEntity {
        name: "TransitionTimelineOwner";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiTransitionTimelineVisible: boolean;
        };
        propertyMeta: {
            uiTransitionTimelineVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
        };
        relationships: {
            destination: FmodModelRef<"TransitionDestination"> | null;
            transitionTimeline: FmodModelRef<"TransitionTimeline"> | null;
        };
        relationshipMeta: {
            destination: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "TransitionDestination";
                destinationTypeNormalized: "TransitionDestination";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            transitionTimeline: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "TransitionTimeline";
                destinationTypeNormalized: "TransitionTimeline";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TremoloEffectModelEntity {
        name: "TremoloEffect";
        superEntities: readonly ["MixerEffect"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
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
        };
        propertyMeta: {
            bypass: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            depth: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "1";
                defaultValueNormalized: 1;
            };
            duty: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0.5";
                defaultValueNormalized: 0.5;
            };
            frequency: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "5";
                defaultValueNormalized: 5;
            };
            phase: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            shape: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            skew: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            spread: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            square: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            excludedPlatforms: Array<FmodModelRef<"Platform">>;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"EffectChain"> | null;
            presetOwner: FmodModelRef<"EffectPreset"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            excludedPlatforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectChain";
                destinationTypeNormalized: "EffectChain";
                isRequiredRaw: "!presetOwner";
                isRequiredNormalized: "!presetOwner";
            };
            presetOwner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "EffectPreset";
                destinationTypeNormalized: "EffectPreset";
                isRequiredRaw: "!owner";
                isRequiredNormalized: "!owner";
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TriggerConditionModelEntity {
        name: "TriggerCondition";
        superEntities: readonly ["AutomatableObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            uiModulationDrawerVisible: boolean;
            uiTriggerBehaviorDrawerVisible: boolean;
        };
        propertyMeta: {
            uiModulationDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            uiTriggerBehaviorDrawerVisible: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            automators: Array<FmodModelRef<"Automator">>;
            customBindings: FmodModelRef<"ControlSurfaceCustomBinding"> | null;
            modulators: Array<FmodModelRef<"Modulator">>;
            owner: FmodModelRef<"Triggerable"> | null;
            snapshotProperties: Array<FmodModelRef<"SnapshotProperty">>;
        };
        relationshipMeta: {
            automators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Automator";
                destinationTypeNormalized: "Automator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ControlSurfaceCustomBinding";
                destinationTypeNormalized: "ControlSurfaceCustomBinding";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            modulators: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Modulator";
                destinationTypeNormalized: "Modulator";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            owner: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Triggerable";
                destinationTypeNormalized: "Triggerable";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            snapshotProperties: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "SnapshotProperty";
                destinationTypeNormalized: "SnapshotProperty";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface TriggerableModelEntity {
        name: "Triggerable";
        superEntities: readonly ["ManagedObject"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            triggerConditionMode: number;
            triggerProbability: number;
            triggerProbabilityEnabled: boolean;
        };
        propertyMeta: {
            triggerConditionMode: {
                dataTypeRaw: "Enum";
                dataTypeNormalized: "number";
                defaultValueRaw: "0";
                defaultValueNormalized: 0;
            };
            triggerProbability: {
                dataTypeRaw: "Float";
                dataTypeNormalized: "number";
                defaultValueRaw: "100";
                defaultValueNormalized: 100;
            };
            triggerProbabilityEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
        };
        relationships: {
            triggerConditions: Array<FmodModelRef<"TriggerCondition">>;
        };
        relationshipMeta: {
            triggerConditions: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "TriggerCondition";
                destinationTypeNormalized: "TriggerCondition";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface UiMixerViewModelEntity {
        name: "UiMixerView";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            name: string;
        };
        propertyMeta: {
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            assignedStrips: Array<FmodModelRef<"MixerStrip">>;
            mixer: FmodModelRef<"Mixer"> | null;
        };
        relationshipMeta: {
            assignedStrips: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "MixerStrip";
                destinationTypeNormalized: "MixerStrip";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            mixer: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Mixer";
                destinationTypeNormalized: "Mixer";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface UserPropertyModelEntity {
        name: "UserProperty";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: false;
        properties: {
            key: string;
            value: string;
        };
        propertyMeta: {
            key: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            value: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            event: FmodModelRef<"Event"> | null;
        };
        relationshipMeta: {
            event: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Event";
                destinationTypeNormalized: "Event";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface WorkspaceModelEntity {
        name: "Workspace";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
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
        };
        propertyMeta: {
            builtBanksEncryptionKey: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            builtBanksIncludeFileNames: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            builtBanksIncludeHash: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            builtBanksIncludeReferencedEvents: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            builtBanksMirrorBrowserFolderHierarchy: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            builtBanksOutputDirectory: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            builtBanksSeparateAssets: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            builtBanksSeparateBankPerAsset: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            builtBanksSeparateStreams: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "false";
                defaultValueNormalized: false;
            };
            isSourceControlForAssetsEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            isSourceControlForBuiltBanksEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
            isSourceControlForProfilerSessionsEnabled: {
                dataTypeRaw: "Bool";
                dataTypeNormalized: "boolean";
                defaultValueRaw: "true";
                defaultValueNormalized: true;
            };
        };
        relationships: {
            changelist: FmodModelRef<"WorkspaceChangelist"> | null;
            customBindings: Array<FmodModelRef<"ControlSurfaceCustomBindings">>;
            locales: Array<FmodModelRef<"Locale">>;
            masterAssetFolder: FmodModelRef<"MasterAssetFolder"> | null;
            masterBankFolder: FmodModelRef<"MasterBankFolder"> | null;
            masterEffectPresetFolder: FmodModelRef<"MasterEffectPresetFolder"> | null;
            masterEventFolder: FmodModelRef<"MasterEventFolder"> | null;
            masterParameterPresetFolder: FmodModelRef<"MasterParameterPresetFolder"> | null;
            masterSandboxFolder: FmodModelRef<"MasterSandboxFolder"> | null;
            masterTagFolder: FmodModelRef<"MasterTagFolder"> | null;
            mixer: FmodModelRef<"Mixer"> | null;
            platforms: Array<FmodModelRef<"Platform">>;
            profilerSessionFolder: FmodModelRef<"ProfilerSessionFolder"> | null;
            projectSettings: FmodModelRef<"ProjectSettings"> | null;
            sourceControlProvider: FmodModelRef<"SourceControlProvider"> | null;
        };
        relationshipMeta: {
            changelist: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "WorkspaceChangelist";
                destinationTypeNormalized: "WorkspaceChangelist";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            customBindings: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "ControlSurfaceCustomBindings";
                destinationTypeNormalized: "ControlSurfaceCustomBindings";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            locales: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Locale";
                destinationTypeNormalized: "Locale";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            masterAssetFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterAssetFolder";
                destinationTypeNormalized: "MasterAssetFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masterBankFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterBankFolder";
                destinationTypeNormalized: "MasterBankFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masterEffectPresetFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterEffectPresetFolder";
                destinationTypeNormalized: "MasterEffectPresetFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masterEventFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterEventFolder";
                destinationTypeNormalized: "MasterEventFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masterParameterPresetFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterParameterPresetFolder";
                destinationTypeNormalized: "MasterParameterPresetFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masterSandboxFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterSandboxFolder";
                destinationTypeNormalized: "MasterSandboxFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            masterTagFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "MasterTagFolder";
                destinationTypeNormalized: "MasterTagFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            mixer: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Mixer";
                destinationTypeNormalized: "Mixer";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            platforms: {
                cardinalityRaw: "ToMany";
                cardinalityNormalized: "many";
                destinationTypeRaw: "Platform";
                destinationTypeNormalized: "Platform";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            profilerSessionFolder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProfilerSessionFolder";
                destinationTypeNormalized: "ProfilerSessionFolder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
            projectSettings: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "ProjectSettings";
                destinationTypeNormalized: "ProjectSettings";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
            sourceControlProvider: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "SourceControlProvider";
                destinationTypeNormalized: "SourceControlProvider";
                isRequiredRaw: "false";
                isRequiredNormalized: false;
            };
        };
    }

    interface WorkspaceBasedSourceControlProviderModelEntity {
        name: "WorkspaceBasedSourceControlProvider";
        superEntities: readonly ["SourceControlProvider"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            repositoryLocation: string;
            workspaceRoot: string;
        };
        propertyMeta: {
            repositoryLocation: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            workspaceRoot: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface WorkspaceChangelistModelEntity {
        name: "WorkspaceChangelist";
        superEntities: readonly ["ManagedObject"];
        isAbstract: false;
        isGlobal: false;
        isSingleton: true;
        properties: {
            filesExplicitlyLocked: any;
            filesOnHold: any;
        };
        propertyMeta: {
            filesExplicitlyLocked: {
                dataTypeRaw: "StringList";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            filesOnHold: {
                dataTypeRaw: "StringList";
                dataTypeNormalized: "any";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            workspace: FmodModelRef<"Workspace"> | null;
        };
        relationshipMeta: {
            workspace: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Workspace";
                destinationTypeNormalized: "Workspace";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface WorkspaceItemModelEntity {
        name: "WorkspaceItem";
        superEntities: readonly ["Notable", "Colorable"];
        isAbstract: true;
        isGlobal: false;
        isSingleton: false;
        properties: {
            color: string;
            name: string;
            note: string;
        };
        propertyMeta: {
            color: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "Default";
                defaultValueNormalized: "Default";
            };
            name: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
            note: {
                dataTypeRaw: "String";
                dataTypeNormalized: "string";
                defaultValueRaw: "";
                defaultValueNormalized: "";
            };
        };
        relationships: {
            folder: FmodModelRef<"Folder"> | null;
        };
        relationshipMeta: {
            folder: {
                cardinalityRaw: "ToOne";
                cardinalityNormalized: "one";
                destinationTypeRaw: "Folder";
                destinationTypeNormalized: "Folder";
                isRequiredRaw: "true";
                isRequiredNormalized: true;
            };
        };
    }

    interface EntityMap {
        ADSRModulator: ADSRModulatorModelEntity;
        ActionSheet: ActionSheetModelEntity;
        Asset: AssetModelEntity;
        AudioFile: AudioFileModelEntity;
        AudioSettings: AudioSettingsModelEntity;
        AudioTable: AudioTableModelEntity;
        AudioTrack: AudioTrackModelEntity;
        AutomatableObject: AutomatableObjectModelEntity;
        AutomationCurve: AutomationCurveModelEntity;
        AutomationPoint: AutomationPointModelEntity;
        AutomationTrack: AutomationTrackModelEntity;
        Automator: AutomatorModelEntity;
        AutopitchModulator: AutopitchModulatorModelEntity;
        Bank: BankModelEntity;
        BankFolder: BankFolderModelEntity;
        BoolPluginParameter: BoolPluginParameterModelEntity;
        ChannelMixEffect: ChannelMixEffectModelEntity;
        ChorusEffect: ChorusEffectModelEntity;
        Colorable: ColorableModelEntity;
        CommandSound: CommandSoundModelEntity;
        CommandTarget: CommandTargetModelEntity;
        CompressorEffect: CompressorEffectModelEntity;
        ControlSurface: ControlSurfaceModelEntity;
        ControlSurfaceCustomBinding: ControlSurfaceCustomBindingModelEntity;
        ControlSurfaceCustomBindings: ControlSurfaceCustomBindingsModelEntity;
        ControlSurfaceProtocol: ControlSurfaceProtocolModelEntity;
        ConvolutionReverbEffect: ConvolutionReverbEffectModelEntity;
        DAWAsset: DAWAssetModelEntity;
        DAWProject: DAWProjectModelEntity;
        DataFile: DataFileModelEntity;
        DataPluginParameter: DataPluginParameterModelEntity;
        DataReferee: DataRefereeModelEntity;
        DelayEffect: DelayEffectModelEntity;
        DistortionEffect: DistortionEffectModelEntity;
        EditorSettings: EditorSettingsModelEntity;
        EffectChain: EffectChainModelEntity;
        EffectPreset: EffectPresetModelEntity;
        EffectPresetFolder: EffectPresetFolderModelEntity;
        Encodable: EncodableModelEntity;
        EncodableAsset: EncodableAssetModelEntity;
        EncodingSetting: EncodingSettingModelEntity;
        Event: EventModelEntity;
        EventAutomatableProperties: EventAutomatablePropertiesModelEntity;
        EventCondition: EventConditionModelEntity;
        EventFolder: EventFolderModelEntity;
        EventMixer: EventMixerModelEntity;
        EventMixerGroup: EventMixerGroupModelEntity;
        EventMixerMaster: EventMixerMasterModelEntity;
        EventMixerReturn: EventMixerReturnModelEntity;
        EventSound: EventSoundModelEntity;
        FadeCurve: FadeCurveModelEntity;
        FlangerEffect: FlangerEffectModelEntity;
        FloatPluginParameter: FloatPluginParameterModelEntity;
        Folder: FolderModelEntity;
        GainEffect: GainEffectModelEntity;
        GameParameter: GameParameterModelEntity;
        GroupTrack: GroupTrackModelEntity;
        HighpassEffect: HighpassEffectModelEntity;
        HighpassSimpleEffect: HighpassSimpleEffectModelEntity;
        ITEchoEffect: ITEchoEffectModelEntity;
        IntPluginParameter: IntPluginParameterModelEntity;
        LFOModulator: LFOModulatorModelEntity;
        LimiterEffect: LimiterEffectModelEntity;
        Locale: LocaleModelEntity;
        LoopRegion: LoopRegionModelEntity;
        Loopable: LoopableModelEntity;
        LoudnessMeter: LoudnessMeterModelEntity;
        LowpassEffect: LowpassEffectModelEntity;
        LowpassSimpleEffect: LowpassSimpleEffectModelEntity;
        MackieControlSurface: MackieControlSurfaceModelEntity;
        MackieExtendedControlSurface: MackieExtendedControlSurfaceModelEntity;
        ManagedObject: ManagedObjectModelEntity;
        Marker: MarkerModelEntity;
        MarkerTrack: MarkerTrackModelEntity;
        MasterAssetFolder: MasterAssetFolderModelEntity;
        MasterBankFolder: MasterBankFolderModelEntity;
        MasterEffectPresetFolder: MasterEffectPresetFolderModelEntity;
        MasterEventFolder: MasterEventFolderModelEntity;
        MasterParameterPresetFolder: MasterParameterPresetFolderModelEntity;
        MasterSandboxFolder: MasterSandboxFolderModelEntity;
        MasterTagFolder: MasterTagFolderModelEntity;
        MasterTrack: MasterTrackModelEntity;
        MeteringSettings: MeteringSettingsModelEntity;
        MidiControlSurfaceProtocol: MidiControlSurfaceProtocolModelEntity;
        Mixer: MixerModelEntity;
        MixerBus: MixerBusModelEntity;
        MixerBusEffectChain: MixerBusEffectChainModelEntity;
        MixerBusFader: MixerBusFaderModelEntity;
        MixerBusPanner: MixerBusPannerModelEntity;
        MixerEffect: MixerEffectModelEntity;
        MixerGroup: MixerGroupModelEntity;
        MixerInput: MixerInputModelEntity;
        MixerMaster: MixerMasterModelEntity;
        MixerPort: MixerPortModelEntity;
        MixerReturn: MixerReturnModelEntity;
        MixerSend: MixerSendModelEntity;
        MixerStrip: MixerStripModelEntity;
        MixerVCA: MixerVCAModelEntity;
        Modulator: ModulatorModelEntity;
        Module: ModuleModelEntity;
        MultiSound: MultiSoundModelEntity;
        MultibandEqEffect: MultibandEqEffectModelEntity;
        NamedMarker: NamedMarkerModelEntity;
        NamedWorkspaceBasedSourceControlProvider: NamedWorkspaceBasedSourceControlProviderModelEntity;
        Notable: NotableModelEntity;
        ObjectSpatialiserEffect: ObjectSpatialiserEffectModelEntity;
        ObsoleteObject: ObsoleteObjectModelEntity;
        OscControlSurfaceProtocol: OscControlSurfaceProtocolModelEntity;
        PannerEffect: PannerEffectModelEntity;
        ParamEqEffect: ParamEqEffectModelEntity;
        Parameter: ParameterModelEntity;
        ParameterCondition: ParameterConditionModelEntity;
        ParameterPreset: ParameterPresetModelEntity;
        ParameterPresetFolder: ParameterPresetFolderModelEntity;
        ParameterProperty: ParameterPropertyModelEntity;
        ParameterPrototype: ParameterPrototypeModelEntity;
        ParameterProxy: ParameterProxyModelEntity;
        PerforceProvider: PerforceProviderModelEntity;
        PitchShifterEffect: PitchShifterEffectModelEntity;
        Platform: PlatformModelEntity;
        PlatformSpecificItem: PlatformSpecificItemModelEntity;
        PlayPercentage: PlayPercentageModelEntity;
        Plugin: PluginModelEntity;
        PluginEffect: PluginEffectModelEntity;
        PluginOwner: PluginOwnerModelEntity;
        PluginParameter: PluginParameterModelEntity;
        PluginSettings: PluginSettingsModelEntity;
        PluginSound: PluginSoundModelEntity;
        ProfilerFolder: ProfilerFolderModelEntity;
        ProfilerGraph: ProfilerGraphModelEntity;
        ProfilerGraphable: ProfilerGraphableModelEntity;
        ProfilerRecordingMarker: ProfilerRecordingMarkerModelEntity;
        ProfilerSession: ProfilerSessionModelEntity;
        ProfilerSessionFolder: ProfilerSessionFolderModelEntity;
        ProfilerSystemTrack: ProfilerSystemTrackModelEntity;
        ProfilerTrack: ProfilerTrackModelEntity;
        ProfilerTrackable: ProfilerTrackableModelEntity;
        ProgrammerSound: ProgrammerSoundModelEntity;
        ProgrammerSoundPlaceholder: ProgrammerSoundPlaceholderModelEntity;
        ProjectSettings: ProjectSettingsModelEntity;
        ProxyEffect: ProxyEffectModelEntity;
        Quantizable: QuantizableModelEntity;
        RandomizerModulator: RandomizerModulatorModelEntity;
        ReferenceableData: ReferenceableDataModelEntity;
        Region: RegionModelEntity;
        ReturnTrack: ReturnTrackModelEntity;
        SFXReverbEffect: SFXReverbEffectModelEntity;
        SandboxEmitter: SandboxEmitterModelEntity;
        SandboxFolder: SandboxFolderModelEntity;
        SandboxListener: SandboxListenerModelEntity;
        SandboxParameter: SandboxParameterModelEntity;
        SandboxParameterOwner: SandboxParameterOwnerModelEntity;
        SandboxPositionable: SandboxPositionableModelEntity;
        SandboxScene: SandboxSceneModelEntity;
        ScriptBasedProvider: ScriptBasedProviderModelEntity;
        Selectable: SelectableModelEntity;
        Selector: SelectorModelEntity;
        Sidechain: SidechainModelEntity;
        SidechainModulator: SidechainModulatorModelEntity;
        SidechainTarget: SidechainTargetModelEntity;
        SilenceSound: SilenceSoundModelEntity;
        SingleSound: SingleSoundModelEntity;
        Snapshot: SnapshotModelEntity;
        SnapshotGroup: SnapshotGroupModelEntity;
        SnapshotList: SnapshotListModelEntity;
        SnapshotMasterTrack: SnapshotMasterTrackModelEntity;
        SnapshotModule: SnapshotModuleModelEntity;
        SnapshotProperty: SnapshotPropertyModelEntity;
        SnapshotTrack: SnapshotTrackModelEntity;
        Sound: SoundModelEntity;
        SoundScatterer: SoundScattererModelEntity;
        SourceControlProvider: SourceControlProviderModelEntity;
        SpatialEffect: SpatialEffectModelEntity;
        SpatialiserEffect: SpatialiserEffectModelEntity;
        SslNucleusControlSurface: SslNucleusControlSurfaceModelEntity;
        SustainPoint: SustainPointModelEntity;
        Tag: TagModelEntity;
        TagFolder: TagFolderModelEntity;
        Taggable: TaggableModelEntity;
        TempoMarker: TempoMarkerModelEntity;
        TfsProvider: TfsProviderModelEntity;
        ThreeEQEffect: ThreeEQEffectModelEntity;
        Timeline: TimelineModelEntity;
        TouchOscControlSurface: TouchOscControlSurfaceModelEntity;
        Track: TrackModelEntity;
        TransceiverEffect: TransceiverEffectModelEntity;
        TransitionDestination: TransitionDestinationModelEntity;
        TransitionDestinationFadeInCurve: TransitionDestinationFadeInCurveModelEntity;
        TransitionDestinationSound: TransitionDestinationSoundModelEntity;
        TransitionFadeCurve: TransitionFadeCurveModelEntity;
        TransitionMarker: TransitionMarkerModelEntity;
        TransitionRegion: TransitionRegionModelEntity;
        TransitionSourceFadeOutCurve: TransitionSourceFadeOutCurveModelEntity;
        TransitionSourceSound: TransitionSourceSoundModelEntity;
        TransitionTimeline: TransitionTimelineModelEntity;
        TransitionTimelineOwner: TransitionTimelineOwnerModelEntity;
        TremoloEffect: TremoloEffectModelEntity;
        TriggerCondition: TriggerConditionModelEntity;
        Triggerable: TriggerableModelEntity;
        UiMixerView: UiMixerViewModelEntity;
        UserProperty: UserPropertyModelEntity;
        Workspace: WorkspaceModelEntity;
        WorkspaceBasedSourceControlProvider: WorkspaceBasedSourceControlProviderModelEntity;
        WorkspaceChangelist: WorkspaceChangelistModelEntity;
        WorkspaceItem: WorkspaceItemModelEntity;
    }
    type EntityName = keyof EntityMap;
}
