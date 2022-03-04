# jgs-js-utils

Javascript formatting functions for the main Brazilian number standards.


---

## Installation

- Using NPM

```
npm install jgs-js-utils
```

- Using YARN

```
yarn add jgs-js-utils
```

---

## How to use

just import the desired function

``` typescript
import { formatPhoneNumber } from "jgs-js-utils";

var phone = 11987654321
console.log(formatPhoneNumber(phone)); // print: (11) 9 8765-4321
```

---

## Functions List

- [formatPhoneNumber](#formatPhoneNumber)


### Using the Functions

 - ### `formatPhoneNumber(number | string)` {#formatPhoneNumber}

format different phone numbers, with or without area code, with or without the ninth digit.

``` Typescript

import { formatPhoneNumber } from "jgs-js-utils";

console.log(formatPhoneNumber(11987654321))     // (11) 9 8765-4321
console.log(formatPhoneNumber(1187654321))      // (11) 8765-4321
console.log(formatPhoneNumber(987654321))       // 9 8765-4321
console.log(formatPhoneNumber(87654321))        // 8765-4321

console.log(formatPhoneNumber('11987654321'))   // (11) 9 8765-4321
console.log(formatPhoneNumber('1187654321'))    // (11) 8765-4321
console.log(formatPhoneNumber('987654321'))     // 9 8765-4321
console.log(formatPhoneNumber('87654321'))      // 8765-4321
```