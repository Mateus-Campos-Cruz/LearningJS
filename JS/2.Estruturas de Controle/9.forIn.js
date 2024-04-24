/**for...in:
O for...in é usado para iterar sobre as propriedades enumeráveis de um objeto. 
Ele itera sobre todas as propriedades enumeráveis próprias e herdadas de um 
objeto. Aqui está um exemplo de como funciona:
 * const obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
  console.log(key + ': ' + obj[key]);
}
 */

/**
 * O forEach é um método disponível para arrays em JavaScript e é usado para 
 * iterar sobre os elementos de um array. Ele executa uma função de retorno 
 * de chamada para cada elemento do array. Aqui está um exemplo de como funciona:
 * const array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
  console.log(element);
});

 */

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

console.log("Lendo Array")

for(let i in notas){// Recebe o indice de um array
    console.log(`Indice ${i}: ${notas[i]}`)
}

const pessoa = {
    nome: 'Bruna',
    sobrenome: 'Cruz',
    idade: 29,
    peso: 64
}
console.log("\n")
console.log("Lendo Object")

for(let atributo in pessoa){ //Importante usar a palaVra let para garantir que a variavel seja LOCAL
    console.log(`Indice ${atributo}: ${pessoa[atributo]} `)
}