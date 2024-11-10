const array = [345,232,12,121,344]
console.log(`array: ${array}`)


//ORDEM CRESCENTE
array.sort((a,b) => a-b)
console.log(`Ordem Crescente ${array}`) //12,121,232,344,345

//ORDEM DECRESCENTE
array.sort((a,b) => b-a)
console.log(`Ordem Decrescente ${array}`) //345,344,232,121,12