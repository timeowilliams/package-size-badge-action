import { execSync } from "child_process";
import fs from "fs";
import * as core from "@actions/core";

(async function run() {
  try {
    // Step 1: Get the path and limit inputs from the user
    const path = core.getInput("path") || "build/static/js/*.js";
    const limit = core.getInput("limit") || "500 KB";
    const label = core.getInput("label") || "Bundle Size";
    const color = core.getInput("color") || "blue";

    // Step 2: Ensure size-limit is available (if running via npx fails)
    console.log("Running size-limit...");
    execSync("./node_modules/.bin/size-limit --json > size-report.json", {
      stdio: "inherit",
    });
    console.log("Size limit executed successfully");

    // Step 3: Parse the size-limit output
    let report;
    try {
      report = JSON.parse(fs.readFileSync("size-report.json", "utf8"));
    } catch (error) {
      core.setFailed("Error parsing size-limit output.");
      return;
    }

    // Step 4: Extract the bundle size in KB
    const size = Math.round(report[0].size / 1024);
    core.setOutput("size", size);
    console.log(`Bundle size: ${size} KB`);

    // Step 5: Create badge URL using shields.io
    const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(label)}-${size}KB-${color}`;
    console.log(`Badge URL: ${badgeUrl}`);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
