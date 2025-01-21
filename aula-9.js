//! Aula 9 - Recursão

//Faça uma função, que recebe um número e conta regressivamente começando desse número e indo até zero

function regressivamente(numero) {
  if (numero == 0) {
    console.log("Fim!")
    return
  }
  console.log(numero)
  regressivamente( numero - 1)
}
regressivamente(5)