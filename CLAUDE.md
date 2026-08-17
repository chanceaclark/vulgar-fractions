# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm build          # compile CJS + ESM + type declarations
pnpm test           # run all tests
pnpm test -- --testPathPattern=toVulgar   # run a single test file
pnpm lint           # eslint (flat config)
pnpm prepublishOnly # full pre-publish check: lint + build
```

## Architecture

This is a zero-dependency npm library that converts between decimals and unicode vulgar fraction characters (e.g. `0.25` ↔ `¼`).

All logic lives in a single file: `src/index.ts`.

**`VULGAR_MAP`** is the core data structure: a `Map<string, number[]>` where each key is a unicode fraction character and each value is an array of decimal approximations that should resolve to it. For repeating decimals (⅓, ⅔, etc.) the array lists every truncated form from 3 digits up to 16 digits of precision, plus the exact JS floating-point result of the division (e.g. `1/3`). Terminating decimals (¼, ½, etc.) have a single-element array.

**Exported functions:**
- `toVulgar(decimal: number): string` -- looks up a decimal in the map and returns the unicode character, or `String(decimal)` if not found.
- `toDecimal(value: string): string` -- looks up a unicode character and returns the last (most precise) decimal in its array as a string, or `value` if not found.
- `parseVulgars(str: string): string` -- splits on spaces and converts each token: fraction strings like `"1/2"` are evaluated and looked up; decimal strings like `"4.75"` are split into whole + fractional parts and the fractional part is converted separately (producing e.g. `"4 ¾"`).

**Build pipeline:**
- SWC (`@swc/cli`) transpiles `src/` to both `dist/cjs/` (CommonJS) and `dist/es/` (ESM). SWC does not use `tsconfig.json` for transpilation.
- `tsc --emitDeclarationOnly` writes `dist/index.d.ts` using `tsconfig.json`. This is the only TypeScript type-checking step in the build.
- The package exposes both outputs via `"main"` (CJS) and `"module"` (ESM) fields.

**ESLint note:** `@typescript-eslint` v8 does not support TypeScript 7. It has been removed from the ESLint config; type correctness is enforced by `tsc` in the build instead. Re-add `@typescript-eslint` once it gains TypeScript 7 support (tracking: https://github.com/typescript-eslint/typescript-eslint/issues/10940).
