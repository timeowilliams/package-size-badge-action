import { execSync } from "child_process";
import fs from "fs";
import * as core from "@actions/core";

(async function run() {
  try {
    // Step 1: Get the path and limit inputs from the user
    const path = core.getInput("path") || "build/static/js/*.js"; // Default path to JS files
    const limit = core.getInput("limit") || "500 KB"; // Default size limit
    const label = core.getInput("label") || "Bundle Size"; // Badge label
    const color = core.getInput("color") || "blue"; // Badge color

    // Step 2: Install necessary dependencies
    console.log("Installing size-limit dependencies...");
    execSync("npm install size-limit @size-limit/preset-app", { stdio: "inherit" });

    // Step 3: Run size-limit to generate the report
    console.log("Running size-limit...");
    execSync("npx size-limit --json > size-report.json", { stdio: "inherit" });
    console.log("Size limit executed successfully");

    // Step 4: Parse the size-limit output
    let report;
    try {
      report = JSON.parse(fs.readFileSync("size-report.json", "utf8"));
    } catch (error) {
      core.setFailed("Error parsing size-limit output.");
      return;
    }

    // Step 5: Extract the bundle size in KB
    const size = Math.round(report[0].size / 1024); // Convert bytes to KB
    core.setOutput("size", size);
    console.log(`Bundle size: ${size} KB`);

    // Step 6: Create badge URL using shields.io
    const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(label)}-${size}KB-${color}`;
    console.log(`Badge URL: ${badgeUrl}`);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
