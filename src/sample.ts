import formatZipCode from "./formatZipCode";
import {
    formatPhoneNumber,
    validateEmail,
    onlyNumbers 
} from "./index";

// console.log('Expected: (11) 9 8765-4321 | RESULT: ' + formatPhoneNumber(11987654321))     // (11) 9 8765-4321
// console.log('Expected: (11) 8765-4321   | RESULT: ' + formatPhoneNumber(1187654321))     // (11) 8765-4321
// console.log('Expected: 9 8765-4321      | RESULT: ' + formatPhoneNumber(987654321))     // 9 8765-4321
// console.log('Expected: 8765-4321        | RESULT: ' + formatPhoneNumber(87654321))     // 8765-4321

// console.log('Expected: (11) 9 8765-4321 | RESULT: ' + formatPhoneNumber('11987654321'))     // (11) 9 8765-4321
// console.log('Expected: (11) 8765-4321   | RESULT: ' + formatPhoneNumber('1187654321'))     // (11) (11) 8765-4321
// console.log('Expected: 9 8765-4321      | RESULT: ' + formatPhoneNumber('987654321'))     // (11) 9 8765-4321
// console.log('Expected: 8765-4321        | RESULT: ' + formatPhoneNumber('87654321'))     // (11) 9 8765-4321

// console.log('Expected: false            | RESULT: ' + validateEmail(''))     // false
// console.log('Expected: false            | RESULT: ' + validateEmail('teste'))     // false
// console.log('Expected: false            | RESULT: ' + validateEmail('teste@'))     // false
// console.log('Expected: false            | RESULT: ' + validateEmail('teste@teste'))     // false
// console.log('Expected: false            | RESULT: ' + validateEmail('teste@teste.'))     // false
// console.log('Expected: true             | RESULT: ' + validateEmail('teste@teste.com'))

// console.log('Expected: 12345-678        | RESULT: ' + formatZipCode(12345678))
// console.log('Expected: 12345-678        | RESULT: ' + formatZipCode('12345678'))
// console.log('Expected: 1234567          | RESULT: ' + formatZipCode(1234567))

console.log('Expected: 11987654321          | RESULT: ' + onlyNumbers('tel: 11987654321'))
