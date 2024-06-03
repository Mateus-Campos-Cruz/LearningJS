/**Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parametro */

const array = [9, 'Mateus', 7, 6, 'Cruz'];

function retorneNumeros(array) {
  // Filtrar o array para incluir apenas elementos que são números
  const numeros = array.filter((elemento) => typeof elemento === 'number');
  return numeros;
}

console.log(retorneNumeros(array)); // Saída: [9, 7, 6]