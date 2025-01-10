//? Exemplos Práticos

//? Iterando sobre um array:

const prompt = require("prompt-sync")();

let frutos = ["Maça", "Banana", "Laranja"];
for (let i = 0; i < frutos.length; i++) {
  console.log(frutos[i]);
}

//?Somando numeros de 1 a 10

for (let i = 1; i < 10; i++) {
  console.log(`${i} + ${i} = ${i + i}`);
}

//?Buscando valor de uma lista:
let numeros = [2, 8, 12, 5, 10];
let busca = 12;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === busca) {
    console.log(`Número ${busca} Encontrado na posição ${[i + 1]}!`);
    break;
  }
}

//? Validando dados com while
let senha = "1234";
let tentativa;

do {
  tentativa = prompt("Digite a senha: ");
  console.log("Digite a senha correta!");
} while (tentativa !== senha);

console.log("Senha Correta!");

//!Dicas importantes

/**
 * Cuidado com os loops infinitos!
 * Sempre garanta que a condição de saída do loop será atingida:
 */

let i = 0;
while (true) {
  console.log(i++);
  if (i === 5) break;
}
