//Objeto
const pessoa1 = {
    nome: 'Guilherme',
    sobrenome: 'Almeida',
    idade: 25
};
//formas de imprimir os elementos do objeto
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//Função que cria pessoa
function criaPessoa (nome, sobrenome, idade) {
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoa2 = criaPessoa('Camila', 'Vitória', 18)
const pessoa3 = criaPessoa('Fernanda', 'Helena', 18)
const pessoa4 = criaPessoa('Gabriel', 'Betella', 22)

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome);

//criando funções dentro de objeto 
const pessoa5 = {
    nome:'Reinaldo',
    sobrenome:'Silva',
    idade: 35,

    saudacao(){
        console.log(`${this.nome} da ${this.sobrenome} esta dizendo oi`);
        // this se refere ao objeto no caso pessoa5 
    }
};
//chamando a função dentro do obejeto
pessoa5.saudacao();