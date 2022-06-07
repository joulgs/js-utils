"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatOnlyNumbers(string) {
    if (string === null || string === undefined) {
        console.warn('onlyNumbers received a null or undefined value');
        return '';
    }
    const _string = String(string).trim();
    let _newstring = _string.replace(/[^0-9]/g, '');
    return _newstring;
}
exports.default = formatOnlyNumbers;
