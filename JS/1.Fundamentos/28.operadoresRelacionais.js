/** A comparação de valores utilizando operadores
 * relacionais sempre retornará true ou false
 * 
 * igualdade estrita (ou "três iguais" ou "identidade") usando === (en-US), igualdade ampla ("dois iguais") usando == (en-US)
 */

console.log('01)', '1' == 1) // == Valor é igual amplamente
console.log('02)', '1' === 1) // === String = Number - Estritamente igula - Idêntico
console.log('03)', '3' != 3) // Não esta comparando o tipo mas apenas o valor - Igualdade ampla
console.log('04)', '3' !== 3) //Esta comparando o tipo - Igualdade Estrita

console.log('05)', '3' < 2)
console.log('06)', '3' > 2)
console.log('07)', '3' <= 2)
console.log('08)', '3' >= 2)

const data1 = new Date(0) // o parametro 0 significa a data de referência em JS - 01/01/1970
const data2 = new Date(0)
console.log('09)', data1 === data2) // Comparando endereço de memória
console.log('10)', data1 == data2)
console.log('11)', data1.getTime() === data2.getTime()) //Comparando o number
console.log('12)', undefined == null)
console.log('13)', undefined === null)//Mais adequado para usar