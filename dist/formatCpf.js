"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatOnlyNumbers_1 = __importDefault(require("./formatOnlyNumbers"));
function formatCpf(number) {
    if (number === null || number === undefined) {
        console.warn('formatCpf received a null or undefined value');
        return '';
    }
    var _number = (0, formatOnlyNumbers_1.default)(String(number));
    if (_number.length !== 11)
        return _number;
    return `${_number.slice(0, 3)}.${_number.slice(3, 6)}.${_number.slice(6, 9)}-${_number.slice(9, 11)}`;
}
exports.default = formatCpf;
