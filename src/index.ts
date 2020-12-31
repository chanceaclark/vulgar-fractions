const VULGAR_MAP: Record<string, number> = {
  '¼': 0.25,
  '½': 0.5,
  '¾': 0.75,
  '⅐': 1 / 7,
  '⅑': 1 / 9,
  '⅒': 0.1,
  '⅓': 1 / 3,
  '⅔': 2 / 3,
  '⅕': 0.2,
  '⅖': 0.4,
  '⅗': 0.6,
  '⅘': 0.8,
  '⅙': 1 / 6,
  '⅚': 5 / 6,
  '⅛': 0.125,
  '⅜': 0.375,
  '⅝': 0.625,
  '⅞': 0.875,
};

const DECIMAL_MAP: Record<number, string> = Object.fromEntries(
  Object.entries(VULGAR_MAP).map(([vulgar, decimal]) => [decimal, vulgar]),
);

const hasMapping = (value: string | number) => {
  if (typeof value === 'string') {
    return Object.keys(VULGAR_MAP).includes(value);
  }

  if (typeof value === 'number') {
    return Object.keys(DECIMAL_MAP).includes(String(value));
  }

  return false;
};

export const toVulgar = (decimal: number) => (hasMapping(decimal) ? DECIMAL_MAP[decimal] : undefined);

export const toDecimal = (value: string) => (hasMapping(value) ? VULGAR_MAP[value] : undefined);
