import { toVulgar } from '../src';

it.each([
  { decimal: 0.25, expected: '¼' },
  { decimal: 0.5, expected: '½' },
  { decimal: 0.75, expected: '¾' },
  { decimal: 1 / 7, expected: '⅐' },
  { decimal: 1 / 9, expected: '⅑' },
  { decimal: 0.1, expected: '⅒' },
  { decimal: 1 / 3, expected: '⅓' },
  { decimal: 2 / 3, expected: '⅔' },
  { decimal: 0.2, expected: '⅕' },
  { decimal: 0.4, expected: '⅖' },
  { decimal: 0.6, expected: '⅗' },
  { decimal: 0.8, expected: '⅘' },
  { decimal: 1 / 6, expected: '⅙' },
  { decimal: 5 / 6, expected: '⅚' },
  { decimal: 0.125, expected: '⅛' },
  { decimal: 0.375, expected: '⅜' },
  { decimal: 0.625, expected: '⅝' },
  { decimal: 0.875, expected: '⅞' },
])('converts $decimal to vulgar $expected', ({ decimal, expected }) => {
  expect(toVulgar(decimal)).toBe(expected);
});

it("doesn't convert non-vulgar to vulgar", () => {
  expect(toVulgar(0.1345)).toBe('0.1345');
});

it("doesn't convert booleans to vulgar", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(toVulgar(false)).toBe('false');
});
