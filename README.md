# vulgar-fractions

[![npm version](https://badge.fury.io/js/vulgar-fractions.svg)](https://badge.fury.io/js/vulgar-fractions)

Simple library to convert decimals into unicode vulgar fractions.

## Usage

```ts
import { toDecimal, toVulgar } from 'vulgar-fractions';

// Convert decimal to unicode vulgar:
toVulgar(.25) // ¼
toVulgar(1/9) // ⅑

// Convert vulgar to decimal:
toDecimal('⅛') // 0.125
toDecimal('⅔') // 0.666...
```

If a value doesn't have a "simple" conversion, meaning there is no appropriate unicode character, either function will return `undefined`.

```ts
toVulgar(.1274859937) // undefined
toDecimal('Hello World!') // undefined
```

## Contribute

Feel free to open up a GitHub Issue, Discussion, or Pull Request.
