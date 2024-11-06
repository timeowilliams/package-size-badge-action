import fs from "fs";
import path from "path";
import * as core from "@actions/core";
import { sync as globSync } from "glob"; // Named import for glob

(async function run() {
  try {
    const dirPattern = core.getInput("path") || "build/static/js/*.js";
    const limit = core.getInput("limit") || "500"; // Default size limit in KB
    const label = core.getInput("label") || "Bundle Size"; // Badge label
    const color = core.getInput("color") || "blue"; // Badge color

    const startTime = Math.floor(Date.now() / 1000);
    console.log(`Starting package size calculation at: ${startTime}`);

    // Use globSync for matching files
    const files = globSync(dirPattern);

    if (files.length === 0) {
      core.setFailed(`No files found for pattern: ${dirPattern}`);
      return;
    }

    let totalSize = 0;
    for (const file of files) {
      const { size } = fs.statSync(file);
      totalSize += size;
    }

    const sizeInKB = Math.round(totalSize / 1024); // Convert bytes to KB
    core.setOutput("size", sizeInKB);
    console.log(`Total bundle size: ${sizeInKB} KB`);

    if (sizeInKB > parseInt(limit)) {
      core.setFailed(`Bundle size (${sizeInKB} KB) exceeds the limit of ${limit} KB.`);
    }

    const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(label)}-${sizeInKB}KB-${color}`;
    console.log(`Badge URL: ${badgeUrl}`);

    const endTime = Math.floor(Date.now() / 1000);
    console.log(`Finished package size calculation at: ${endTime}`);
    console.log(`Total time: ${endTime - startTime} seconds`);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
