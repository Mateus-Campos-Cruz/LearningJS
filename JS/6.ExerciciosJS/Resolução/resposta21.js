/**Criar uma função que receba um array de números e retorne o menor número desse array */

let nums = [4, 5, 7, 1]

function retornaMenor(nums) {

    let menor = 0

    nums.forEach(function(valor, index){
        if(index == 0){
            menor = valor
        }else if(valor < menor){
            menor = valor
        }
    }) 

    return menor
}

console.log(retornaMenor(nums))