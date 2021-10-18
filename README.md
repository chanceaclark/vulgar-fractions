# vulgar-fractions

[![npm version](https://badge.fury.io/js/vulgar-fractions.svg)](https://badge.fury.io/js/vulgar-fractions)

Simple library to convert decimals into unicode vulgar fractions.

## Usage

```ts
import { toDecimal, toVulgar } from 'vulgar-fractions';

// Convert decimal to unicode vulgar:
toVulgar(.25) // '¼'
toVulgar(1/9) // '⅑'

// Convert vulgar to decimal string:
toDecimal('⅛') // '0.125'
toDecimal('⅔') // '0.666...'
```

If a value doesn't have a "simple" conversion, meaning there is no appropriate unicode character, either function will return the stringified input.

```ts
toVulgar(.1274859937) // '.1274859937'
toDecimal('Hello World!') // 'Hello World!
```

### Parsing strings or multi-line text

```ts
parseVuglars('1/2 cup') // '½ cup'
parseVuglars('It take 1/2 cup chocolate chips and 1/4 cup sugar. Additionally it takes 4.75 cups flour.') // It take ½ cup chocolate chips and ¼ cup sugar. Additionally it takes 4 ¾ cups flour.
```

## Contribute

Feel free to open up a GitHub Issue, Discussion, or Pull Request.
