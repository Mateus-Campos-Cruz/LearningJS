//1º Forma de Gerar valor padrão

function funcao1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

function funcao2(a, b = 1){

}