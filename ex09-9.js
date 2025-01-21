//! Exemplos comuns de Recursão

//? Fatorial de um número:

function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}
console.log(fatorial(5));

//? Sequência de Fibonacci:
function fibonacci(n) {
  if (n <= 1) return n; // caso base
  return fibonacci(n - 1) + fibonacci(n - 2); //Chamada recursiva
}
console.log(fibonacci(6));

//? Navegando em uma Estrutura de Diretórios:
function listarArquivos(diretorio) {
  for (let item of diretorio) {
    if (Array.isArray(item)) {
      listarArquivos(item); // Chamada recursiva
    } else {
      console.log(item);
    }
  }
}

let arquivos = ["index.html", ["css", "styles.css"], ["js", "script.js"]];
listarArquivos(arquivos);

//!Exercícios Práticos

//? Inverter uma String:
function inverterString(str) {
  if (str === "") return "";
  return inverterString(str.slice(1)) + str[0];
}
console.log(inverterString("Recursão"));

//? Soma de Elementos em um Array:
function somaArray(array) {
  if (array.length === 0) return 0; //Caso base
  return array[0] + somaArray(array.slice(1)); //Chamada recursiva
}

console.log(somaArray([1, 2, 3]));

//?Potenciação:
function potencia(base, expoente) {
  if (expoente === 0) return 1;
  return base * potencia(base, expoente - 1);
}
console.log(potencia(2, 3));
