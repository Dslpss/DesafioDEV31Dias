//! 08 - Matrizes
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matriz.length; i++) {
  let subArray = matriz[i]
  for (let j = 0; j < subArray.length; j++) {
    console.log(matriz[i][j])
  }
}