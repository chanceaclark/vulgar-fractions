import { parseVulgars } from '../src';

it('parses vulgars - simple', () => {
  const expected = parseVulgars('1/2 cup');

  expect(expected).toBe('½ cup');
});

it("parses vulgars - simple - can't parse", () => {
  const expected = parseVulgars('1 / 2 cup');

  expect(expected).toBe('1 / 2 cup');
});

it("parses vulgars - simple - can't parse non-vulgar", () => {
  const expected = parseVulgars('1/100 cup');

  expect(expected).toBe('1/100 cup');
});

it('parses vulgars - complex', () => {
  const expected = parseVulgars(
    'The recipe calls for 1/2 cup of oats. There is also a 1/9 Tbsp of coffee added to it. 12.25 cups of flour will be required, alongside 0.5 tsp of baking soda.',
  );

  expect(expected).toBe(
    'The recipe calls for ½ cup of oats. There is also a ⅑ Tbsp of coffee added to it. 12 ¼ cups of flour will be required, alongside ½ tsp of baking soda.',
  );
});
