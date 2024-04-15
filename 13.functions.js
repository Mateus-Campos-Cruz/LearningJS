console.log(typeof Object) //Object em JS é function

class Produto {}
console.log(typeof Produto) //Class em JS é uma function

//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
    
}

imprimirSoma(2,3)
//imprimirSoma(2)  - NaN
//imprimirSoma()  - NaN
imprimirSoma(2,10,5,6,2,3) // Ignora os outros parametros

//Funcao com retorno
function soma(a, b = 0){ //b com valor padrão caso não seja passado
    return a + b
}

console.log(soma(5,5))

//Armazenando uma funcao em um variavel

const printerSum = function(a ,b){ //funcao anonima
    console.log(a + b)
}

printerSum(8 , 8)

//Armazenando uma funcao Arrow em uma variavel
const arrowSoma = (a, b) => {
    return a + b
}

console.log(arrowSoma(6, 6))

//Retorno implicito - Arrow function
const subtracao = (a, b) => a - b

console.log(subtracao(3, 3))