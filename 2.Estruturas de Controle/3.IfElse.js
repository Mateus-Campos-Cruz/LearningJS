const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(7)
imprimirResultado(4)
imprimirResultado('Epa')//Cuidado

