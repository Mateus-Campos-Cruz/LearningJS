/**
 * 07) ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, 
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três 
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, 
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo 
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: 
“Delta é negativo”.
 */

function formularBhaskara(a, b, c){
    let delta = Math.pow(b,2) - ((4 * a) * c)
    let x1 = 0
    let x2 = 0
    let resultados = []
if(delta < 0){
    return console.log("Delta negativo")
}else if(delta == 0){
   x1 =  -(b) / 2 *(a)
   return console.log(`X¹ = ${x1}`)
}else{
    x1 = - ((b) - Math.sqrt(delta)) / (2 * a)
    x2 = - ((b) + Math.sqrt(delta)) / (2 * a)
    resultados.push(x1)
    resultados.push(x2)

    return console.log(`X¹ e X² = ${resultados}`)
}

    

}

formularBhaskara(1, -5, 6)