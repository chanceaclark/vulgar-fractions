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

## [1.4.3] - 2024-03-12

### Internal
- Migrated from npm to pnpm
- Bumped all dev dependencies to latest versions
- Security: patched several transitive dependency vulnerabilities
  (lodash, minimist, semver, json5, ansi-regex, and others via Dependabot)

## [1.4.2] - 2023-03-09

### Internal
- CI updated to Node 18
- README and package.json metadata updates

## [1.4.1] - 2022-06-01

### Internal
- SWC output is now minified
- Source maps are included in the dist

## [1.4.0] - 2022-05-30

### Added
- `parseVulgars` — parses a string and converts fraction notation (`1/2`) and
  decimal notation (`4.75`) to vulgar unicode characters in place

### Internal
- Build toolchain migrated from Babel to SWC
- Jest tests added with 100% coverage requirement

## [1.2.0] - 2021-05-02

### Added
- Dual CJS and ES module output (`dist/cjs` and `dist/es`)

## [1.0.0] - 2020-12-31

### Added
- Initial release: `toVulgar` and `toDecimal` functions
