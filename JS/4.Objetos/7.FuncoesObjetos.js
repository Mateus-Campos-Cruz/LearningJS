const pessoa = {
    nome: 'Mateus',
    idade: 33,
    peso: 80
}

console.log(Object.keys(pessoa)) //Função mostra todas as chaves do objeto
console.log(Object.values(pessoa)) // Função mostra todos os valores do objeto
console.log(Object.entries(pessoa)) // Função mostra um array e sub arrays do objeto, coleção chave-valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor} `)
})

Object.defineProperties(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}) // Define uma propriedade, pode ou não ser alterada, pode ou não ser visivel

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const destino = { a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4} // mesmo atributo
const obj = Object.assign(destino, o1, o2) // Concatena os objetos ao objeto de destino, se for o mesmo valor, no caso do atributo "a", o valor é sobrescrito

