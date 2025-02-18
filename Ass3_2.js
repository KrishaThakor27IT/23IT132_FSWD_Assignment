const fs = require("fs");
const path = require("path");

function backupFile(sourceFile, backupFolder) {
  try {
    if (!fs.existsSync(sourceFile)) {
      console.log("Source file does not exist.");
      return;
    }

    if (!fs.existsSync(backupFolder)) fs.mkdirSync(backupFolder, { recursive: true });

    const fileName = path.basename(sourceFile);
    const backupPath = path.join(backupFolder, fileName);

    fs.copyFileSync(sourceFile, backupPath);
    console.log(`File copied to: ${backupPath}`);

    const logData = `File: ${fileName} | Size: ${fs.statSync(sourceFile).size} bytes | Time: ${new Date().toLocaleString()}\n`;
    fs.appendFileSync("backup-log.txt", logData);
    
    console.log("Backup completed and logged.");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Define file path and backup folder
const sourceFile = "C:\\Users\\krish\\OneDrive\\Documents\\4th Semester\\FSWD\\Ass3_1.js";
const backupFolder = "C:\\Users\\krish\\OneDrive\\Documents\\4th Semester\\FSWD\\lab-3";

// Run backup
backupFile(sourceFile, backupFolder);
