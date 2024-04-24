//1º Forma de Gerar valor padrão

function funcao1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(funcao1(), funcao1(3), funcao1(1,2,3),funcao1(0))

//2º, 3º, 4º Formas de Gerar valor padrão

function funcao2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(funcao2(), funcao2(3), funcao2(1,2,3), funcao2(0, 0, 0))

//Valor Padrão do ECS2015
function funcao3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(funcao3(), funcao3(3), funcao3(1,2,3), funcao3(0, 0, 0))

