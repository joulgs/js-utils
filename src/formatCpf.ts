export default function formatCpf(CPF: string | number) : string {
    const _cpf = String(CPF).trim();

    if(_cpf.length === 0)
        return '';

    if(_cpf.length != 11)
        return _cpf;
    
    return _cpf.substring(0, 3) + '.' + _cpf.substring(3, 6) + '.' + _cpf.substring(6, 9) + '-' + _cpf.substring(9, 11);
}
