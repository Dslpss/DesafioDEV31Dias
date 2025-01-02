//? 1- CRIE UMA VARIÁVEL PARA ARMAZENAR SEU NOME E OUTRA PARA ARMAZENAR SUA IDADE. IMPRIMA UMA FRASE COMO: "MEU NOME É [NOME] E TENHO [IDADE] ANOS."

let nome = "Dennis Emannuel";
let idade = 27;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`); // Saída: Meu nome é Dennis Emannuel e tenho 27 anos.


//? 2- DECLARE UMA VARIÁVEL PARA ARMAZENAR O PREÇO DE UM PRODUTO E OUTRA PARA O DESCONTO. CALCULE O PREÇO FINAL E MOSTRE NO CONSOLE.

let preco = 40;
let desconto = 10;
let precoFinal = preco - desconto;
console.log(precoFinal); // Saída: 30


//? 3- CRIE UM ARRAY COM TRES DE SUAS COMIDAS FAVORITAS E EXIBA A SEGUNDA COMIDA DA SUA LISTA.

let comidas = ["Peixe", "Frango", "Carne"];
console.log(comidas[1]); // Saída: Frango

//? 4- Crie um objeto que represente um livro, com propriedades como titulo, autor e ano. Mostre no console o título e o autor.

let livro = {
  titulo: "JavaScript para iniciantes",
  autor: "Dennis Emannuel",
  ano: 2021,
}

console.log(livro.titulo); // Saída: JavaScript para iniciantes

//? 5- Declare uma variável estaLogado com o valor false. Depois, mude o valor para true e imprima a mensagem: "Status de login: [valor da variável]".

let estaLogado = false;
estaLogado = true;

console.log(`Status de login: ${estaLogado}`); // Saída: Status de login: true

//? 6- Crie uma variável constante chamada PI com o valor 3.14. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.

const PI = 3.14;
let raio = 5;
let area = PI * raio * raio;

console.log(area); // Saída: 78.5