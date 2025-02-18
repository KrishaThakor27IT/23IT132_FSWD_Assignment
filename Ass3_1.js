const fs = require("fs");
const path = require("path");

function organizeFiles(directory) {
  if (!fs.existsSync(directory)) {
    console.log("Directory does not exist.");
    return;
  }

  const categories = {
    Images: [".jpg", ".png", ".jpeg", ".gif"],
    Documents: [".pdf", ".docx", ".txt"],
    Videos: [".mp4", ".mkv", ".avi"],
  };

  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file);
    if (fs.lstatSync(filePath).isFile()) {
      const ext = path.extname(file).toLowerCase();
      const folder = Object.keys(categories).find((key) =>
        categories[key].includes(ext)
      ) || "Others";

      const folderPath = path.join(directory, folder);
      if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);

      fs.renameSync(filePath, path.join(folderPath, file));
      console.log(`Moved: ${file} -> ${folder}/`);
    }
  });

  console.log("Organizing complete.");
}

// Set your path here (AUTO-RUNS FOR lab-3 FOLDER)
const dir = "C:\\Users\\krish\\OneDrive\\Documents\\4th Semester\\FSWD\\lab-3";
organizeFiles(dir);
