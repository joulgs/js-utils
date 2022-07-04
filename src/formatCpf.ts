import formatOnlyNumbers from "./formatOnlyNumbers"

export default function formatCpf(number: number | string ) : string {
    if(number === null || number === undefined) { console.warn('formatCpf received a null or undefined value'); return ''; }
    
    var _number = formatOnlyNumbers(String(number));

    if(_number.length !== 11)
        return _number;

    return `${_number.slice(0,3)}.${_number.slice(3,6)}.${_number.slice(6,9)}-${_number.slice(9,11)}`;
}
