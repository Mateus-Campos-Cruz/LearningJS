/**22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

function calcularValor(mes, capital){

    let montante = 0
    let tempo = 0

    switch (mes) {
        case 1:
           montante  = capital * ((1 + 0) ** tempo)
            return console.log(`R$ ${montante}`)
            break;
        case 2:
            
            montante  = capital * ((1 + 0.05))
            return console.log(`R$ ${montante}`)
            break;
        case 3:
            // Código para o caso 3
            break;
        case 4:
            // Código para o caso 4
            break;
        case 5:
            // Código para o caso 5
            break;
        case 6:
            // Código para o caso 6
            break;
        case 7:
            // Código para o caso 7
            break;
        case 8:
            // Código para o caso 8
            break;
        case 9:
            // Código para o caso 9
            break;
        case 10:
            // Código para o caso 10
            break;
        case 11:
            // Código para o caso 11
            break;
        case 12:
            // Código para o caso 12
            break;
        default:
            // Código para o caso padrão (opcional)
            break;
    }
    }


calcularValor(2,2000)