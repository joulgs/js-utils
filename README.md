# jgs-js-utils

Javascript formatting functions for the main Brazilian number standards.

<p align="center">
<img src="https://img.shields.io/github/license/joulgs/js-utils"/>
</p>

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
- [validateEmail](#validateEmail)


## Using the Functions

### formatPhoneNumber

format different phone numbers, with or without area code, with or without the ninth digit.

Use
``` Typescript
formatPhoneNumber(string | number);
```


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

### validateEmail

returns true if the email is valid, false otherwise.

Use
``` Typescript
validateEmail(string);
```

``` Typescript
import { validateEmail } from "jgs-js-utils";

console.log(validateEmail(null))                // false
console.log(validateEmail(undefined))           // false
console.log(validateEmail(123))                 // false
console.log(validateEmail(''))                  // false
console.log(validateEmail('teste'))             // false
console.log(validateEmail('teste@'))            // false
console.log(validateEmail('teste@teste'))       // false
console.log(validateEmail('teste@teste.com'))   // true
```

