"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatZipCode(ZipCode) {
    const _zipcode = String(ZipCode).trim();
    if (_zipcode.length === 0)
        return '';
    if (_zipcode.length != 8)
        return _zipcode;
    return _zipcode.substring(0, 5) + '-' + _zipcode.substring(5, 8);
}
exports.default = formatZipCode;
