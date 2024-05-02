/**Escreva uma função que receba um valor booleano ou numero. 
 * Se o param fornecido por booleano, o retorno da função deverá ser o inverso. 
 * Por exemplo, se a entrada for false, retornara true. Se o parametro for numerico, 
 * o retorno sera o numero inverso. Por exemplo, se for fornecido, o retorno sera -1. 
 * Se o parametro de entrada nao for de nenhum dos tipos acima, 
 * retorne "boolean ou numero esperados, mas o parametro é do tipo ... */

function retorno(valor) {
    
        if(valor == true){
            return false
        }else if(valor == false){
            return true
        }else if(valor > 0){
            return valor - (valor * 2)
        }else if(valor < 0){
            return valor + (valor * 2)
        }else if(valor == 0){
            return "Valor igual a 0, não tem retorno inverso!"
        }else{
        return `boolean ou numero esperados, mas o parametro é do tipo ${typeof valor}`
    }
}

console.log(retorno("true"))