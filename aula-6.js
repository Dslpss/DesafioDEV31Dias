//! Aula 6 - Arrays

let frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas);

//? add elementos no final do array
frutas.push("Abacaxi");
frutas.push("Melancia");
frutas.push("Pera");
console.log(frutas);

//?Removendo o último elemento do array
frutas.pop();
console.log(frutas);

//?Removendo o primeiro elemento do array
frutas.shift();
console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
  let frutasDoLoop = frutas[i]
  console.log(frutasDoLoop)
}