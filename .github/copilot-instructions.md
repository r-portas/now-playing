# now-playing

## Overview

This repository is a collection of TypeScript scripts for scraping activity data from various sources. The project uses [Bun](https://bun.sh/), leveraging the latest JavaScript language features and Bun’s standard library for optimal performance and modern development best practices. All testing is performed using Bun's built-in test runner.

## Project Structure

The project is organized as follows:

- `src/`: Contains all code
- `src/*.ts`: Contains individual scripts which can be run directly
- `src/lib/`: Contains reusable libraries and utilities
- `package.json`: Defines project metadata and dependencies
- `bun.lockb`: Lock file for Bun dependencies

Test files should be placed in the same directory as the scripts they test, with a `.test.ts` suffix.

## Best Practices

- Always use the latest stable Bun and TypeScript versions.
- Use ES modules (import/export syntax).
- Prefer async/await and modern JS features.
- Document new scripts and APIs.
- Keep tests updated for all scripts.
- Use Zod for schema validation, any API responses should be validated against a Zod schema to ensure data integrity.

## Installing Dependencies

Bun uses its own package manager. Install dependencies with:

```bash
bun install
```

## Running Scripts

Scripts are written in TypeScript and run directly with Bun:

```bash
bun run src/my-script.ts
```

## Testing

Use Bun's built-in test framework

Tests can be run with:

```bash
bun test
```
