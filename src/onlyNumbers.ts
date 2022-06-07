export default function onlyNumbers(string: string ) : string {
    const _string = String(string).trim();

    let _newstring = _string.replace(/[^0-9]/g,'');

    return _newstring;
}
