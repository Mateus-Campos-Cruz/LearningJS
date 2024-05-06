/**Desenvolva uma função que receba como parametro um numero de 1 a 10. 
 * Internamente, na função, será gerado um numero aleatorio de 1 a 10. 
 * A funcao deverá retornar se o parametro de entrada for igual ai numero sorteado internamente. 
 * Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteador foi o X". 
 * Se não for igual, retorne "Que pena! O número sorteador foi o X". X é o numero que foi sorteado */

function funcaoSorte(numero) {

    let numRand = (Math.random(10).toFixed(1) * 10) + 1

    if(numero == numRand){
        return `Parabéns! O número sorteador foi o ${numRand}`
    }else {
        return `Que pena! O número sorteador foi o ${numRand}`
    }

    
}

console.log(funcaoSorte(9))