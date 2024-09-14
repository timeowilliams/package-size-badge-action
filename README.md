# Package Size Badge GitHub Action

This GitHub Action calculates the JavaScript bundle size of your project and generates a dynamic badge using Shields.io.

## Usage

To use this action, add it to your workflow like this:

```yaml
name: "Package Size Report"

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Analyze and Create Badge
        uses: your-username/package-size-badge-action@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          path: "build/static/js/*.js"  # User specifies the path to their JS bundles
          preset: "app"  # Can be "app", "big-lib", or "small-lib"
          limit: "300"  # Optional size limit (in KB)
          color: "green"  # Optional badge color
