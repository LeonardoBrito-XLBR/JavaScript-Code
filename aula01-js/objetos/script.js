//CRIANDO UM OBJETO PADRÃO  
const usuario = {
    nome: "leonado",
    idade:  28,
    casado:  true,
    peso: 2.12, 

    falar: function(){
        console.log(`Oi meu nome é ${usuario.nome}`);
    },
    
    endereco: {
        rua: "Sao jose",
        cidade: "salvador",
        bairro: "barra",
        numero: 12
    }


    
}

//CRIANDO UMA HERENÇA DE UM OBJETO PARA UM NOVO OBJETO COM AS MESMOS ATRIBUTOS
let aluno = Object.create(usuario);
let funcionario = Object.create(usuario)

console.log(aluno.nome)
console.log(aluno.idade)

console.log(funcionario.peso)
console.log(funcionario.casado)

funcionario.falar()

