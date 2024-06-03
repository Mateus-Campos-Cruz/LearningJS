/**Desenvolva uma função que recebe como parametro um objeto e retorne um array de arrays,
 *  em que cada elemento é um array formado pelos pares chave/valor 
 * que corresponde a um atributo do objeto. Observe os exemplos abaixo para um melhor entendimento */

const obj = {
    nome: "Mateus",
    profissao: "Desenvolvedor de Software"
}

    function retornaArray(obj){
        const keysArray = Object.keys(obj)
        const valuesArray = Object.values(obj)
     
        const novoArray = keysArray.map((key, index) => [key, valuesArray[index]])
        return novoArray
    }

console.log(retornaArray(obj))