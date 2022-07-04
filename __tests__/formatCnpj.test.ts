import { formatCnpj } from '../src/index';

describe('formatCNPJ deve formata', () => {
    test('quando é uma string', () => {
        expect(formatCnpj('27579093000107')).toMatch('27.579.093/0001-07');
    });

    test('quando é um numero', () => {
        expect(formatCnpj(27579093000107)).toMatch('27.579.093/0001-07');
    });

    test('quando é uma string mal formatada', () => {
        expect(formatCnpj('27-579-093-0001/07')).toMatch('27.579.093/0001-07');
    });
});

describe('formatCNPJ não deve formata', () => {
    test('quando é uma string que não é tem 14 digitos', () => {
        expect(formatCnpj('2757909300007')).toMatch('2757909300007');
    });

    test('quando é um numero que não é tem 14 digitos', () => {
        expect(formatCnpj(2757909300007)).toMatch('2757909300007');
    });
});
