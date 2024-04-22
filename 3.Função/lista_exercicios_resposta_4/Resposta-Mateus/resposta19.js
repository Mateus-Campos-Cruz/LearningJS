/**19) ​O cardápio de uma lanchonete é o seguinte: 
Código  Descrição do Produto  Preço 
100  Cachorro Quente  R$ 3,00 
200  Hambúrguer Simples  R$ 4,00 
300  Cheeseburguer  R$ 5,50 
400  Bauru  R$ 7,50 
500  Refrigerante  R$ 3,50 
600  Suco  R$ 2,80 
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente. */

function pedido(codigo, quantidade){

    let total = 0

    switch(codigo){
        case 100:
           total = quantidade * 3
            console.log(`Cachorro Quente - Valor a ser pago: R$ ${total.toFixed(2)}`)
            break
            case 200:
                total = quantidade * 4
                 console.log(`Hambúrguer Simples - Valor a ser pago: R$ ${total.toFixed(2)}`)
                 break
                 case 300:
                    total = quantidade * 5.50
                     console.log(`Cheeseburguer - Valor a ser pago: R$ ${total.toFixed(2)}`)
                     break
                     case 400:
                        total = quantidade * 7.50
                         console.log(`Bauru - Valor a ser pago: R$ ${total.toFixed(2)}`)
                         break
                         case 500:
                            total = quantidade * 3.50
                             console.log(`Refrigerante - Valor a ser pago: R$ ${total.toFixed(2)}`)
                             break
                             case 600:
                                total = quantidade * 2.80
                                 console.log(`Suco - Valor a ser pago: R$ ${total.toFixed(2)}`)
                                 break
                                    default:
                                        console.log('Produto não existe')
                                        break
    }
}

pedido(8700,3)