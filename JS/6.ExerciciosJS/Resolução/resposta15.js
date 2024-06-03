/**Elabore uma função que receba um array de números e retorne um array que 
 * tenha todos os números que são pares e que também tenham indices pares */

const numeros = [1,2,3,4,5,6,8]

function retornePares(numeros){

    const retorno = numeros.filter((elementos,index) => elementos % 2 == 0 && index % 2 == 0)

    return retorno
}

console.log(retornePares(numeros))