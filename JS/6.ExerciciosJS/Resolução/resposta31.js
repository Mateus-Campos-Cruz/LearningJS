/** Crie uma função que recebe u array de números e retorna o segundo maior número presente nesse array*/

const nums = [3, 6, 7, 9];

function retornaSegundoMaior(nums) {
    // Remove valores duplicados e ordena o array em ordem decrescente
    const numerosUnicos = [...new Set(nums)].sort((a, b) => b - a);

    // Se o array tiver pelo menos dois elementos, retorna o segundo elemento
    if (numerosUnicos.length >= 2) {
        return numerosUnicos[1];
    } else {
        return null; // Retorna null se não houver segundo maior elemento
    }
}

console.log(retornaSegundoMaior(nums)); // Saída: 7
