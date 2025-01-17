//! Aula 7 - funções

function darBoatarde() {
  console.log("Boa tarde!");
}

darBoatarde();

function darBoaNoite(nome) {
  console.log(`Boa noite! ${nome}`);
}

darBoaNoite("Dennis");

function calculadora(a, b, operacao) {
  switch (operacao) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;

    default:
      console.log("Operação inválida!");
      break;
  }
}
let resultado = calculadora(6, 5, "+")
console.log(resultado)