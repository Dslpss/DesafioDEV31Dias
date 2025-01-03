//? Verifique se um número é maior que 10 e menor que 20.

let numero = 10;

if (numero > 10) {
  console.log(`${numero} e Maior que 10`);
} else if (numero < 20) {
  console.log(`${numero} é menor que 20`);
}

//? Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.

let idadeVotar = 16;

if (idadeVotar >= 16) {
  console.log("Pode votar");
} else {
  console.log("Não pode votar");
}

//? Use && e || para criar um sistema de login onde um usuário pode entrar com email ou nome de usuário, mas precisa fornecer uma senha válida.

let nomeUsuario = "ds.lps";
let email = "dennisemannuel93@gmail.com";
let senha = "Senha";

if (
  (nomeUsuario == "ds.lps" || email == "dennisemannuel93@gmail.com") &&
  senha == "Senha"
) {
  console.log("Acesso concedido!");
} else {
  console.log("Email, nome de usuário ou senha incorretos!");
}

//? Implemente um sistema de notas:

let nota = 70;

if (nota >= 90) {
  console.log("Aprovado com A");
} else if (nota >= 70 && nota < 90) {
  console.log("Aprovado com B!");
} else {
  console.log("Reprovado!");
}

/**
 * Crie uma variável saldo e verifique:
 * Se saldo > 0: Mostre "Saldo positivo".
 * Se saldo === 0: Mostre "Sem saldo".
 * Caso contrário, mostre "Saldo negativo".
 */

let saldo = 1;

if (saldo > 0) {
  console.log("Saldo Positivo!");
} else if (saldo === 0) {
  console.log("Sem saldo!");
} else {
  console.log("Saldo NEGATIVO!");
}

//? Use o operador ! para verificar se uma luz está apagada e ligue-a.

let lampadaAcessa = false;

if (!lampadaAcessa) {
  console.log("Alampada está acessa!");
} else {
  console.log("A lampada está apagada!");
}
