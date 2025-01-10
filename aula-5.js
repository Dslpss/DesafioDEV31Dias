//! Aula 5 - loops

//? Loop For
for (let indece = 0; indece <= 20; indece++) {
  console.log(indece);
}

//? Loop while
let contador = 0
while (contador <= 20) {
  console.log("Contador", contador++)
}


//? do...while
let numero = 5
do {
  console.log("Executando...")
  numero--
} while (numero > 5)