/**37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos , 
bem como a soma dos elementos */

function progressaoAritmetica(n, a1, r){

    let termos = []
    let soma = 0

    termos[0] = a1

    for(i = 1; i < n; i++){

        termos[i] = termos[i - 1] + r
        soma += termos[i - 1]

     }

     console.log(`Soma dos termos da PA: ${soma}`)

    return termos
}

function progressaoGeometrica(n, a1, r){

    let termos = []
    let soma = 0

    termos[0] = a1

    for(i = 1; i < n; i++){

        termos[i] = termos[i - 1] * r
        soma += termos[i - 1]
     }

     console.log(`Soma dos termos da PG: ${soma}`)

    return termos
}

console.log("Progressão Aritmética: " + progressaoAritmetica(16, 3, 4))

console.log("Progressão Geométrica: " + progressaoGeometrica(16, 3, 4))