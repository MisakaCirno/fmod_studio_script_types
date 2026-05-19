const net = require("net");

function parseArgs(argv) {
  const args = {
    host: "127.0.0.1",
    port: 3663,
    timeout: 1500,
    send: null,
    newline: false,
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
    } else if (arg === "--send") {
      args.send = argv[++i];
    } else if (arg === "--newline") {
      args.newline = true;
    } else if (arg === "--raw") {
      args.raw = true;
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

  return args;
}

function printUsage() {
  console.log("Usage: node tcp-probe.js [--host 127.0.0.1] [--port 3663] [--timeout 1500]");
  console.log("       node tcp-probe.js --send \"studio.version\" [--newline] [--raw]");
}

function displayText(text, raw) {
  return raw ? text : text.replace(/\0/g, "");
}

function printChunk(label, text, raw) {
  const bytes = Buffer.from(text, "utf8");
  console.log(`${label} ${bytes.length} bytes`);
  console.log(displayText(text, raw));
}

try {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printUsage();
    process.exit(0);
  }

  const chunks = [];
  let connected = false;
  const socket = net.createConnection({ host: args.host, port: args.port });
  socket.setEncoding("utf8");
  socket.setTimeout(args.timeout);

  socket.on("connect", () => {
    connected = true;
    console.log(`Connected to ${args.host}:${args.port}`);

    if (args.send != null) {
      const payload = args.newline ? `${args.send}\n` : args.send;
      console.log(`Sending ${Buffer.byteLength(payload, "utf8")} bytes`);
      socket.write(payload);
    } else {
      console.log("No JavaScript sent. Waiting for any server greeting...");
    }
  });

  socket.on("data", chunk => {
    chunks.push(chunk);
    printChunk("Received", chunk, args.raw);
  });

  socket.on("timeout", () => {
    if (chunks.length === 0) {
      console.log(`No data received within ${args.timeout} ms.`);
    }
    socket.destroy();
  });

  socket.on("error", error => {
    console.error(`TCP probe failed: ${error.message}`);
    process.exitCode = 1;
  });

  socket.on("close", () => {
    if (connected && process.exitCode == null) {
      console.log("Connection closed.");
      process.exitCode = 0;
    }
  });
} catch (error) {
  console.error(error.message);
  printUsage();
  process.exit(1);
}
