# FMOD CLI probes

Small local scripts for testing FMOD Studio scripting communication.

## Confirmed protocol

FMOD Studio 2.02.15 documentation says the scripting terminal can be driven
over a TCP/IP connection on port `3663`.

- Client sends UTF-8 JavaScript.
- Studio evaluates the JavaScript.
- Client receives UTF-8 strings representing the evaluated code.

The local manual page is:

`D:\MiSoftware\FMOD Studio 2.02.15\documentation\FMOD Studio User Manual\scripting-terminal-reference.html`

## Scripts

```powershell
cd D:\FMOD\Scripts\fmod_generate_type\fmod_cli
npm run info
npm run probe
```

`probe` only connects to `127.0.0.1:3663` and waits briefly. It does not send
JavaScript unless you pass `--send`.

```powershell
node .\tcp-probe.js --timeout 3000
node .\tcp-probe.js --send "studio.version" --newline
```

`exec` sends JavaScript from `--code` or `--file`. It requires `--yes` so an
accidental command does not edit the open project.

```powershell
node .\tcp-exec.js --code "studio.version" --yes
node .\tcp-exec.js --file .\examples\version.js --yes
```

Probe whether FMOD Studio accepts the Scripts reload action:

```powershell
npm run try:reload:scripts
```

This sends:

```js
studio.window.triggerAction(studio.window.actions.ScriptReload);
```

The action enum was confirmed at runtime as `ScriptReload = 78` in FMOD Studio
2.02.15. Prefer using the enum name rather than the number.

Current local result: FMOD Studio 2.02.15 exposes the enum, but rejects it with:

```text
Error: studio.window.triggerAction does not support the ScriptReload action.
```

So the exact `Scripts > Reload` menu item is not currently automatable through
`studio.window.triggerAction()` in this install. Keep this script as a quick
compatibility probe for other FMOD versions.

For single-file testing, the TCP executor can still run JavaScript directly:

```powershell
node .\tcp-exec.js --file D:\MiSoftware\FMOD Studio 2.02.15\scripts\main.js --yes
```

That executes a file over TCP, but it is not the same as Studio's full script
reload: it does not clear previously registered menu items or reload every
script directory.

## Command-line alternative

FMOD also ships a command-line executable:

`D:\MiSoftware\FMOD Studio 2.02.15\fmodstudiocl.exe`

It can run a script against a project file:

```powershell
& 'D:\MiSoftware\FMOD Studio 2.02.15\fmodstudiocl.exe' -script .\some-script.js D:\path\project.fspro
```

That path is useful for offline project processing. The TCP path is useful when
FMOD Studio is already running and we want fast probe-and-fix feedback.

Note: In this local install, `fmodstudiocl.exe --help` prints usage, while
`-help` can hang. The `info` script uses `--help` and has a timeout guard.
