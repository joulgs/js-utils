import { formatZipCode } from '../src/index';

describe('formatação de cep', () => {
    test('com string', () => {
        expect(formatZipCode('12345678')).toMatch('12345-678');
    });

    test('com inteiros', () => {
        expect(formatZipCode(12345678)).toMatch('12345-678');
    });

    test('com formatação', () => {
        expect(formatZipCode('12.345-678')).toMatch('12345-678');
    });

    test('com formatação estranha', () => {
        expect(formatZipCode('12,345.678')).toMatch('12345-678');
    });

});
