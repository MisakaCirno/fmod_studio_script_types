(function () {
  if (!studio || !studio.window || !studio.window.actions) {
    throw new Error("FMOD Studio window action API is not available.");
  }

  var action = studio.window.actions.ScriptReload;
  if (typeof action !== "number") {
    throw new Error("studio.window.actions.ScriptReload is not available.");
  }

  studio.window.triggerAction(action);

  return JSON.stringify({
    action: "ScriptReload",
    actionValue: action,
    triggered: true
  });
})();
