# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev


npm run build

# Start production server (after build)
npm start

# Lint the codebase
npm run lint

# Apply patches after dependency changes
npm run postinstall
```

## About Website

The purpose of this api is to cheer up someone using outrageous funny lies. These lies are created by AI. The lies range from fantastical stories of, giants, islands in the sky, huge goldfish, dinosaurs, heroic adventures etc.

## Architecture Overview

The architecture for this API is simple. This API uses the MVC architecture.
The API is written using Typescript and the types are strongly typed.

### Stack

- Node js
- Express
- Mongo DB

## Tools

- Prettier for formatting the code
- ESLint to lint the code
