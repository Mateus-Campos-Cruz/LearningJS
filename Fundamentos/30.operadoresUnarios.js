let num1 = 1
let num2 = 2

num1++ //Pós fixado
console.log(num1)
--num1 //Pré fixado // Tem precedência maior
console.log(num2)

console.log(++num1 === num2--) // As duas variaveis valem 2 no momento da comparação - pois o pré fixado encrementa antes da comparação e o pós fixado incrementa depois da comparação
console.log(num1 === num2)