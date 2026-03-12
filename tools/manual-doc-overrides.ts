export interface ManualArgOverride {
    name?: string;
    typeText: string;
    optional?: boolean;
}

export interface ManualMethodOverride {
    args?: ManualArgOverride[];
    returnTypeText?: string;
    forceReturnType?: boolean;
    source: string;
    note?: string;
}

export type ManualMethodOverrideMap = Record<string, ManualMethodOverride>;

function keyOf(entityName: string, methodName: string): string {
    return entityName + "." + methodName;
}

export function getManualDocOverrides(): ManualMethodOverrideMap {
    const map: ManualMethodOverrideMap = Object.create(null);

    function put(entityName: string, methodName: string, value: ManualMethodOverride): void {
        map[keyOf(entityName, methodName)] = value;
    }

    // Source: snapshot_2.02.33/scripting-api-reference-project-workspace.html
    put("Workspace", "addEvent", {
        args: [
            { name: "eventName", typeText: "string" },
            { name: "withSpatializer", typeText: "boolean", optional: true }
        ],
        source: "project-workspace#workspaceaddevent"
    });
    put("Workspace", "addTag", {
        args: [
            { name: "tagName", typeText: "string" }
        ],
        source: "project-workspace#workspaceaddtag"
    });
    put("Workspace", "createPlugin", {
        args: [
            { name: "identifier", typeText: "string" }
        ],
        returnTypeText: "FmodEntityObject<string>",
        source: "project-workspace#workspacecreateplugin"
    });

    // Source: snapshot_2.02.33/scripting-api-reference-project-model-event.html
    put("Event", "get3DAttributes", {
        returnTypeText: "Event3DAttributes",
        source: "project-model-event#eventget3dattributes"
    });
    put("Event", "getCursorPosition", {
        args: [{ name: "parameter", typeText: "any" }],
        returnTypeText: "number",
        source: "project-model-event#eventgetcursorposition"
    });
    put("Event", "getParameterPresets", {
        returnTypeText: "Array<FmodEntityObject<\"GameParameter\">>",
        source: "project-model-event#eventgetparameterpresets"
    });
    put("Event", "getPath", {
        returnTypeText: "string",
        source: "project-model-event#eventgetpath"
    });
    put("Event", "getPlayheadPosition", {
        args: [{ name: "parameter", typeText: "any" }],
        returnTypeText: "number",
        source: "project-model-event#eventgetplayheadposition"
    });
    put("Event", "is3D", {
        returnTypeText: "boolean",
        source: "project-model-event#eventis3d"
    });
    put("Event", "isOneShot", {
        returnTypeText: "boolean",
        source: "project-model-event#eventisoneshot"
    });
    put("Event", "isPaused", {
        returnTypeText: "boolean",
        source: "project-model-event#eventispaused"
    });
    put("Event", "isPlaying", {
        returnTypeText: "boolean",
        source: "project-model-event#eventisplaying"
    });
    put("Event", "isRecording", {
        returnTypeText: "boolean",
        source: "project-model-event#eventisrecording"
    });
    put("Event", "isStopping", {
        returnTypeText: "boolean",
        source: "project-model-event#eventisstopping"
    });
    put("Event", "keyOff", {
        returnTypeText: "void",
        source: "project-model-event#eventkeyoff"
    });
    put("Event", "play", {
        returnTypeText: "void",
        source: "project-model-event#eventplay"
    });
    put("Event", "returnToStart", {
        returnTypeText: "void",
        source: "project-model-event#eventreturntostart"
    });
    put("Event", "set3DAttributes", {
        args: [{ name: "attributes", typeText: "Event3DAttributes" }],
        returnTypeText: "void",
        source: "project-model-event#eventset3dattributes"
    });
    put("Event", "setCursorPosition", {
        args: [
            { name: "parameter", typeText: "any" },
            { name: "position", typeText: "number" }
        ],
        returnTypeText: "void",
        source: "project-model-event#eventsetcursorposition"
    });
    put("Event", "stopImmediate", {
        returnTypeText: "void",
        source: "project-model-event#eventstopimmediate"
    });
    put("Event", "stopNonImmediate", {
        returnTypeText: "void",
        source: "project-model-event#eventstopnonimmediate"
    });
    put("Event", "togglePause", {
        returnTypeText: "void",
        source: "project-model-event#eventtogglepause"
    });
    put("Event", "toggleRecording", {
        returnTypeText: "void",
        source: "project-model-event#eventtogglerecording"
    });

    // Source: snapshot_2.02.33/scripting-api-reference-project-model-asset.html
    put("Asset", "getAbsoluteAssetPath", {
        returnTypeText: "string",
        source: "project-model-asset#assetgetabsoluteassetpath"
    });
    put("Asset", "getAssetPath", {
        returnTypeText: "string",
        source: "project-model-asset#assetgetassetpath"
    });
    put("Asset", "setAssetPath", {
        args: [{ name: "filePath", typeText: "string" }],
        returnTypeText: "boolean",
        source: "project-model-asset#assetsetassetpath"
    });

    // Source: snapshot_2.02.33/scripting-api-reference-project-model-bank.html
    put("Bank", "getPath", {
        returnTypeText: "string",
        source: "project-model-bank#bankgetpath"
    });

    // Source: snapshot_2.02.33/scripting-api-reference-project-model-mixerstrip.html
    put("MixerStrip", "getPath", {
        returnTypeText: "string",
        source: "project-model-mixerstrip#mixerstripgetpath"
    });
    put("MixerBus", "getInputFormat", {
        returnTypeText: "number",
        source: "project-model-mixerstrip#mixerbusgetinputformat",
        note: "Docs describe this as an enumeration."
    });
    put("MixerBus", "getOutputFormat", {
        returnTypeText: "number",
        source: "project-model-mixerstrip#mixerbusgetoutputformat",
        note: "Docs describe this as an enumeration."
    });

    // Source: snapshot_2.02.33/scripting-api-reference-project-model-parameter.html
    put("GameParameter", "getCursorPosition", {
        returnTypeText: "number | undefined",
        source: "project-model-parameter#gameparametergetcursorposition"
    });
    put("GameParameter", "setCursorPosition", {
        args: [{ name: "position", typeText: "number" }],
        returnTypeText: "void",
        source: "project-model-parameter#gameparametersetcursorposition"
    });
    put("Parameter", "getPlayheadPosition", {
        returnTypeText: "number",
        source: "project-model-parameter#parametergetplayheadposition"
    });
    put("ParameterPreset", "getPath", {
        returnTypeText: "string",
        source: "project-model-parameter#parameterpresetgetpath"
    });
    put("ParameterProxy", "getCursorPosition", {
        returnTypeText: "number",
        source: "project-model-parameter#parameterproxygetcursorposition"
    });
    put("ParameterProxy", "setCursorPosition", {
        args: [{ name: "position", typeText: "number" }],
        returnTypeText: "void",
        source: "project-model-parameter#parameterproxysetcursorposition"
    });
    put("Timeline", "getCursorPosition", {
        returnTypeText: "number",
        source: "project-model-parameter#timelinegetcursorposition"
    });
    put("Timeline", "setCursorPosition", {
        args: [{ name: "position", typeText: "number" }],
        returnTypeText: "void",
        source: "project-model-parameter#timelinesetcursorposition"
    });

    // Source: snapshot_2.02.33/scripting-api-reference-project-model-track.html
    put("GroupTrack", "addSound", {
        args: [
            { name: "parameter", typeText: "FmodEntityObject<\"Parameter\"> | FmodEntityObject<\"Timeline\"> | FmodEntityObject<\"GameParameter\">" },
            { name: "soundType", typeText: "\"SingleSound\" | \"MultiSound\" | \"ProgrammerSound\"" },
            { name: "start", typeText: "number" },
            { name: "length", typeText: "number" }
        ],
        returnTypeText: "FmodEntityObject<\"Sound\">",
        source: "project-model-track#grouptrackaddsound"
    });

    // Source: snapshot_2.02.33/scripting-api-reference-project-model-sound.html
    put("Sound", "setFadeInCurve", {
        args: [
            { name: "length", typeText: "number" },
            { name: "curveShape", typeText: "number", optional: true }
        ],
        returnTypeText: "void",
        source: "project-model-sound#soundsetfadeincurve"
    });
    put("Sound", "setFadeOutCurve", {
        args: [
            { name: "length", typeText: "number" },
            { name: "curveShape", typeText: "number", optional: true }
        ],
        returnTypeText: "void",
        source: "project-model-sound#soundsetfadeoutcurve"
    });

    // Source: snapshot_2.02.33/scripting-api-reference-project-model-mixereffect.html
    put("ConvolutionReverbEffect", "setIRFromFilePath", {
        args: [{ name: "filePath", typeText: "string" }],
        returnTypeText: "void",
        source: "project-model-mixereffect#convolutionreverbeffectsetirfromfilepath"
    });

    return map;
}

