const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj)) 
/**JSON é um formato textual, que transmite somente dados, funções, operações etc, nada executável é transferido. */

//console.log(JSON.parse("{a: 1, b: 2, c: 4}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))

//https://json5.org/
//Site tentativa de atualizar o JSON e para testar formato JSON