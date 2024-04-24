/**17)​ Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A  10% 
B  15% 
C  20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function planoSalario(plano, salario){

    let novoSalario = 0

    switch(plano){
        case 'A':
            novoSalario = salario + (salario * 0.1)
            return novoSalario
            break
            case 'B':
                novoSalario = salario + (salario * 0.15)
                return novoSalario
                break
                case 'C':
                    novoSalario = salario + (salario * 0.2)
                    return novoSalario
                    break
                    default:
                        return 'Plano Inválido'
                        break
    }
}

console.log(planoSalario('D',1000))