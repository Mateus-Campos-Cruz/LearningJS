/** Elabore uma função que recebe um objeto com estudantes e suas notas. 
 * As notas de cada estudante estarão num array, conforme exemplo abaixo.
 *  Você deverá calcular a média da nota de cada aluno e retornar um objeto 
 * com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.*/

const turma = {
    joao: [4, 5, 6, 7],
    maria: [7, 5, 8, 3],
    daniel: [2, 8, 9, 4],
    fabiana: [4, 8, 9, 9]
}

function retornaMedia(turma) {
    let melhorAluno = null;
    let melhorMedia = -Infinity; // Inicializa com o menor valor possível

    for (const aluno in turma) {
        const notas = turma[aluno];
        const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

        if (media > melhorMedia) {
            melhorMedia = media;
            melhorAluno = aluno;
        }
    }

    return { nome: melhorAluno, media: melhorMedia };
}

console.log(retornaMedia(turma)); // Saída: { nome: 'fabiana', media: 7.5 }