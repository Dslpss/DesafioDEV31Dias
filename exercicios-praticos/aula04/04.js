//! EXERCÍCIOS PRÁTICOS:
//? 01 - Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.

let nomeCompleto = "Dennis Emannuel de Paiva Lopes";
console.log(nomeCompleto.slice(0, 6));

//? 02 - Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.

let mensagem = "Eu estou aprendendo JavaScript";

if (mensagem.includes("Java")) {
  console.log("Palavra Java Encontrada!");
} else {
  console.log("Palavra não encontrada!");
}

//? 03 - Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.

let texto = "   Aprender programar exige dedicação ";

console.log(texto.trim().toUpperCase());

//? 04 - Substitua a palavra "erro" por "correção" na string "Houve um erro no sistema.".

let mensagem2 = "Houve um erro no sistema.";

console.log(mensagem2.replace("um erro", "uma correção"));

//? 05 - Divida a frase "Eu amo JavaScript" em palavras separadas e exiba cada uma.

let fraseSeparada = "Eu amo JavaScript";
console.log(fraseSeparada.slice(0, 2));
console.log(fraseSeparada.slice(2, 6));
console.log(fraseSeparada.slice(6, 17));
