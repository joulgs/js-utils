"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatOnlyNumbers_1 = __importDefault(require("./formatOnlyNumbers"));
function formatZipCode(ZipCode) {
    if (ZipCode === null || ZipCode === undefined) {
        console.warn('formatZipCode received a null or undefined value');
        return '';
    }
    const _zipcode = (0, formatOnlyNumbers_1.default)(String(ZipCode));
    if (_zipcode.length === 0)
        return '';
    if (_zipcode.length != 8)
        return _zipcode;
    return _zipcode.substring(0, 5) + '-' + _zipcode.substring(5, 8);
}
exports.default = formatZipCode;
