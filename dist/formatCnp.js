"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatCnpj_1 = __importDefault(require("./formatCnpj"));
const formatCpf_1 = __importDefault(require("./formatCpf"));
const formatOnlyNumbers_1 = __importDefault(require("./formatOnlyNumbers"));
function formatCnp(number) {
    if (number === null || number === undefined) {
        console.warn('formatCnp received a null or undefined value');
        return '';
    }
    var _number = (0, formatOnlyNumbers_1.default)(String(number));
    if (_number.length !== 14 && _number.length !== 11)
        return _number;
    if (_number.length === 11)
        return (0, formatCpf_1.default)(_number);
    if (_number.length === 14)
        return (0, formatCnpj_1.default)(_number);
}
exports.default = formatCnp;
