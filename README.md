# Package Size Badge GitHub Action

This GitHub Action calculates the JavaScript bundle size of your project and generates a dynamic badge using Shields.io.

## Usage

To use this action, add it to your workflow like this:

```yaml
name: "Package Size Report"

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Checkout the repository
      - name: Checkout code
        uses: actions/checkout@v4

      # Analyze the bundle size and create a badge
      - name: Analyze and Create Badge
        uses: timeowilliams/package-size-badge-action@v1.0.3
        with:
          path: "build/static/js/*.js" # User specifies the path to their JS bundle
          limit: "500 KB" # Bundle size limit
          label: "Bundle Size"
          color: "green"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Inputs

- **path**: Path to your JavaScript bundle (default: `build/static/js/*.js`).
- **limit**: Size limit for the bundle (default: `500 KB`).
- **label**: Text for the badge (default: `Bundle Size`).
- **color**: Badge color (default: `blue`).

### Outputs

- **size**: The bundle size in KB, which is also displayed in the badge URL.

### Contributing

We welcome contributions! Follow the steps below to contribute:

1. **Fork the Repository**  
   Fork this repository by clicking the Fork button at the top-right of the page.

2. **Clone your Fork**  
   Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/package-size-badge-action.git
   ```

3. **Create a New Branch**  
   Create a new branch to work on your feature or bug fix:

   ```bash
   git checkout -b my-feature-branch
   ```

4. **Make Your Changes**  
   Modify the files you need to and ensure you follow best practices and conventions. For example, you can update the core logic for the action or improve documentation.

5. **Run Tests**  
   Test the action locally by following these steps for running GitHub Actions locally.

6. **Commit and Push Your Changes**  
   Once you’re happy with your changes, commit and push them to your repository:

   ```bash
   git add .
   git commit -m "Add feature XYZ"
   git push origin my-feature-branch
   ```

7. **Create a Pull Request**  
   Go to the original repository and open a Pull Request. Please provide a detailed description of the changes and why they are necessary.

8. **Code Review**  
   Your Pull Request will be reviewed, and once it passes all checks and gets approved, it will be merged.

### Issues and Feedback

If you encounter any issues, feel free to open an Issue on GitHub. We’re happy to hear your feedback or assist with any bugs!

### License

This project is licensed under the MIT License. See the LICENSE file for more details.
