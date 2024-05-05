/**
 * Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, 
 * estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja, a sua 
 * referência de memória é a mesmo.

Num projeto que você esta trabalhando, você foi designado a refatorar diversas 
funções para que façam cópias de objetos e manipulem os dados dessas cópias, 
com intuito de evitar efeitos indesejáveis em algumas situações devido a referências 
a objetos. Abaixo, está a descrição de umas dessas funções.

Você escreverá uma função que recebe um objeto como primeiro param, e, como segundo param, 
o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem 
a propriedade especificada no segundo param.
 */

function removerPropriedade(objeto, propriedade) {
    // Criar uma cópia do objeto usando o spread operator
    const copiaObjeto = { ...objeto };
  
    // Verificar se a propriedade existe no objeto
    if (copiaObjeto.hasOwnProperty(propriedade)) {
      // Remover a propriedade da cópia do objeto
      delete copiaObjeto[propriedade];
    }
  
    // Retornar a cópia do objeto sem a propriedade especificada
    return copiaObjeto;
  }

  console.log(removerPropriedade({a: 1, b: 3}, 'a'))