/**02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo). */

function triangulo(lado1, lado2, lado3){
<<<<<<< HEAD:3.Função/lista_exercicios_resposta_4/Resposta-Mateus/resposta2.js

    if(lado1 == lado2 && lado1 == lado3){
        console.log(`Triâgulo Equilátero`)
    }else if(lado1 !== lado2 && lado1 !== lado3 && lado2 != lado3){
        console.log(`Triâgulo Escaleno`)
    }else{
        console.log(`Triâgulo Isóceles`)
    }
}

triangulo(3,3,3)
triangulo(3,9,9)
triangulo(3,6,9)
=======
    if(lado1 == lado2 && lado1 == lado3){
        console.log('Triângulo Equilátero')
    }else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        console.log('Triângulo Escaleno')
    }else{
        console.log('Triângulo Isósceles')
    }
}   

triangulo(9,9,9)
triangulo(3,9,9)
triangulo(3,6,9)


>>>>>>> 68f23e94c6b8b79d78896de5f756b192891fa7f4:JS/3.Função/lista_exercicios_resposta_4/Resposta-Mateus/resposta2.js
