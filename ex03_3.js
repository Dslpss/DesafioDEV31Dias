//? Verificando login:

let estaLogado = false;

if (estaLogado) {
  console.log("Bem-vindo de volta!");
} else {
  console.log("Por favor, faça login!");
}

//? Classificando notas:

let nota = 85;

if (nota >= 90) {
  console.log("Nota A");
} else if (nota >= 70 && nota < 90) {
  console.log("Nota B");
} else {
  console.log("Reprovado!");
}

//?Negação com !:

let luzAcessa = false;

if (!luzAcessa) {
  console.log("A luz está acessa.");
}

//? Combinação de condições:

let saldo = 10;
let temCartao = true;

if (saldo > 0 || temCartao) {
  console.log("Compra aprovada");
} else {
  console.log("Compra negada!");
}

//? Dicas Importantes
//?Cuidado com conversões automáticas (truthy e falsy):
//? No JavaScript, alguns valores são interpretados como true ou false, mesmo que não sejam booleanos.

/*Valor
	
Interpretação
0, "", null, undefined, NaN
	
false
Qualquer outro valor
	
true */

//? Exemplo:

if (0) {
  console.log("Isso nunca será executado!");
}
if ("Texto") {
  console.log("Isso será executado!");
}
