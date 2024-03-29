import { formatOnlyNumbers } from '../src/index';

describe('retira letras de strings numeros', () => {
    test('com prefixo', () => {
        expect(formatOnlyNumbers('tel: 11987654321')).toMatch('11987654321');
    });

    test('com sufixo', () => {
        expect(formatOnlyNumbers('11987654321 zap')).toMatch('11987654321');
    });

    test('com espaços', () => {
        expect(formatOnlyNumbers(' 11 9876 54321')).toMatch('11987654321');
    });

    test('com tabs', () => {
        expect(formatOnlyNumbers('    11 9876 54321')).toMatch('11987654321');
    });

    test('com formatação', () => {
        expect(formatOnlyNumbers('(11) 9 8765-4321')).toMatch('11987654321');
    });
});
