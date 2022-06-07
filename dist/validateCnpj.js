"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatOnlyNumbers_1 = __importDefault(require("./formatOnlyNumbers"));
function validateCnpj(cnpj) {
    if (cnpj === null || cnpj === undefined) {
        console.warn('validateCpf received a null or undefined value');
        return false;
    }
    cnpj = (0, formatOnlyNumbers_1.default)(String(cnpj));
    if (cnpj == '' ||
        cnpj.length != 14 ||
        cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;
    var size = cnpj.length - 2;
    var numbers = cnpj.substring(0, size);
    var digits = cnpj.substring(size);
    var sum = 0;
    var pos = size - 7;
    for (var i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(0))
        return false;
    size = size + 1;
    numbers = cnpj.substring(0, size);
    sum = 0;
    pos = size - 7;
    for (i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(1))
        return false;
    return true;
}
exports.default = validateCnpj;
