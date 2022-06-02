export default function formatZipCode(ZipCode: string | number) : string {
    const _zipcode = String(ZipCode).trim();

    if(_zipcode.length === 0)
        return '';

    if(_zipcode.length != 8)
        return _zipcode;
    
    return _zipcode.substring(0, 5) + '-' + _zipcode.substring(5, 8);
}
