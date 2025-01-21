//? Crie uma matriz 3x3 e preencha-a com números sequenciais de 1 a 9.

let linhas = 3;
let colunas = 3;
let matriz = [];
for (let i = 0; i < linhas; i++) {
  matriz[i] = [];
  for (let j = 0; j < colunas; j++) {
    matriz[i][j] = i * colunas + j + 1;
  }
}
console.log(matriz);
