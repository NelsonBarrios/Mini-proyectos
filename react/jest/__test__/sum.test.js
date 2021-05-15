const sum = require('../src/sum');

describe('pruebas para sumar', ()=> {
    test('1+2 is 3',() => {
        expect(sum(1,2)).toBe(3)
    })
})