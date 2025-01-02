//! Exemplos Práticos

//? 1- Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável hora.

let hora = 12;
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa Tarde!");
} else {
  console.log("Boa noite!");
}

//? 2- Use um switch para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).

let mes = "1";
switch (mes) {
  case "1":
    console.log("Janeiro");
    break;
  case "2":
    console.log("Fevereiro");
    break;
  case "3":
    console.log("Março");
    break;
  default:
    console.log("Opção inválida!");
}

//? 3- Crie um programa que verifica se uma pessoa pode dirigir. Use a variável idade e mostre "Pode dirigir" ou "Não pode dirigir".

let idade = 17;
let mensagem = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(mensagem);

//? 4- Use o operador ternário para verificar se uma variável saldo é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".

let saldo = -3;
let valor = saldo > 0 ? `${saldo} saldo positivo` : `${saldo} saldo negativo`;
console.log(valor)


//? 5- Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".

let numero = 1
if (numero > 0) {
  console.log(`${numero} positivo`)
} else if (numero < 0) {
  console.log(`${numero} negativo`)
} else {
  console.log(numero)
}


//? 6- Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use switch para processar a escolha.

let opcao = 1 

switch (opcao) {
  case 1:
    console.log(`${opcao} - Sacar`)
    break
  case 2:
    console.log(`${opcao} - Depositar`)
    break
  case 3:
    console.log(`${opcao} - Saldo`)
    break
  default:
    console.log("Digite uma Opção Válida!")
}