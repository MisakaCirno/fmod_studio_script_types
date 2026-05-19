const { spawnSync } = require("child_process");
const fs = require("fs");

const DEFAULT_EXE = "D:\\MiSoftware\\FMOD Studio 2.02.15\\fmodstudiocl.exe";
const DEFAULT_HELP_ARG = "--help";
const DEFAULT_TIMEOUT_MS = 5000;

function parseArgs(argv) {
  const args = { exe: DEFAULT_EXE, helpArg: DEFAULT_HELP_ARG, timeout: DEFAULT_TIMEOUT_MS };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--exe") {
      args.exe = argv[++i];
    } else if (arg === "--help-arg") {
      args.helpArg = argv[++i];
    } else if (arg === "--timeout") {
      args.timeout = Number(argv[++i]);
    } else if (arg === "-h" || arg === "--help") {
      args.help = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return args;
}

function printUsage() {
  console.log("Usage: node fmodstudiocl-info.js [--exe <path>] [--help-arg --help] [--timeout 5000]");
}

try {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printUsage();
    process.exit(0);
  }

  console.log(`FMOD Studio command-line executable: ${args.exe}`);
  if (!fs.existsSync(args.exe)) {
    console.error("Executable not found.");
    process.exit(1);
  }

  const result = spawnSync(args.exe, [args.helpArg], {
    encoding: "utf8",
    timeout: args.timeout,
    windowsHide: true
  });

  if (result.error) {
    throw result.error;
  }
  if (result.signal) {
    console.error(`Process ended by signal: ${result.signal}`);
  }

  if (result.stdout) {
    process.stdout.write(result.stdout);
  }
  if (result.stderr) {
    process.stderr.write(result.stderr);
  }

  process.exit(result.status == null ? 0 : result.status);
} catch (error) {
  console.error(error.message);
  printUsage();
  process.exit(1);
}
