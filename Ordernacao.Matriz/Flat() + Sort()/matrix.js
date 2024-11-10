let matriz = [
  [23, 10, 61],
  [21, 41, 52],
  [91, 78, 80]
];

// Achatar a matriz e ordenar em ordem crescente
let matrizOrdenada = matriz.flat().sort((a, b) => a - b);

// Remontar a matriz original com as linhas ordenadas
let matrizCrescente = [
  matrizOrdenada.slice(0, 3), // Pega os primeiros 3 elementos [10, 21, 23]
  matrizOrdenada.slice(3, 6), // Pega os próximos 3 elementos [41, 52, 61]
  matrizOrdenada.slice(6, 9)  // Pega os últimos 3 elementos [78, 80, 91]
];

console.log("Ordem crescente:", matrizCrescente);

// Ordenar em ordem decrescente
matrizOrdenada.sort((a, b) => b - a);
let matrizDecrescente = [
  matrizOrdenada.slice(0, 3),
  matrizOrdenada.slice(3, 6),
  matrizOrdenada.slice(6, 9)
];
console.log("Ordem decrescente:", matrizDecrescente);
