import { toDecimal } from '../src';

it.each([
  { expected: '0.25', vulgar: '¼' },
  { expected: '0.5', vulgar: '½' },
  { expected: '0.75', vulgar: '¾' },
  { expected: Number(1 / 7).toString(), vulgar: '⅐' },
  { expected: Number(1 / 9).toString(), vulgar: '⅑' },
  { expected: '0.1', vulgar: '⅒' },
  { expected: Number(1 / 3).toString(), vulgar: '⅓' },
  { expected: Number(2 / 3).toString(), vulgar: '⅔' },
  { expected: '0.2', vulgar: '⅕' },
  { expected: '0.4', vulgar: '⅖' },
  { expected: '0.6', vulgar: '⅗' },
  { expected: '0.8', vulgar: '⅘' },
  { expected: Number(1 / 6).toString(), vulgar: '⅙' },
  { expected: Number(5 / 6).toString(), vulgar: '⅚' },
  { expected: '0.125', vulgar: '⅛' },
  { expected: '0.375', vulgar: '⅜' },
  { expected: '0.625', vulgar: '⅝' },
  { expected: '0.875', vulgar: '⅞' },
])('converts $vulgar to decimal $expected', ({ vulgar, expected }) => {
  expect(toDecimal(vulgar)).toBe(expected);
});

it("doesn't convert non-vulgar string to vulgar", () => {
  expect(toDecimal('hello')).toBe('hello');
});

it("doesn't convert booleans to vulgar", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(toDecimal(false)).toBe(false);
});
