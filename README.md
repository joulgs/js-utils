# jgs-js-utils

Javascript formatting functions for the main Brazilian number standards.

[![Version][version-badge]][package] [![MIT License][license-badge]][license]

## Installation

- Using NPM

```
npm install jgs-js-utils
```

- Using YARN

```
yarn add jgs-js-utils
```

## How to use
just import the desired function

```
import { formatPhoneNumber } from "jgs-js-utils";

var phone = 11987654321
console.log(formatPhoneNumber(phone)); // print: (11) 9 8765-4321
```


## Functions
---

chamada|objetivo|exemplo
---|---|---
`formatPhoneNumber()`|formatar numeros de telefone diversos, com ou sem DDD e com ou sem o nono digito| `formatPhoneNumber(11988776655);` retorna: (11) 9 8877-6655