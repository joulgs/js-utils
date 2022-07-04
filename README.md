# jgs-js-utils

Javascript formatting functions for the main Brazilian number standards.

<p align="center">
<img src="https://img.shields.io/github/license/joulgs/js-utils"/>
</p>

---

## Installation

- Using NPM

```bash
npm install jgs-js-utils
```

- Using YARN

```bash
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

> ⚠️ all functions will show a warning on the console if given a **null** or **undefined** value and will return **false** or an **empty string**.

---

## Functions List

- [formatOnlyNumbers](#formatOnlyNumbers)
- [formatPhoneNumber](#formatPhoneNumber)
- [formatZipCode](#formatZipCode)
- [formatCnpj](#formatCnpj)
- [formatCpf](#formatCpf)
- [validateEmail](#validateEmail)
- [validateCnpj](#validateCnpj)
- [validateCpf](#validateCpf)
- [formatCnp](#formatCnp)

Coming soon:

- [formatDate](#formatCpfCnpj)
- [formatTime](#formatCpfCnpj)
- [formatDateTime](#formatCpfCnpj)
- [formatMoney](#formatMoney)
- [validateCpfCnpj](#validateCnpj)
- [validateNis (Portugal 9 digits)](#validateNis)
- [validateNis (Angola 10 digits)](#validateNis)

## Using the Functions

### formatOnlyNumbers

returns a **string** with only numbers.

Use
``` Typescript
formatOnlyNumbers(string | number);
```


``` Typescript

import { formatOnlyNumbers } from "jgs-js-utils";

console.log( formatOnlyNumbers('cpf: 476.848.724-60') );  // 47684872460
console.log( formatOnlyNumbers('     476848724-60 ') );   // 47684872460
console.log( formatOnlyNumbers('476848724-60 pos') );     // 47684872460
```

### formatPhoneNumber

format different phone numbers, with or without area code, with or without the ninth digit.

Use
``` Typescript
formatPhoneNumber(string | number);
```


``` Typescript

import { formatPhoneNumber } from "jgs-js-utils";

console.log( formatPhoneNumber(11987654321) );   // (11) 9 8765-4321
console.log( formatPhoneNumber(1187654321) );    // (11) 8765-4321
console.log( formatPhoneNumber(987654321) );     // 9 8765-4321
console.log( formatPhoneNumber(87654321) );      // 8765-4321

console.log( formatPhoneNumber('11987654321') ); // (11) 9 8765-4321
console.log( formatPhoneNumber('1187654321') );  // (11) 8765-4321
console.log( formatPhoneNumber('987654321') );   // 9 8765-4321
console.log( formatPhoneNumber('87654321') );    // 8765-4321
```

### formatZipCode

returns a string with the zip code formatted.

Use
``` Typescript
formatZipCode(string | number);
```

``` Typescript
import { formatZipCode } from "jgs-js-utils";

console.log( formatZipCode(1234567) );      // 1234567
console.log( formatZipCode(12345678) );     // 12345-678
console.log( formatZipCode('12345678') );   // 12345-678
```

### formatCnpj

returns a string with the CNPJ formatted.

Use
``` Typescript
formatCnpj(string | number);
```

``` Typescript
import { formatCnpj } from "jgs-js-utils";

console.log( formatCnpj(12345678000104) );    // 12.345.678/0001-04
console.log( formatCnpj('12345678000104') );  // 12.345.678/0001-04
```

### formatCpf

returns a string with the CPF formatted.

Use
``` Typescript
formatCpf(string | number);
```

``` Typescript
import { formatCpf } from "jgs-js-utils";

console.log( formatCpf(12345678901) );    // 123.456.789-01
console.log( formatCpf('12345678901') );  // 123.456.789-01
```

### formatCnp

return a string with the CNPJ or CPF formatted.

Use
``` Typescript
formatCnp(string | number);
```

``` Typescript
import { formatCnp } from "jgs-js-utils";

console.log( formatCnp(12345678000104) );    // 12.345.678/0001-04
console.log( formatCnp('12345678000104') );  // 12.345.678/0001-04
console.log( formatCnp(12345678901) );       // 123.456.789-01
console.log( formatCnp('12345678901') );     // 123.456.789-01
```

### validateEmail

returns true if the email is valid, false otherwise.

Use
``` Typescript
validateEmail(string);
```

``` Typescript
import { validateEmail } from "jgs-js-utils";

console.log( validateEmail('') );                  // false
console.log( validateEmail('teste') );             // false
console.log( validateEmail('teste@') );            // false
console.log( validateEmail('teste@teste') );       // false
console.log( validateEmail('teste@teste.com') );   // true
```

### validateCnpj

returns true if the CNPJ is valid, false otherwise.

Use
``` Typescript
validateCnpj(string | number);
```

``` Typescript
import { validateCnpj } from "jgs-js-utils";

console.log( validateCnpj('77272951000144') );     // true
console.log( validateCnpj('77.272.951/0001-44') ); // true
console.log( validateCnpj(77272951000144) );       // true
console.log( validateCnpj('77.272.951/0001-43') ); // false
console.log( validateCnpj(77272951000143) );       // false
```

### validateCpf

returns true if the CPF is valid, false otherwise.

Use
``` Typescript
validateCpf(string | number);
```

``` Typescript
import { validateCnpj } from "jgs-js-utils";

console.log( validateCpf('476.848.724-60') ); // true
console.log( validateCpf('225668949-22') );   // true
console.log( validateCpf(84832198327) );      // true
console.log( validateCpf('476.848.724-69') ); // false
console.log( validateCpf('225668949-21') );   // false
console.log( validateCpf(84832198326) );      // false
```
