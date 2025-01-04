//! AULA DE STRINGS

let nome = "Dennis";
let sobrenome = "Emannuel";
let saudacao = `Olá, ${nome} ${sobrenome}`;

console.log(saudacao);

//? Pegar apenas uma palavra da frase
let frase = "Eu amo Programação!";
let palavra = frase.slice(6, 19);
console.log(palavra);

//? Substituir String
let novaSaudacao = saudacao.replace("Olá", "Boa Tarde");
console.log(novaSaudacao);

//? Validar se a string tem algo especifico dentro dela

let email = "dennisemannuel93@gmail.com"
if (email.includes("@")) {
  console.log("Email Válido!")
} else {
  console.log("Email Inválido!")
}

