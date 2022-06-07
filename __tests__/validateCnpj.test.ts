import { validateCnpj } from '../src/index';

describe('validação de CNPJ deve ser valido', () => {
    test('com mascara', () => {
        expect(validateCnpj('67.041.411/0001-04')).toBeTruthy();
    });

    test('sem mascara', () => {
        expect(validateCnpj('77272951000144')).toBeTruthy();
    });

    test('inteiro', () => {
        expect(validateCnpj(77272951000144)).toBeTruthy();
    });

    test('com espaços e tab', () => {
        expect(validateCnpj('    772729510001 44')).toBeTruthy();
    });
});

describe('validação de CPF deve ser invalido', () => {
    test('com mascara', () => {
        expect(validateCnpj('01.988.848/0001-01')).toBeFalsy();
    });

    test('sem mascara', () => {
        expect(validateCnpj('77272951000140')).toBeFalsy();
    });

    test('inteiro', () => {
        expect(validateCnpj(77272951000140)).toBeFalsy();
    });

    test('com espaços e tab', () => {
        expect(validateCnpj('    772729510001 40')).toBeFalsy();
    });

    test('so zeros', () => {
        expect(validateCnpj('00000000000000')).toBeFalsy();
    });

    test('so zeros com mascara', () => {
        expect(validateCnpj('00.000.000/0001-00')).toBeFalsy();
    });

    test('numeros a mais no final', () => {
        expect(validateCnpj('772729510001440')).toBeFalsy();
    });

    test('numeros a mais no começo', () => {
        expect(validateCnpj('177272951000144')).toBeFalsy();
    });
});