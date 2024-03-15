/* istanbul ignore next */
const VULGAR_MAP = new Map([
  ['¼', [0.25]],
  ['½', [0.5]],
  ['¾', [0.75]],
  [
    '⅐',
    [
      0.142,
      0.1428,
      0.14285,
      0.142857,
      0.1428571,
      0.14285714,
      0.142857142,
      0.1428571428,
      0.14285714285,
      0.142857142857,
      0.1428571428571,
      0.14285714285714,
      0.142857142857142,
      0.1428571428571428,
      0.14285714285714285,
      1 / 7,
    ],
  ],
  [
    '⅑',
    [
      0.111,
      0.1111,
      0.11111,
      0.11111,
      0.111111,
      0.1111111,
      0.11111111,
      0.111111111,
      0.1111111111,
      0.11111111111,
      0.111111111111,
      0.1111111111111,
      0.11111111111111,
      0.111111111111111,
      0.1111111111111111,
      1 / 9,
    ],
  ],
  ['⅒', [0.1]],
  [
    '⅓',
    [
      0.333,
      0.3333,
      0.33333,
      0.33333,
      0.333333,
      0.3333333,
      0.33333333,
      0.333333333,
      0.3333333333,
      0.33333333333,
      0.333333333333,
      0.3333333333333,
      0.33333333333333,
      0.333333333333333,
      0.3333333333333333,
      1 / 3,
    ],
  ],
  [
    '⅔',
    [
      0.666,
      0.6666,
      0.66666,
      0.66666,
      0.666666,
      0.6666666,
      0.66666666,
      0.666666666,
      0.6666666666,
      0.66666666666,
      0.666666666666,
      0.6666666666666,
      0.66666666666666,
      0.666666666666666,
      0.6666666666666666,
      2 / 3,
    ],
  ],
  ['⅕', [0.2]],
  ['⅖', [0.4]],
  ['⅗', [0.6]],
  ['⅘', [0.8]],
  [
    '⅙',
    [
      0.166,
      0.1666,
      0.16666,
      0.16666,
      0.166666,
      0.1666666,
      0.16666666,
      0.166666666,
      0.1666666666,
      0.16666666666,
      0.166666666666,
      0.1666666666666,
      0.16666666666666,
      0.166666666666666,
      0.1666666666666666,
      1 / 6,
    ],
  ],
  [
    '⅚',
    [
      0.833,
      0.8333,
      0.83333,
      0.83333,
      0.833333,
      0.8333333,
      0.83333333,
      0.833333333,
      0.8333333333,
      0.83333333333,
      0.833333333333,
      0.8333333333333,
      0.83333333333333,
      0.833333333333333,
      0.8333333333333333,
      5 / 6,
    ],
  ],
  ['⅛', [0.125]],
  ['⅜', [0.375]],
  ['⅝', [0.625]],
  ['⅞', [0.875]],
]);

const FRACTION_REGEXP = new RegExp(/^\d+\/\d+/);

const DECIMAL_REGEXP = new RegExp(/^\d*\.+\d*$/);

const hasMapping = (value: number) => {
  if (typeof value === 'number') {
    return Array.from(VULGAR_MAP.values()).some((decimals) => decimals.includes(value));
  }

  return false;
};

export const toVulgar = (decimal: number): string => {
  const mapping = Array.from(VULGAR_MAP.entries()).find(([, mapping]) => mapping.includes(decimal));

  if (mapping) {
    const [vulgar] = mapping;

    return vulgar;
  }

  return String(decimal);
};

export const toDecimal = (value: string): string => {
  const mappings = VULGAR_MAP.get(value);

  if (mappings) {
    // Casting since we know it's always going to be a number.
    const lastValue = mappings.at(mappings.length - 1) as number;

    return String(lastValue);
  }

  return value;
};

export const parseVulgars = (str: string) => {
  const splitStr = str.split(' ');

  return splitStr
    .map((substr) => {
      if (FRACTION_REGEXP.test(substr)) {
        const [a, b] = substr.split('/');

        const decimal = parseInt(a, 10) / parseInt(b, 10);

        return hasMapping(decimal) ? toVulgar(decimal) : substr;
      }

      if (DECIMAL_REGEXP.test(substr)) {
        const [whole, fraction] = substr.split('.');
        const decimal = parseFloat(`.${fraction}`);
        const vulgar = toVulgar(decimal);

        return parseInt(whole, 10) ? `${whole} ${vulgar}` : vulgar;
      }

      return substr;
    })
    .join(' ');
};
