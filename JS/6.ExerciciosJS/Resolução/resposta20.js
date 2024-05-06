/**Faça uma função que recebe a base e a altura de um triangulo e retorne a area desse triangulo.
 *  A precisão deverá ser de duas casas decimais, arredondando se necessário. */

function calculaAreaTriangulo(base, altura) {

    let area = base * altura

    return area
}

console.log(calculaAreaTriangulo(4, 4).toFixed(2))