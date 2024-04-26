/**39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o 
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. 
Faça a troca sem utilizar uma variável auxiliar. * 
 */

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = [6, 7, 8, 9, 10]




    function trocaVetor(vetor1, vetor2) {

        for (let i = 0; i < vetor1.length; i++) {
            vetor1[i] = vetor1[i] + vetor2[i];
            vetor2[i] = vetor1[i] - vetor2[i];
            vetor1[i] = vetor1[i] - vetor2[i];
        }
        console.log(`Vetor 1: ${vetor1}`);
        console.log(`Vetor 2: ${vetor2}`);
    

}

trocaVetor(vetor1, vetor2)