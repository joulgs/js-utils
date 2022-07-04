import formatOnlyNumbers from "./formatOnlyNumbers"

export default function formatCnpj(number: number | string ) : string {
    if(number === null || number === undefined) { console.warn('formatCNPJ received a null or undefined value'); return ''; }
    
    var _number = formatOnlyNumbers(String(number));

    if(_number.length !== 14)
        return _number;

    return `${_number.slice(0,2)}.${_number.slice(2,5)}.${_number.slice(5,8)}/${_number.slice(8,12)}-${_number.slice(12,14)}`;
}
