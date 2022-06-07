"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatOnlyNumbers_1 = __importDefault(require("./formatOnlyNumbers"));
function validateCpf(cpf) {
    if (cpf === null || cpf === undefined) {
        console.warn('validateCpf received a null or undefined value');
        return false;
    }
    const _strCpf = (0, formatOnlyNumbers_1.default)(String(cpf));
    if (_strCpf.length != 11 || _strCpf == "00000000000")
        return false;
    var sum = 0, rest, i;
    for (i = 1; i <= 9; i++)
        sum = sum + parseInt(_strCpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    if ((rest == 10) || (rest == 11))
        rest = 0;
    if (rest != parseInt(_strCpf.substring(9, 10)))
        return false;
    sum = 0;
    for (i = 1; i <= 10; i++)
        sum = sum + parseInt(_strCpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    if ((rest == 10) || (rest == 11))
        rest = 0;
    if (rest != parseInt(_strCpf.substring(10, 11)))
        return false;
    return true;
}
exports.default = validateCpf;
