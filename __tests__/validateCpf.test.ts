import { validateCpf } from '../src/index';

describe('validação de CPF deve ser valido', () => {
    test('com mascara', () => {
        expect(validateCpf('476.848.724-60')).toBeTruthy();
    });

    test('com mascara simples', () => {
        expect(validateCpf('844870606-48')).toBeTruthy();
    });

    test('sem mascara', () => {
        expect(validateCpf('98432799483')).toBeTruthy();
    });

    test('inteiro', () => {
        expect(validateCpf(98432799483)).toBeTruthy();
    });

    test('com espaços e tab', () => {
        expect(validateCpf('    984327994 83')).toBeTruthy();
    });
});

describe('validação de CPF deve ser invalido', () => {
    test('com mascara', () => {
        expect(validateCpf('476.848.724-61')).toBeFalsy();
    });

    test('com mascara simples', () => {
        expect(validateCpf('844870606-47')).toBeFalsy();
    });

    test('sem mascara', () => {
        expect(validateCpf('97432799483')).toBeFalsy();
    });

    test('inteiro', () => {
        expect(validateCpf(98432799481)).toBeFalsy();
    });

    test('com espaços e tab', () => {
        expect(validateCpf('    984427994 83')).toBeFalsy();
    });

    test('so zeros', () => {
        expect(validateCpf('00000000000')).toBeFalsy();
    });

    test('so zeros com mascara', () => {
        expect(validateCpf('000.000.000-00')).toBeFalsy();
    });

    test('numeros a mais no final', () => {
        expect(validateCpf('984327994832')).toBeFalsy();
    });

    test('numeros a mais no começo', () => {
        expect(validateCpf('098432799483')).toBeFalsy();
    });
});