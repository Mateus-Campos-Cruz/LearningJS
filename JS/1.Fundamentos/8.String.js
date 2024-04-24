//Strings podem ser delimitadas com "", ' ' ou ` `
//Backtick é o sinal da crase, ``, que é possível colocar strings e variaveis ${ } dentro

const escola = "Cod3r"

console.log(escola.charAt(4)) //Retorna o valor no indice indicado
console.log(escola.charAt(5))//Retorna o valor no indice indicado, neste caso o vazio
console.log(escola.charCodeAt(3)) // Retornar o code do caracter da tabela ASC
console.log(escola.indexOf('3')) //Retorna o indice do caracter indicado

console.log(escola.substring(1)) //Retorna a string a partir do indice inicial indicado
console.log(escola.substring(0,3)) //Retorna a string a partir do indice inicial até o indice final indicado

console.log('Escola'.concat(escola).concat("!")) //Concatena literal com const ou variavel
console.log(escola.replace(3 , 'e')) //Substitue o caracter indicado por outro caracter indicado
console.log(escola.replace(/\d/, 'e')) //Expressão regular - substitui todos os DIGITOS pela letra e
console.log(escola.replace(/\w/, 'e'))//Expressão regular - substitue a primeira letra pela letra e
console.log(escola.replace(/\w/g, 'e'))//Expressão regular - o g é uma flag global -  substitui todos as LETRAS pela letra e

const nome = 'Bruna'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}`
console.log(concatenacao, template)

//Expressões
console.log(`1 + 1 = ${1 +1}`)

//Função Arrow
const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}`)