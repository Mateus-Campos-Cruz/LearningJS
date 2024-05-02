/**Desenvolva uma função que recebe dois params, um é a quantidade de horas trabalhadas por 
 * um funcionario num mes, e o quanto ele recebe por hora. O retorno da função deve ser a 
 * string "Salário igual a R$ X",
 *  em que o X é o quanto o funcionario ganhou no mês */

function calcularSalario(horasTrabalhadas, valorPorHora) {
    return `Salário igual a R$ ${horasTrabalhadas * valorPorHora}`
}

console.log(calcularSalario(60, 40))