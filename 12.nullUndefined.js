// O object faz referência a um endereço de memória
//null é utilizado para indicar a ausência de um objeto, enquanto undefined indica a ausência de um valor qualquer.
const a = {nome: "Teste"}
console.log(a)
const b = a
console.log(b)
b.nome = "Mudou o object A tb"
console.log(a)

//Tipos primitivos recebem a cópia do valor
let c = 3
let d = c
d++
console.log("Valor de C " + c)
console.log("Valor de D " +d)

let valor //Não inicializado
console.log(valor) //undefined

valor = null //Não tem nenhum valor, não tem nenhum local de memória, ausência de valor
console.log(valor) 
//console.log(valor.toString()) TypeError Cannot read property

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)
//Evite atribnuir undefined, eixe para linguagem definir para undefined
produto.preco = undefined
console.log(!produto.preco)

produto.preco = null //sem preco
console.log(produto)

