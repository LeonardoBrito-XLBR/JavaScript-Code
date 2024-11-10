const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//MOSTRANDO A ESTRUTURA DA MATRIZ POR ELEMENTO
for (i=0; i<numeros.length; i++){
    for (j=0; j<numeros[i].length; j++){
        console.log(numeros[i][j])
    }
}


//MOSTRANDO A ESTRUTURA DA MATRIZ POR POSIÇÃO
console.log(numeros)