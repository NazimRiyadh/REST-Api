# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview

This repository is a Node.js NPM package named `rest_api`, described as an e-book REST API project. The `main` entry point is configured as `index.js` in `package.json`, but that file does not yet exist.

At the moment, `package.json` is the only tracked file in the project. All runtime code (for example, an Express app) still needs to be created.

## Commands

This project uses NPM as its package manager.

- Install dependencies (once they are added to `package.json`):
  - `npm install`
- Run tests (currently a placeholder only):
  - `npm test`
  - The existing `test` script just prints an error and exits with status 1. Before relying on tests, add a real test runner (e.g., Jest, Mocha) to `devDependencies` and update the `scripts.test` command accordingly.
- Build and lint:
  - No build, dev, or lint scripts are currently defined. When you add them under the `scripts` section in `package.json` (for example, `"start"`, `"dev"`, `"build"`, `"lint"`), use `npm run <script-name>` to execute them.

### Notes on running single tests

Once a test framework is configured, use that framework's CLI options to run individual test files or filter by test name. For example, most Node.js test runners support flags for specifying a file path or pattern; always check the updated `package.json` and the framework docs before assuming a specific command.

## Repository structure and architecture

- `package.json`
  - Defines the package name (`rest_api`), version, description, and keywords (`rest`, `api`, `express`). These keywords indicate that the intended stack is a Node.js REST API, likely using Express, but Express is not yet listed as a dependency.
  - Sets `main` to `index.js`, which is where the HTTP server or Express app should eventually be wired up.
  - Contains only a placeholder `test` script and no other `scripts`.

Given the current state of the repo, future code will likely follow a pattern such as:
- Implementing the HTTP server in `index.js` (or importing from a `src/` directory).
- Defining route handlers and middleware in separate modules once multiple endpoints are added.

## Guidance for future Warp usage

- Before assuming any framework or command, inspect `package.json` to see which dependencies and `scripts` are actually configured.
- When adding functionality (e.g., an Express server or new routes), create the missing entry file `index.js` (or a `src/` tree) and ensure `main` and relevant `scripts` in `package.json` stay consistent with the chosen structure.
- When introducing build, dev, lint, or test workflows, prefer wiring them through `package.json` scripts so they can be run uniformly with `npm run <script>`.