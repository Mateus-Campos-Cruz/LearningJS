/**20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1 */

function saque(valor){

    let notas = {
        notasCem: 0,
        notasCinq: 0,
        notasDez: 0,
        notasCinc: 0,
        notasUm: 0
    }

    while(valor > 0){

        if(valor >= 100){
            notas.notasCem++
            valor -= 100
        }else if(valor >= 50){
            notas.notasCinq++
            valor -= 50
        }else if(valor >= 10){
            notas.notasDez++
            valor -= 10
        }else if(valor >= 5){
            notas.notasCinc++
            valor -= 5
        }else if(valor >= 1){
            notas.notasUm++
            valor -= 1
        }

    }

    for (atributo in notas){
        if(notas[atributo] != 0){
            switch(atributo){
                case 'notasCem':
                    console.log(`Notas de 100: ${notas[atributo]}`)
                    break
                    case 'notasCinq':
                        console.log(`Notas de 50: ${notas[atributo]}`)
                        break
                        case 'notasDez':
                            console.log(`Notas de 10: ${notas[atributo]}`)
                            break
                            case 'notasCinc':
                                console.log(`Notas de 5: ${notas[atributo]}`)
                                break
                                case 'notasUm':
                                    console.log(`Notas de 1: ${notas[atributo]}`)
                                    break
            }
        }
    }
}

saque(999)