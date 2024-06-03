let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Somente uma vez o simbolo de ! é NEGAÇÃO e !! é o contrário da NEGAÇÃO

console.log('Os verdadeiros') //Todos os números inteiros são verdadeiros exceto o zero 0
console.log('!!3')
console.log(!!-1)
console.log(!!' ') //String sem ser vazia
console.log(!![]) //Array vazio = true
console.log(!!{}) //Object vazio = true
console.log(!!Infinity) 
console.log(!!(isAtivo = true))

console.log('Os Falsos')
console.log(!!0) 
console.log(!!'') //String vazia
console.log(!!null) //Nulo
console.log(!!NaN)
console.log(!!undefined) 
console.log(!!(isAtivo = false))
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido') // Caso false, retorna a string

/**A diferença entre null e undefined é null representa 
 * ausência de um valor de objeto e undefined 
 * significa ausência de um valor qualquer
 **/
