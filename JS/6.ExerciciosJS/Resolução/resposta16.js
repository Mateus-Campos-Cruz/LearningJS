/**A fim de manter o calendario anual ajustado com o movimento de translação da terra,
 *  criou se os anos bissextos, que tem 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se eele é multiplo de 4. 
Não pode ser multiplo de 100, exceto se for também multiplo de 400.

Com isso em mente desenvolva uma função que recebe um numero correspondente 
a um ano e retorna se ele é bissexto ou não. */

function anoBissexto(ano) {

    let resultado = ''

    if(ano % 100 == 0){
        if(ano % 400 == 0){
            resultado = 'Ano bissexto'
        }else {
            resultado = 'Não é bissexto'
        }
        
    }else if(ano % 4 == 0){
        resultado = 'Ano bissexto'
    }else {
    resultado = 'Não é bissexto'    
    }

    return resultado
}

console.log(anoBissexto(2024))