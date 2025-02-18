const fs = require("fs");
const path = require("path");
const os = require("os");

function inspectEnvironment() {
  try {
    const envData = {
      homeDirectory: os.homedir(),
      hostname: os.hostname(),
      networkInterfaces: os.networkInterfaces(),
      environmentVariables: process.env,
    };

    console.log("System Information:");
    console.log("Home Directory:", envData.homeDirectory);
    console.log("Hostname:", envData.hostname);
    console.log("Network Interfaces:", envData.networkInterfaces);
    console.log("Saving details to env-details.json...");

    const logsDir = path.join(__dirname, "logs");
    if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

    const filePath = path.join(logsDir, "env-details.json");
    fs.writeFileSync(filePath, JSON.stringify(envData, null, 2));

    console.log("Environment details saved successfully.");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Run the inspector
inspectEnvironment();
