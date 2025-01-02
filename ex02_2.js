//! EXEMPLOS PRÁTICOS

//? Verificar se um número é par ou ímpar

let numero = 7;
if (numero % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}

//? Classificando notas:

let nota = 89;

if (nota >= 90) {
  console.log("Aprovado com A!");
} else if (nota >= 70) {
  console.log("Aprovado com B!");
} else {
  console.log("Reprovado!")
}


//? Escolhendo ação com switch case:

let opcao = "cancelar"

switch (opcao) {
  case "pagar":
    console.log("Processando pagamento...")
    break;
  case "cancelar":
    console.log("Cancelando pedido...")
    break
  default:
    console.log("Opção inválida!");
}