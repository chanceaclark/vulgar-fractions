// Loads the built package the way a CommonJS consumer would (via the "exports" map).
const assert = require('node:assert/strict');
const { parseVulgars, toDecimal, toVulgar } = require('vulgar-fractions');

assert.equal(toVulgar(0.25), '¼');
assert.equal(toDecimal('½'), '0.5');
assert.equal(parseVulgars('4.75'), '4 ¾');
