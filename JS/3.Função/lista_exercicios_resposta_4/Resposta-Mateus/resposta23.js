/**23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.  */

function resultado(codigo, nota1, nota2, nota3){

    let media = (nota1 + nota2 + nota3) / 3

    while(codigo > 0){

        if(media >= 5){
            console.log(`Codigo: ${codigo} - Nota 1: ${nota1} - Nota 2: ${nota2} - Nota 3: ${nota3} - Média: ${media} - APROVADO`)
        }else{
            console.log(`Codigo: ${codigo} - Nota 1: ${nota1} - Nota 2: ${nota2} - Nota 3: ${nota3} - Média: ${media} - REPROVADO`)
        }
    }
}

resultado(123, 2.8, 6, 3.5)

