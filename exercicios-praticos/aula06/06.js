//? Crie um array com suas três cores favoritas e adicione uma nova cor no final.
let cores = ["Preta", "Azul", "Vermelha"];
cores.push("Verde");
console.log(cores);

//? Use um loop para exibir todos os itens de um array de compras.
let compras = ["Vinho", "Cerveja", "Suco", "Arroz"];
for (let i = 0; i < compras.length; i++) {
  let comprasArray = compras[i];
  console.log(`Item de compra: ${i + 1} ${comprasArray}`);
}

//? Dado um array de números [10, 20, 30, 40, 50], use o método slice para extrair os dois últimos números.
let arrayNumero = [10, 20, 30, 40, 50];
console.log(arrayNumero.slice(3, 5));

//? Crie um array de tarefas e remova a primeira tarefa usando shift.
let tarefas = ["Varrer casa", "Tirar o lixo", "Fazer comida"];
tarefas.shift();
console.log(tarefas);

//? Use splice para substituir o terceiro item de um array por "Substituído".

let array2 = [1, 2, 3, 4, 5];
array2.splice(2, 1, "Substituido");
console.log(array2);

//? Transforme um array de palavras em uma frase completa usando join.

let palavras = ["Oi", "tudo", "bem?"];

let texto = palavras.join(" ");
console.log(texto);
