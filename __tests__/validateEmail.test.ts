import { validateEmail } from '../src/index';

describe('validateEmail deve retornar false', () => {
    test('quando é uma string vazio', () => {
        expect(validateEmail('')).toBeFalsy;
    });

    test('quando é uma string normal', () => {
        expect(validateEmail('uma string qualquer')).toBeFalsy;
    });

    test('quando é uma uma palavra', () => {
        expect(validateEmail('teste')).toBeFalsy;
    });

    test('quando é apenas um arroba', () => {
        expect(validateEmail('@')).toBeFalsy;
    });

    test('quando é apenas a primeira parte', () => {
        expect(validateEmail('teste1234@')).toBeFalsy;
    });

    test('quando é apenas a segunda parte', () => {
        expect(validateEmail('@teste.com')).toBeFalsy;
    });

    test('quando o dominio está incompleto', () => {
        expect(validateEmail('teste@teste')).toBeFalsy;
    });

    test('quando o dominio está quebrado', () => {
        expect(validateEmail('teste@teste.')).toBeFalsy;
    });

    test('quando é somente uma mascara', () => {
        expect(validateEmail('@.')).toBeFalsy;
    });

    // test('quando é null', () => {
    //     expect(validateEmail(null)).toBeFalsy;
    // });

    // test('quando é undefined', () => {
    //     expect(validateEmail(undefined)).toBeFalsy;
    // });
});

describe('validateEmail deve retornar true', () => {
    test('quando é um email comun', () => {
        expect(validateEmail('teste@teste.com')).toBeTruthy;
    });
});
