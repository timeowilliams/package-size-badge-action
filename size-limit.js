import fs from "fs";
import path from "path";
import * as core from "@actions/core";

(async function run() {
  try {
    // Step 1: Get the path, limit, label, and color inputs from the user
    const dirPath = core.getInput("path") || "build/static/js"; // Default directory path to JS files
    const limit = core.getInput("limit") || "500"; // Default size limit in KB
    const label = core.getInput("label") || "Bundle Size"; // Badge label
    const color = core.getInput("color") || "blue"; // Badge color

    // Start tracking time
    const startTime = Math.floor(Date.now() / 1000);
    console.log(`Starting package size calculation at: ${startTime}`);

    // Step 2: Calculate the total size of all JS files in the specified directory
    let totalSize = 0;
    const calculateDirectorySize = async (dir) => {
      const files = fs.readdirSync(dir, { withFileTypes: true });
      for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
          await calculateDirectorySize(fullPath);
        } else if (fullPath.endsWith(".js")) {
          const { size } = fs.statSync(fullPath);
          totalSize += size;
        }
      }
    };

    await calculateDirectorySize(dirPath);
    const sizeInKB = Math.round(totalSize / 1024); // Convert bytes to KB
    core.setOutput("size", sizeInKB);
    console.log(`Total bundle size: ${sizeInKB} KB`);

    // Step 3: Check if the size exceeds the limit
    if (sizeInKB > parseInt(limit)) {
      core.setFailed(`Bundle size (${sizeInKB} KB) exceeds the limit of ${limit} KB.`);
    }

    // Step 4: Create badge URL using Shields.io
    const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(label)}-${sizeInKB}KB-${color}`;
    console.log(`Badge URL: ${badgeUrl}`);

    // End time
    const endTime = Math.floor(Date.now() / 1000);
    console.log(`Finished package size calculation at: ${endTime}`);
    console.log(`Total time: ${endTime - startTime} seconds`);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
