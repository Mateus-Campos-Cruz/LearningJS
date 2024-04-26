/**33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInteiro = [33, 66 , 99, 77]
let vetorString = ["Mateus", "Felipe", "Campos", "Cruz"]
let vetorDouble = [3.3, 6.6, 7.7, 9.9]
let resultado = []
resultado = vetorInteiro.concat(vetorString).concat(vetorDouble)

console.log(resultado)