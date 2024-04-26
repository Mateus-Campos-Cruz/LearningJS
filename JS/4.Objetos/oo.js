//NÃO EXECUTÁVEL

//Procedural - Baseado no procedimento, trecho de codigo que é nomeado e reutilizado.
processamento(valor1, valor2, valor3) // Geralmente tem muitas variaveis globais

//OO - Orientado a objetos - Dentro dos dados tem funções
//Herança, Encapsulamento, Polimorfismo e Abstração
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        //Comportamento
    }
}
//Mais próximo ao mundo real - Mundo é formado por objetos (Atributos e comportamentos)
objeto.processamento()

//Principios Importantes

//1. Abstração: Analisar um objeto no mundo real e descobrir os atributos, comportamentos, estados (Carro: peso = 2,0000.00, cor = preto, parado = true, ligarSom())
//2. Encapsulamento: Visibilidade - Encapsular os detalhes do modelo de objeto, necessários para a quem intessa - (Public, Private e Protect) - Interface - Para comunicação entre partes do software
/**3. Herança (Prototype): É UM - Recebe atributos e comportamentos de um objeto Pai - Reutilizar código
 *  - (Carro é objeto que tem um Motor que é outro 
 * objeto - Ou seja, as propriedades do Motor não 
 * precisa estar dentro de carro, motor passa a ser 
 * um novo objeto filho de Carro)
 * 
 * Cadeia de protótipos - Árvore genealógica
 * É-UM - (Exemplo 1: Ser humano(Filho) é um mamífero(Pai) é um Animal(Avô), Exemplo 2: Ferrari é um Carro)
 *  
 * 4. Polimorfismo (Muitas formas):  
 */