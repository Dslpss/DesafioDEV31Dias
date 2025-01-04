//! Exemplos práticos:

//? Formatando textos:
let nome = "   anna silva  ";
console.log(nome.trim().toUpperCase()); //"trim()" Remove espaços do inicio ao fim

//? Validando strings:
let email = "user@gmail.com";
if (email.includes("@")) {
  console.log("Email válido!");
} else {
  console.log("Email Inválido!");
}

//? Cortando partes de um texto:
let frase = "Eu amo programação";
let palavra = frase.slice(6, 19);
console.log(palavra);

//? Substituindo Palavras:
let mensagem = "Olá, João!";
let novaMensagem = mensagem.replace("João", "Maria");
console.log(novaMensagem);

//? Verificando Começo e fim:
let site = "www.exemplo.com.br";
console.log(site.startsWith("www"));
console.log(site.endsWith("br"));
