//CRIANDO UM OBJETO PADRÃO  
class usuario {
    constructor(nome, idade, peso, casado, corCabelo, enderenco){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.casado = casado
        this.cabelo = corCabelo
        this.enderenco = enderenco
    }


    falar () {
        console.log(`Ola me chamo ${this.nome}! e peso ${this.peso}`)
    }

}



// CRIANDO UM OBJETO ATRAVES DA CLASS + INFORMAÇÕES
let aluno = new usuario ("Ana", 12, 54.2, true, "preto", "R.Sao jose")

console.log(aluno.cabelo)

aluno.falar()


//CRIANDO UMA HERENÇA DE UM OBJETO PARA UM NOVO OBJETO COM AS MESMOS ATRIBUTOS
// let aluno = Object.create(usuario);
// let funcionario = Object.create(usuario)

console.log(aluno.nome)
console.log(aluno.idade)