const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
//Constante recebe uma função Arrow que pega o valor da nota de cada aluno do array
const getNota = aluno => aluno.nota
// Constante recebe uma função com 2 params total(acumulador) e atual(nota do indice atual) e a ação da função é a soma do total + atual
const soma = (total, atual) => total + atual
//Constante recebe a soma das notas 
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)