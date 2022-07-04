import { formatCnp } from '../src/index';

describe('formatCnp deve formata', () => {
    test('quando é uma string', () => {
        expect(formatCnp('12345678901')).toMatch('123.456.789-01');
    });

    test('quando é um numero', () => {
        expect(formatCnp(12345678901)).toMatch('123.456.789-01');
    });

    test('quando é uma string mal formatada', () => {
        expect(formatCnp('123,456,789-01')).toMatch('123.456.789-01');
    });

    test('quando é uma string', () => {
        expect(formatCnp('27579093000107')).toMatch('27.579.093/0001-07');
    });

    test('quando é um numero', () => {
        expect(formatCnp(27579093000107)).toMatch('27.579.093/0001-07');
    });

    test('quando é uma string mal formatada', () => {
        expect(formatCnp('27-579-093-0001/07')).toMatch('27.579.093/0001-07');
    });
});

describe('formatCnp não deve formata', () => {
    test('quando é uma string que não é tem 11 nem 14 digitos', () => {
        expect(formatCnp('1234567890')).toMatch('1234567890');
    });

    test('quando é um numero que não é tem 11 nem 14 digitos', () => {
        expect(formatCnp(1234567890)).toMatch('1234567890');
    });
});
