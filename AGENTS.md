# Repository Guidelines

## Project Structure & Module Organization

This npm workspace contains the published React library and its development
showcase. Build library code in `packages/ui/src/`: components live in
`components/<Component>/`, shared hooks and utilities in `hooks/` and `utils/`,
styles in `styles/`, and public exports in `index.ts` and `entrypoints/`.
Generated icons are managed by `packages/ui/scripts/generate-icons.mjs`.

Use `apps/playground/src/` to demonstrate components. Its registry definitions
are organized by category, for example
`registry/components/forms/button.definition.tsx`. Playground-only images and
assets belong under `apps/playground/src/images/` and `assets/`.

## Build, Test, and Development Commands

- `npm run dev` starts the Vite playground with the local library source.
- `npm run build` generates icons and builds `packages/ui` into `dist/`.
- `npm run build:all` builds both the library and playground.
- `npm run lint` checks `.ts` and `.tsx` files with ESLint.
- `npm run format` applies Prettier to TypeScript, CSS, JSON, and Markdown.
- `npm run typecheck --workspace=apps/playground` checks the playground without
  emitting output.

There is no automated test runner or coverage target configured. For component
changes, run lint, build the affected workspace, and verify the state in the
playground.

## Coding Style & Naming Conventions

Write strict TypeScript and React function components. Prettier is authoritative:
two-space indentation, single quotes, semicolons, trailing commas, and 100-column
wrapping. Use `PascalCase` for component folders, files, exports, and prop types
(`Button/Button.tsx`, `ButtonProps`); use camelCase for helpers and variables.
Keep component-specific CSS beside its component (for example `Button.css`) and
export public APIs through the relevant barrel file. Prefix intentionally unused
parameters with `_`.

## Commit & Pull Request Guidelines

Follow the existing Conventional Commit style: `fix: repair local project
generator` or `chore: release acioleui [skip ci]`. Keep commits focused and do
not manually edit generated icon output unless the generator requires it.

PRs should state the user-visible change, list validation commands, link the
related issue when available, and include playground screenshots for visual
component changes. Changes under `packages/ui/src/` on `main` trigger the npm
release workflow; avoid unrelated edits to package metadata or generated files.
