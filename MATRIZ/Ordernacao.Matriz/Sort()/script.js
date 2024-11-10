let matriz = [
    [3, 1, 2],
    [6, 4, 5],
    [9, 7, 8]
  ];
  
  // Ordenando cada linha
  for (let i = 0; i < matriz.length; i++) {
    matriz[i].sort((a, b) => a - b);
  }
  
  console.log(matriz);
  // Saída: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  