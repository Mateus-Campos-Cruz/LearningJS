//Number é inteiro e decimal

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Verifica se é um valor inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed() define a quantidade de casas decimais
console.log(media.toString()) // Converte em string
console.log(media.toString(2)) // Converte em string com parametro 2
console.log(typeof media)
console.log(typeof Number)

console.log(7/0) //Tipo Infinity
console.log("10" / 2)// Faz operação com String
//console.log("Show!" * 2)// Não funciona
console.log(0.1 + 0.7) //Imprecisão
//console.log(10.toString()) Não funciona
console.log(10.685.toFixed(2))