/**Desenvolva uma funcao que receba um objeto como parametro e retorne um 
 * outro objeto que corresponde ao objeto recebido como parametro, 
 * porem com as posiçoes das chaves e valores invertidas, conforme, exemplo a seguir:  */

const obj = {1: 'a', 2: 'b', 3: 'c'}

function inverteObjeto(obj){

  let entries = Object.entries(obj)

 const objInvertido = entries.reduce((acc, [key, value]) => {
    acc[value] = key
    return acc
  }, {})

  return objInvertido
}

console.log(inverteObjeto(obj))