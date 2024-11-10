const numeros = [
        [12, 22, 23],
        [44, 51, 60],
        [73, 81, 92]
];

let num = 92

for (i=0; i<numeros.length; i++){
    for (j=0; j<numeros[i].length; j++){
        if (numeros[i][j] === num)
            console.log(i,j) //MOSTRA A POSIÇÃO DO ELEMENTO COMO POSIOÇÕES
    }
}


//MOSTRANDO A ESTRUTURA DA MATRIZ POR POSIÇÃO
console.log(numeros)