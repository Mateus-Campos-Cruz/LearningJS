/**
 * 08) ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém 
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o 
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior 
jogo. (Número do pior jogo). 
Obs.: O primeiro jogo não conta como novo recorde do melhor.  
Exemplo:  
String: “10 20 20 8 25 3 0 30 1” 
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação 
aconteceu no sétimo jogo.)
 */

function jogos(listaJogos){

        let pontuacoes = listaJogos.split(' ').map(Number)
        

        let piorJogo = pontuacoes[0]
        let indicePior = 1
        let melhorJogo = pontuacoes[0]
        let contadorRecordes = 0

        for (let i = 1; i < pontuacoes.length; i++) {
            if(pontuacoes[i] < piorJogo){
                piorJogo = pontuacoes[i];
                indicePior = i + 1;
            }
    
            if(pontuacoes[i] > melhorJogo){
                contadorRecordes++;
                melhorJogo = pontuacoes[i]; // Atualizando o melhor jogo
            }
        }

    return console.log(contadorRecordes, indicePior)
}

jogos('10 20 20 8 25 3 0 30 1')