(function () {
  var summary = {
    studioType: typeof studio,
    hasProjectApi: !!(studio && studio.project),
    hasSystemApi: !!(studio && studio.system),
    hasWindowApi: !!(studio && studio.window),
    version: studio && studio.version ? String(studio.version) : null
  };

  return JSON.stringify(summary, null, 2);
})();
