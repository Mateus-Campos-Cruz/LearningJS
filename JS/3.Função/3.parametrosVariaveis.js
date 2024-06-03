function soma(){ // Mesmo não recebendo parametro você pode passar um parametro
    let soma = 0
    for(i in arguments){
        soma += arguments[i] // arguments é um array interno de uma função
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,1.6,1.4))
console.log(soma(1.1,1.6,"Teste"))
console.log(soma("a","b","Teste"))
