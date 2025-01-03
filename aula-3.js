//!AULA 3 - BOOLEANS

let verdadeiro = true;
let falso = true;

console.log(5 > 6);
console.log(6 > 5);
console.log(6 == 5);
console.log(6 > 5);

let idade = 18;
let temCarteira = true;

// true || false = true
// true && false = false
if (temCarteira && idade >= 18) {
  console.log("Pode dirigir ");
} else {
  console.log("Não pode dirigir")
}
