import { analyzeCode } from './game.js';

test('Deve detectar DANGER quando houver SQL Injection', () => {
    expect(analyzeCode("DROP TABLE users")).toBe("DANGER");
});

test('Deve retornar SAFE para códigos comuns', () => {
    expect(analyzeCode("console.log('Hello World')")).toBe("SAFE");
});