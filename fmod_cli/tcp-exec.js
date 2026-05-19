const fs = require("fs");
const net = require("net");
const path = require("path");

function parseArgs(argv) {
  const args = {
    host: "127.0.0.1",
    port: 3663,
    timeout: 3000,
    code: null,
    file: null,
    newline: true,
    yes: false,
    raw: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--host") {
      args.host = argv[++i];
    } else if (arg === "--port") {
      args.port = Number(argv[++i]);
    } else if (arg === "--timeout") {
      args.timeout = Number(argv[++i]);
    } else if (arg === "--code") {
      args.code = argv[++i];
    } else if (arg === "--file") {
      args.file = argv[++i];
    } else if (arg === "--no-newline") {
      args.newline = false;
    } else if (arg === "--raw") {
      args.raw = true;
    } else if (arg === "--yes") {
      args.yes = true;
    } else if (arg === "-h" || arg === "--help") {
      args.help = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  if (args.help) {
    return args;
  }

  if (!Number.isInteger(args.port) || args.port <= 0) {
    throw new Error("--port must be a positive integer.");
  }
  if (!Number.isInteger(args.timeout) || args.timeout <= 0) {
    throw new Error("--timeout must be a positive integer.");
  }
  if ((args.code == null) === (args.file == null)) {
    throw new Error("Pass exactly one of --code or --file.");
  }

  return args;
}

function printUsage() {
  console.log("Usage: node tcp-exec.js --code \"studio.version\" --yes [--raw]");
  console.log("       node tcp-exec.js --file .\\examples\\version.js --yes [--raw]");
}

function loadPayload(args) {
  if (args.code != null) {
    return args.code;
  }

  const filePath = path.resolve(args.file);
  return fs.readFileSync(filePath, "utf8");
}

function preview(payload) {
  const lines = payload.split(/\r?\n/);
  return lines.slice(0, 12).join("\n") + (lines.length > 12 ? "\n..." : "");
}

function displayText(text, raw) {
  return raw ? text : text.replace(/\0/g, "");
}

try {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printUsage();
    process.exit(0);
  }

  let payload = loadPayload(args);
  if (args.newline && !payload.endsWith("\n")) {
    payload += "\n";
  }

  if (!args.yes) {
    console.error("Refusing to send JavaScript without --yes.");
    console.error("Payload preview:");
    console.error(preview(payload));
    process.exit(2);
  }

  const socket = net.createConnection({ host: args.host, port: args.port });
  const chunks = [];
  let connected = false;
  socket.setEncoding("utf8");
  socket.setTimeout(args.timeout);

  socket.on("connect", () => {
    connected = true;
    console.log(`Connected to ${args.host}:${args.port}`);
    console.log(`Sending ${Buffer.byteLength(payload, "utf8")} bytes`);
    socket.end(payload);
  });

  socket.on("data", chunk => {
    chunks.push(chunk);
    process.stdout.write(displayText(chunk, args.raw));
  });

  socket.on("timeout", () => {
    if (chunks.length === 0) {
      console.error(`No response within ${args.timeout} ms.`);
      process.exitCode = 124;
    }
    socket.destroy();
  });

  socket.on("error", error => {
    console.error(`TCP exec failed: ${error.message}`);
    process.exitCode = 1;
  });

  socket.on("close", () => {
    if (!connected && process.exitCode == null) {
      process.exitCode = 1;
    } else if (process.exitCode == null) {
      process.exitCode = 0;
    }
  });
} catch (error) {
  console.error(error.message);
  printUsage();
  process.exit(1);
}
