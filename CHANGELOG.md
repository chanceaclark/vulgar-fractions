# Changelog

## [1.5.1] - 2026-08-17

### Fixed
- Removed duplicate decimal approximations in `VULGAR_MAP` for ⅑, ⅓, ⅔, ⅙, and ⅚.
  Each had a 5-digit entry listed twice, which was harmless but wasteful.

### Internal
- Upgraded all dev dependencies: SWC 0.8/1.16, Jest 30, TypeScript 7, ESLint 10
- Migrated ESLint config to flat config format (`eslint.config.js`);
  switched from `eslint-plugin-import` to `eslint-plugin-import-x`
- Migrated from pnpm 10 to pnpm 11; consolidated pnpm config into
  `pnpm-workspace.yaml`
- CI now tests on Node 22 and 24 (Node 18/20 dropped as build-tool requirement
  of pnpm 11 — no change to runtime support)

## [1.5.0] - 2024-03-15

### Added
- Smaller decimals (fewer than 3 significant digits) can now be parsed as
  vulgar fractions by `parseVulgars`
