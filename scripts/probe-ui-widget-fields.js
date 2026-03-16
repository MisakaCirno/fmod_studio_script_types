/* global studio, console */
(function (root) {
    function safeString(value) {
        try {
            return String(value);
        } catch (err) {
            return '[unstringifiable]';
        }
    }

    function safeCall(stage, fn) {
        try {
            return { ok: true, stage: stage, value: fn() };
        } catch (err) {
            return { ok: false, stage: stage, error: safeString(err) };
        }
    }

    function summarizeValue(value) {
        var summary = {
            typeofValue: typeof value,
            tag: null,
            stringValue: safeString(value)
        };
        var tagResult = safeCall('tag', function () {
            return Object.prototype.toString.call(value);
        });
        summary.tag = tagResult.ok ? tagResult.value : '[tag error] ' + tagResult.error;
        return summary;
    }

    function inspectWidget(handle, memberNames) {
        var report = {
            widgetSummary: summarizeValue(handle),
            ownNames: [],
            enumerableKeys: [],
            members: {}
        };
        var ownNamesResult = safeCall('Object.getOwnPropertyNames', function () {
            return Object.getOwnPropertyNames(handle);
        });
        if (ownNamesResult.ok) {
            report.ownNames = ownNamesResult.value;
        } else {
            report.ownNames = ['[ownNames error] ' + ownNamesResult.error];
        }

        var key;
        for (key in handle) {
            report.enumerableKeys.push(key);
        }

        var i;
        var name;
        var memberResult;
        var callResult;
        for (i = 0; i < memberNames.length; i += 1) {
            name = memberNames[i];
            memberResult = safeCall('member:' + name, function () {
                return handle[name];
            });
            report.members[name] = {
                exists: memberResult.ok && typeof memberResult.value !== 'undefined',
                readOk: memberResult.ok,
                readError: memberResult.ok ? null : memberResult.error,
                valueSummary: memberResult.ok ? summarizeValue(memberResult.value) : null,
                callOk: false,
                callError: null,
                callValueSummary: null
            };
            if (memberResult.ok && typeof memberResult.value === 'function') {
                callResult = safeCall('call:' + name, function () {
                    return memberResult.value.call(handle);
                });
                report.members[name].callOk = callResult.ok;
                report.members[name].callError = callResult.ok ? null : callResult.error;
                report.members[name].callValueSummary = callResult.ok ? summarizeValue(callResult.value) : null;
            }
        }

        return report;
    }

    function cloneFields(source) {
        var target = {};
        var key;
        for (key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
        return target;
    }

    function createTests() {
        return [
            {
                name: 'Label.wordWrap',
                widgetType: studio.ui.widgetType.Label,
                fields: {
                    text: 'Wrapped label probe',
                    wordWrap: true
                },
                inspectNames: ['text', 'wordWrap']
            },
            {
                name: 'LineEdit.docFields',
                widgetType: studio.ui.widgetType.LineEdit,
                fields: {
                    text: 'line text',
                    isReadOnly: true,
                    echoMode: studio.ui.echoMode.Normal
                },
                inspectNames: ['text', 'isReadOnly', 'echoMode']
            },
            {
                name: 'LineEdit.extraFields',
                widgetType: studio.ui.widgetType.LineEdit,
                fields: {
                    text: 'line extra',
                    placeholderText: 'hint',
                    currentText: 'current',
                    onTextChanged: function (text) {
                        this._probeOnTextChanged = text;
                    },
                    onTextEdited: function (text) {
                        this._probeOnTextEdited = text;
                    },
                    onEditingFinished: function () {
                        this._probeOnEditingFinished = true;
                    }
                },
                inspectNames: ['text', 'placeholderText', 'currentText', 'isReadOnly']
            },
            {
                name: 'TextEdit.docFields',
                widgetType: studio.ui.widgetType.TextEdit,
                fields: {
                    text: 'plain text',
                    html: '<b>html text</b>',
                    isReadOnly: true
                },
                inspectNames: ['text', 'html', 'isReadOnly']
            },
            {
                name: 'ComboBox.docFields',
                widgetType: studio.ui.widgetType.ComboBox,
                fields: {
                    items: [
                        { text: 'First', userData: 10 },
                        { text: 'Second', userData: 'two' }
                    ],
                    currentIndex: 1,
                    onCurrentIndexChanged: function (index) {
                        this._probeOnCurrentIndexChanged = index;
                    }
                },
                inspectNames: ['items', 'currentIndex', 'currentText', 'currentUserData']
            },
            {
                name: 'ComboBox.extraFields',
                widgetType: studio.ui.widgetType.ComboBox,
                fields: {
                    itemsSource: ['Alpha', 'Beta'],
                    currentText: 'Beta'
                },
                inspectNames: ['items', 'itemsSource', 'currentIndex', 'currentText', 'currentUserData']
            },
            {
                name: 'CheckBox.docFields',
                widgetType: studio.ui.widgetType.CheckBox,
                fields: {
                    text: 'Check me',
                    isChecked: true,
                    onToggled: function (checked) {
                        this._probeOnToggled = checked;
                    }
                },
                inspectNames: ['text', 'isChecked']
            },
            {
                name: 'Slider.docFields',
                widgetType: studio.ui.widgetType.Slider,
                fields: {
                    orientation: studio.ui.orientation.Horizontal,
                    value: 5,
                    range: { minimum: 0, maximum: 10 },
                    onValueChanged: function (value) {
                        this._probeOnValueChanged = value;
                    }
                },
                inspectNames: ['value', 'range', 'orientation']
            },
            {
                name: 'Slider.extraFields',
                widgetType: studio.ui.widgetType.Slider,
                fields: {
                    orientation: studio.ui.orientation.Horizontal,
                    value: 5,
                    minimum: 0,
                    maximum: 10,
                    singleStep: 1
                },
                inspectNames: ['value', 'range', 'minimum', 'maximum', 'singleStep', 'orientation']
            },
            {
                name: 'SpinBox.docFields',
                widgetType: studio.ui.widgetType.SpinBox,
                fields: {
                    value: 2,
                    range: { minimum: 0, maximum: 5 },
                    onValueChanged: function (value) {
                        this._probeOnValueChanged = value;
                    }
                },
                inspectNames: ['value', 'range']
            },
            {
                name: 'SpinBox.extraFields',
                widgetType: studio.ui.widgetType.SpinBox,
                fields: {
                    value: 2,
                    minimum: 0,
                    maximum: 5,
                    singleStep: 1
                },
                inspectNames: ['value', 'range', 'minimum', 'maximum', 'singleStep']
            },
            {
                name: 'PathLineEdit.docFields',
                widgetType: studio.ui.widgetType.PathLineEdit,
                fields: {
                    text: 'D:/Temp/file.txt',
                    label: 'Path',
                    caption: 'Pick path',
                    pathType: studio.ui.pathType.OpenFile
                },
                inspectNames: ['text', 'label', 'caption', 'pathType']
            },
            {
                name: 'PathLineEdit.extraFields',
                widgetType: studio.ui.widgetType.PathLineEdit,
                fields: {
                    text: 'D:/Temp/file.txt',
                    placeholderText: 'hint',
                    currentText: 'current',
                    browseTitle: 'Browse title',
                    browseDirectory: 'D:/Temp',
                    pathType: studio.ui.pathType.Directory
                },
                inspectNames: ['text', 'placeholderText', 'currentText', 'browseTitle', 'browseDirectory', 'pathType']
            }
        ];
    }

    function createRootDescription(spec, report) {
        var widgetDescription = cloneFields(spec.fields || {});
        widgetDescription.widgetType = spec.widgetType;
        widgetDescription.widgetId = 'probe_target';
        widgetDescription.minimumWidth = 120;
        widgetDescription.onConstructed = function () {
            report.widgetConstructed = true;
            report.widgetInspection = inspectWidget(this, spec.inspectNames || []);
        };

        return {
            widgetType: studio.ui.widgetType.Layout,
            layout: studio.ui.layoutType.VBoxLayout,
            windowTitle: 'UI Probe: ' + spec.name,
            windowWidth: 420,
            windowHeight: 140,
            items: [widgetDescription],
            onConstructed: function () {
                report.rootConstructed = true;
                report.timerStart = safeCall('startTimer', function () {
                    return this.startTimer(1);
                });
            },
            onTimerEvent: function (timerId) {
                report.timerEvent = timerId;
                report.stopTimerResult = safeCall('stopTimer', function () {
                    return this.stopTimer(timerId);
                });
                report.closeDialogResult = safeCall('closeDialog', function () {
                    return this.closeDialog();
                });
            }
        };
    }

    function runTest(spec) {
        var report = {
            name: spec.name,
            widgetTypeValue: spec.widgetType,
            testedFields: Object.keys(spec.fields || {}),
            widgetConstructed: false,
            rootConstructed: false,
            widgetInspection: null,
            showModalResult: null,
            showModalAccepted: false,
            error: null
        };
        var description = createRootDescription(spec, report);
        var modalResult = safeCall('showModalDialog', function () {
            return studio.ui.showModalDialog(description);
        });
        report.showModalResult = modalResult;
        report.showModalAccepted = modalResult.ok;
        report.returnSummary = modalResult.ok ? summarizeValue(modalResult.value) : null;
        report.error = modalResult.ok ? null : modalResult.error;
        return report;
    }

    function main() {
        var tests = createTests();
        var report = {
            tool: 'probe-ui-widget-fields',
            time: new Date().toISOString(),
            results: []
        };
        var i;
        for (i = 0; i < tests.length; i += 1) {
            console.log('[probe-ui-widget-fields] running ' + tests[i].name);
            report.results.push(runTest(tests[i]));
        }
        root.FmodUiWidgetFieldProbeReport = report;
        console.log('[probe-ui-widget-fields] done');
        console.log(JSON.stringify(report, null, 2));
        return report;
    }

    try {
        return main();
    } catch (err) {
        console.log('[probe-ui-widget-fields] fatal: ' + safeString(err));
        throw err;
    }
})(this);