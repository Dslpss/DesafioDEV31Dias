//? 1 - Use o loop for para imprimir os números de 1 a 10 no console

for (let i = 1; i <= 10; i++) {
  console.log(`Numero: ${i}`);
}

//? 2 - crie uma lista de nomes e use um for para exibir cada nome:

let nomes = ["Dennis", "Emannuel", "Fernando", "João"];

for (let i = 0; i < nomes.length; i++) {
  console.log(`index ${i}º-> ${nomes[i]}`);
}

//? 3 - Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.

let numeros = [5, 13, 9, 4, 10, 11];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    console.log(`Número maior que 10: ${numeros[i]}`);
    break;
  }
}

//? 4 - Use um while para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.
let contador = 10;

while (contador >= 0) {
  console.log(contador--);
  if (contador == 0) {
    console.log("Lançamento");
    break;
  }
}

//? 5 - 5. Escreva um loop que calcula o fatorial de um número (ex: `5! = 5*4*3*2*1`).

let fatorial = 1;

for (let i = 1; i <= 5; i++) {
  console.log(` ${fatorial} * ${i} = ${(fatorial *= i)}`);
}
