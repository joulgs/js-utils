import { formatPhoneNumber } from "./index";
import { validateEmail } from "./index";

console.log('1 RESULT:  ' + formatPhoneNumber(11987654321))     // (11) 9 8765-4321
console.log('2 RESULT:  ' + formatPhoneNumber(1187654321))      // (11) 8765-4321
console.log('3 RESULT:  ' + formatPhoneNumber(987654321))       // 9 8765-4321
console.log('4 RESULT:  ' + formatPhoneNumber(87654321))        // 8765-4321

console.log('5 RESULT:  ' + formatPhoneNumber('11987654321'))   // (11) 9 8765-4321
console.log('6 RESULT:  ' + formatPhoneNumber('1187654321'))    // (11) 8765-4321
console.log('7 RESULT:  ' + formatPhoneNumber('987654321'))     // 9 8765-4321
console.log('8 RESULT:  ' + formatPhoneNumber('87654321'))      // 8765-4321

console.log('9 RESULT: ' + validateEmail(''))                   // false
console.log('10 RESULT: ' + validateEmail('teste'))             // false
console.log('11 RESULT: ' + validateEmail('teste@'))            // false
console.log('12 RESULT: ' + validateEmail('teste@teste'))       // false
console.log('13 RESULT: ' + validateEmail('teste@teste.com'))   // true
