/* global studio, console */
(function () {
    function safeString(value) {
        try {
            return String(value);
        } catch (err) {
            return '[unstringifiable]';
        }
    }

    function summarize(value) {
        var summary = {
            isUndefined: typeof value === 'undefined',
            isNull: value === null,
            typeofValue: typeof value,
            tag: null,
            stringValue: null,
            ownNames: [],
            enumerableKeys: []
        };
        try {
            summary.tag = Object.prototype.toString.call(value);
        } catch (errTag) {
            summary.tag = '[tag error] ' + safeString(errTag);
        }
        summary.stringValue = safeString(value);
        if (value && (typeof value === 'object' || typeof value === 'function')) {
            try {
                summary.ownNames = Object.getOwnPropertyNames(value);
            } catch (errOwn) {
                summary.ownNames = ['[ownNames error] ' + safeString(errOwn)];
            }
            try {
                for (var key in value) {
                    summary.enumerableKeys.push(key);
                }
            } catch (errEnum) {
                summary.enumerableKeys = ['[enumeration error] ' + safeString(errEnum)];
            }
        }
        return summary;
    }

    var description = {
        widgetType: studio.ui.widgetType.Layout,
        layout: studio.ui.layoutType.VBoxLayout,
        windowTitle: 'showModalDialog Return Probe',
        windowWidth: 360,
        windowHeight: 120,
        items: [
            {
                widgetType: studio.ui.widgetType.Label,
                text: 'Click the button to close this dialog.'
            },
            {
                widgetType: studio.ui.widgetType.PushButton,
                text: 'Close',
                onClicked: function () {
                    this.closeDialog();
                }
            }
        ]
    };

    console.log('[showModalDialog probe] opening dialog');
    var result = studio.ui.showModalDialog(description);
    var summary = summarize(result);
    console.log('[showModalDialog probe] result summary: ' + JSON.stringify(summary, null, 2));
    return summary;
})();