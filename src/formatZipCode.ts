import formatOnlyNumbers from "./formatOnlyNumbers"

export default function formatZipCode(ZipCode: string | number) : string {
    if(ZipCode === null || ZipCode === undefined) { console.warn('formatZipCode received a null or undefined value'); return ''; }
    
    const _zipcode = formatOnlyNumbers(String(ZipCode));

    if(_zipcode.length === 0)
        return '';

    if(_zipcode.length != 8)
        return _zipcode;
    
    return _zipcode.substring(0, 5) + '-' + _zipcode.substring(5, 8);
}
