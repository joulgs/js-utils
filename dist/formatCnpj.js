"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatOnlyNumbers_1 = __importDefault(require("./formatOnlyNumbers"));
function formatCnpj(number) {
    if (number === null || number === undefined) {
        console.warn('formatCNPJ received a null or undefined value');
        return '';
    }
    var _number = (0, formatOnlyNumbers_1.default)(String(number));
    if (_number.length !== 14)
        return _number;
    return `${_number.slice(0, 2)}.${_number.slice(2, 5)}.${_number.slice(5, 8)}/${_number.slice(8, 12)}-${_number.slice(12, 14)}`;
}
exports.default = formatCnpj;
