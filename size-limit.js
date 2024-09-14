import { execSync } from 'child_process';
import fs from 'fs';
import core from '@actions/core';
import github from '@actions/github';

(async function run() {
  try {
    // Step 1: Get the path and preset input from the user
    const path = core.getInput('path');  // Path to the JS files
    const preset = core.getInput('preset') || 'app';  // Default to "app" preset

    // Step 2: Install the appropriate preset based on the user's input
    let presetPackage;
    switch (preset) {
      case 'big-lib':
        presetPackage = '@size-limit/preset-big-lib';
        break;
      case 'small-lib':
        presetPackage = '@size-limit/preset-small-lib';
        break;
      case 'app':
      default:
        presetPackage = '@size-limit/preset-app';
        break;
    }

    try {
      // Ensure the preset is installed (you can omit this if presets are always pre-installed)
      execSync(`npm install --save-dev ${presetPackage}`);

      // Step 3: Run size-limit with the user-defined path
      const config = {
        "size-limit": [
          {
            "path": path,
            "preset": preset
          }
        ]
      };
      
      // Write a temporary size-limit config file based on user input
      fs.writeFileSync('size-limit.config.json', JSON.stringify(config));

      // Run size-limit using the generated config file
      execSync('npx size-limit --config size-limit.config.json --json > size-report.json');
    } catch (error) {
      core.setFailed('Failed to run size-limit. Ensure size-limit is installed and configured correctly.');
      return;
    }

    // Step 4: Parse the size-limit output
    let report;
    try {
      report = JSON.parse(fs.readFileSync('size-report.json', 'utf8'));
    } catch (error) {
      core.setFailed('Error parsing size-limit output. Ensure the build process was successful.');
      return;
    }

    // Step 5: Extract the bundle size in KB
    const size = Math.round(report[0].size / 1024);  // Convert bytes to KB
    core.setOutput('size', size);
    console.log(`Bundle size: ${size} KB`);

    // Step 6: Retrieve user-defined inputs for label and color
    const label = core.getInput('label') || 'Bundle Size';
    const limit = parseInt(core.getInput('limit'), 10) || 500;  // Default limit is 500 KB
    const color = core.getInput('color') || 'blue';  // Badge color, default is blue
    const failOnLimit = core.getInput('fail_on_limit') === 'true';

    // Step 7: Check if the size exceeds the limit
    if (size > limit) {
      if (failOnLimit) {
        core.setFailed(`Bundle size exceeds the limit of ${limit} KB: ${size} KB`);
      } else {
        console.log(`Warning: Bundle size exceeds the limit of ${limit} KB: ${size} KB`);
      }
    }

    // Step 8: Create the badge URL using shields.io
    const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(label)}-${size}KB-${color}`;
    console.log(`Badge URL: ${badgeUrl}`);

    // Step 9: Optionally, commit the badge to the repository
    const githubToken = core.getInput('github_token');
    if (githubToken) {
      const octokit = github.getOctokit(githubToken);
      const badgeContent = `![Bundle Size](${badgeUrl})`;
      const branch = core.getInput('branch') || 'main';

      try {
        await octokit.repos.createOrUpdateFileContents({
          owner: github.context.repo.owner,
          repo: github.context.repo.repo,
          path: 'README.md',  // or any other file where you want the badge to appear
          message: 'Update bundle size badge',
          content: Buffer.from(badgeContent).toString('base64'),
          branch,
          committer: {
            name: 'github-actions',
            email: 'github-actions@github.com',
          },
          author: {
            name: 'github-actions',
            email: 'github-actions@github.com',
          },
        });
        console.log('Badge added to README.md');
      } catch (error) {
        core.setFailed(`Failed to update the README with the badge: ${error.message}`);
      }
    }
  } catch (error) {
    core.setFailed(error.message);
  }
})();
