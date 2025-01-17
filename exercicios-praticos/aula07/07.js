//? Crie uma função que calcule o dobro de um número.
function calcularDobro(numero) {
  return numero * 2;
}

let resultado = calcularDobro(2);
console.log(resultado);

//? Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.
function mensagemBoasVindas(nome) {
  return `Bom dia! ${nome}`;
}

console.log(mensagemBoasVindas("Dennis"));

//? Crie uma função que receba dois números e retorne o maior deles.

function retorneMaiorNumero(numero1, numero2) {
  return numero1 > numero2 ? numero1 : numero2;
}

console.log(retorneMaiorNumero(6, 4));

//? Implemente uma função que calcule a média de três números.
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

let resultadoMedia = calcularMedia(6, 6, 7);
console.log(resultadoMedia.toFixed(2));

//? Crie uma função que receba um array de números e retorne a soma deles.
function somaArrayNumeros() {
  let arrayNumeros = [2, 4, 6];
  let soma = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    soma += arrayNumeros[i];
  }
  return soma;
}
let resultadoSomaArray = somaArrayNumeros();
console.log(resultadoSomaArray);

//? Escreva uma função que receba uma string e retorne o número de caracteres dessa string.

function quatidadeCaracteres(string) {
  return string.length;
}

let numeroDeCaracteres = quatidadeCaracteres("Dennis");
console.log(numeroDeCaracteres);
