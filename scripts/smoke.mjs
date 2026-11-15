// Loads the built package the way an ESM consumer would (via the "exports" map).
import assert from 'node:assert/strict';

import { parseVulgars, toDecimal, toVulgar } from 'vulgar-fractions';

assert.equal(toVulgar(0.25), '¼');
assert.equal(toDecimal('½'), '0.5');
assert.equal(parseVulgars('4.75'), '4 ¾');
