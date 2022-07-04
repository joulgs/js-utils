import formatCnpj from "./formatCnpj";
import formatCpf from "./formatCpf";
import formatOnlyNumbers from "./formatOnlyNumbers"

export default function formatCnp(number: number | string ) : string | undefined {
    if(number === null || number === undefined) { console.warn('formatCnp received a null or undefined value'); return ''; }
    
    var _number = formatOnlyNumbers(String(number));

    if(_number.length !== 14 && _number.length !== 11)
        return _number;

    if (_number.length === 11)
        return formatCpf(_number);

    if (_number.length === 14)
        return formatCnpj(_number);
}
