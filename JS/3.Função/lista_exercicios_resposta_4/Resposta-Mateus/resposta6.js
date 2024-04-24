/** 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos. 
Formula Juros Simples - J = C . i . t 
Formula Juros Compostos - M = C . (1 + i) n 

*/

function jurosSimples(capital, taxa, tempo){
    let juros = capital + (capital * taxa) * tempo
    return console.log(`R$ ${juros}`)
}

function jurosComposto(capital, taxa, tempo){
    let montante = capital * ((1 + taxa) ** tempo)
    return console.log(`R$ ${montante}`)
}

jurosSimples(100, 10/100, 2)
jurosComposto(100, 0.1, 2)