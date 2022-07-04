import { formatCpf } from '../src/index';

describe('formatCpf deve formata', () => {
    test('quando é uma string', () => {
        expect(formatCpf('12345678901')).toMatch('123.456.789-01');
    });

    test('quando é um numero', () => {
        expect(formatCpf(12345678901)).toMatch('123.456.789-01');
    });

    test('quando é uma string mal formatada', () => {
        expect(formatCpf('123,456,789-01')).toMatch('123.456.789-01');
    });
});

describe('formatCpf não deve formata', () => {
    test('quando é uma string que não é tem 11 digitos', () => {
        expect(formatCpf('1234567890')).toMatch('1234567890');
    });

    test('quando é um numero que não é tem 11 digitos', () => {
        expect(formatCpf(1234567890)).toMatch('1234567890');
    });
});
