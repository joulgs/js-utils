import validateCnpj from "./validateCnpj";
import {
    validateEmail,
    formatOnlyNumbers,
    formatPhoneNumber,
    formatZipCode,
    validateCpf,
    formatCnpj,
    formatCpf,
    formatCnp
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

// console.log(formatOnlyNumbers('cpf: 476.848.724-60'));       // 1234567890
// console.log(formatOnlyNumbers('     476848724-60 '));   // 1234567890
// console.log(formatOnlyNumbers('476848724-60 pos'));   // 1234567890

// console.log( validateCpf('476.848.724-60'))
// console.log( validateCpf('225668949-22'))
// console.log( validateCpf(84832198327))
// console.log( validateCpf('476.848.724-69'))
// console.log( validateCpf('225668949-21'))
// console.log( validateCpf(84832198326))

// console.log(validateCnpj('77272951000144'))
// console.log(validateCnpj('77.272.951/0001-44'))
// console.log(validateCnpj(77272951000144))
// console.log(validateCnpj('77.272.951/0001-43'))
// console.log(validateCnpj(77272951000143))
// console.log(validateCnpj(177272951000144))
// console.log(validateCnpj(''))
// console.log(validateCnpj(null))

// console.log(formatCnpj(27579093000107))
// console.log(formatCnpj('27579093000107'))

// console.log(formatCpf(84832198327))
// console.log(formatCpf('84832198327'))
// console.log(formatCpf(8483219832))
// console.log(formatCpf('8483219832'))

console.log(formatCnp(27579093000107))
console.log(formatCnp('27579093000107'))
console.log(formatCnp('2757909300010'))
console.log(formatCnp(84832198327))
console.log(formatCnp('84832198327'))
console.log(formatCnp(8483219832))
console.log(formatCnp('8483219832'))

