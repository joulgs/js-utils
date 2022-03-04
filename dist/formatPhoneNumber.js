"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _PHONE_NUMBER_WHIT_DDD_WHITOUT_NINE = 10;
const _PHONE_NUMBER_WHIT_DDD_WHIT_NINE = 11;
const _PHONE_NUMBER_WHITOUT_DDD_WHIT_NINE = 9;
const _PHONE_NUMBER_WHITOUT_DDD_WHITOUT_NINE = 8;
function formatPhoneNumber(number) {
    console.log('\nRUNNING src/utils/FormatPhoneNumber():');
    console.log(`DATA: ${number}`);
    var _number = String(number);
    _number = _number.trim();
    if (_haveDDD(_number)) {
        if (_haveNine(_number)) {
            return `(${_number.slice(0, 2)}) ${_number.slice(2, 3)} ${_number.slice(3, 7)}-${_number.slice(7, 11)}`;
        }
        else {
            return `(${_number.slice(0, 2)}) ${_number.slice(2, 6)}-${_number.slice(6, 10)}`;
        }
    }
    else {
        if (_haveNine(_number)) {
            return `${_number.slice(0, 1)} ${_number.slice(1, 5)}-${_number.slice(5, 9)}`;
        }
        else {
            return `${_number.slice(0, 4)}-${_number.slice(4, 8)}`;
        }
    }
}
exports.default = formatPhoneNumber;
function _haveDDD(number) {
    console.log('\nRUNNING src/utils/FormatPhoneNumber()/_haveDDD:');
    console.log(`DATA: ${number}`);
    var _number = String(number);
    switch (_number.length) {
        case _PHONE_NUMBER_WHIT_DDD_WHITOUT_NINE:
        case _PHONE_NUMBER_WHIT_DDD_WHIT_NINE:
            return true;
        case _PHONE_NUMBER_WHITOUT_DDD_WHIT_NINE:
        case _PHONE_NUMBER_WHITOUT_DDD_WHITOUT_NINE:
            return false;
    }
}
function _haveNine(number) {
    console.log('\nRUNNING src/utils/FormatPhoneNumber()/_haveNine:');
    console.log(`DATA: ${number}`);
    var _number = String(number);
    switch (_number.length) {
        case _PHONE_NUMBER_WHITOUT_DDD_WHIT_NINE:
        case _PHONE_NUMBER_WHIT_DDD_WHIT_NINE:
            return true;
        case _PHONE_NUMBER_WHIT_DDD_WHITOUT_NINE:
        case _PHONE_NUMBER_WHITOUT_DDD_WHITOUT_NINE:
            return false;
    }
}
