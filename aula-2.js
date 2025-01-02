//! AULA 2 - CONDICIONAIS

// Condicional if

let hora = 22;

if (hora < 12) {
  console.log('Bom dia!');
} else if (hora < 18) {
  console.log('Boa tarde!');
} else {
  console.log('Boa noite!');
}

// switch
let diaDaSemana = 2;

switch (diaDaSemana) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Segunda');
    break;
  case 2:
    console.log('Terça');
    break;
  case 3:
    console.log('Quarta');
    break;
  case 4:
    console.log('Quinta');
    break;
  case 5:
    console.log('Sexta');
    break;
  case 6:
    console.log('Sábado');
    break;
  default:
    console.log('Dia inválido');
}

// Operador ternário
let idade = 18;
let podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); // Pode beber