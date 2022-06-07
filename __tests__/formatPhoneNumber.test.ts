import { formatPhoneNumber } from '../src/index';

describe('formatação de numero de telefone com inteiros', () => {
    test('quando recebe 11 numeros', () => {
        expect(formatPhoneNumber(11987654321)).toMatch('(11) 9 8765-4321');
    });

    test('quando recebe 10 numeros', () => {
        expect(formatPhoneNumber(1187654321)).toMatch('(11) 8765-4321');
    });

    test('quando recebe 9 numeros', () => {
        expect(formatPhoneNumber(987654321)).toMatch('9 8765-4321');
    });

    test('quando recebe 8 numeros', () => {
        expect(formatPhoneNumber(87654321)).toMatch('8765-4321');
    });
});

describe('formatação de numero de telefone com strings', () => {
    test('quando recebe 11 numeros', () => {
        expect(formatPhoneNumber('11987654321')).toMatch('(11) 9 8765-4321');
    });

    test('quando recebe 10 numeros', () => {
        expect(formatPhoneNumber('1187654321')).toMatch('(11) 8765-4321');
    });

    test('quando recebe 9 numeros', () => {
        expect(formatPhoneNumber('987654321')).toMatch('9 8765-4321');
    });

    test('quando recebe 8 numeros', () => {
        expect(formatPhoneNumber('87654321')).toMatch('8765-4321');
    });
});

describe('formatação de numero de telefone com strings com espaço', () => {
    test('quando recebe 8 numeros + 5 spaces', () => {
        expect(formatPhoneNumber(' 8765  43 21 ')).toMatch('8765-4321');
    });

    test('quando recebe 8 numeros + tab', () => {
        expect(formatPhoneNumber('  8765  43 21     ')).toMatch('8765-4321');
    });

    test('quando recebe 11 numeros formatados', () => {
        expect(formatPhoneNumber('(11) 9 8765-4321')).toMatch('(11) 9 8765-4321');
    });
});
