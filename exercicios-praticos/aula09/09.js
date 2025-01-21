//? 1 - Escreva uma função recursiva que conte de n até 0.
function contagemRegressiva(num) {
  if (num === 0) {
    console.log("Fim!");
    return;
  }
  console.log(num);
  contagemRegressiva(num - 1);
}
contagemRegressiva(10);

//?2- Implemente uma função que calcule o fatorial de um número.
function fatorialNumero(n) {
  if (n === 0) return 1;
  return n * fatorialNumero(n - 1);
}
console.log(fatorialNumero(10));

//? 3  Crie uma função que some todos os números de um array usando recursão.
function somarArray(array) {
  if (array.length === 0) return 0;
  return array[0] + somarArray(array.slice(1));
}

console.log(somarArray([2, 3, 4, 5, 6]));

//? 5 - Escreva uma função para verificar se uma palavra é um palíndromo usando recursão.
function ehPalindromo(srt) {
  //Remove espaçoes e converte para minúsculas
  srt = srt.toLowerCase().replace(/\s/g, "");

  //Compara a string com sua versão invertida
  return srt === srt.split("").reverse().join("");
}

console.log(ehPalindromo("radar"));


//? 6- Implemente uma função que calcule o n-ésimo termo da sequência de Fibonacci.
function fibonacci(n) {
  // Casos base
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  // Caso recursivo
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exemplos de uso
console.log(fibonacci(0));  // 0
console.log(fibonacci(1));  // 1
console.log(fibonacci(2));  // 1
console.log(fibonacci(3));  // 2
console.log(fibonacci(4));  // 3
console.log(fibonacci(5));  // 5
console.log(fibonacci(10)); // 55
