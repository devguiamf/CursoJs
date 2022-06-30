//  **************** ANTES DE TER ATRIBUIÇÃO/DESESTRUTURAÇÃO *******************

// //       indice: 0  1  2  3  4  5  6  7  8
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(numeros[0]);

// const primeiroNumero = numeros[0]
// console.log(primeiroNumero);

//  **************** DEPOIS DE TER ATRIBUIÇÃO/DESESTRUTURAÇÃO *******************

// // //       indice: 0  1  2  3  4  5  6  7  8
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // const [um, dois] = numeros
// // console.log(um, dois, resto);

// //utilizando o resto(rest)
// const [um, dois, ...resto] = numeros
// console.log(um, dois, resto);



// *********** EM OBJETOS **************
// ************ ATRIBUIÇÃO NORMAL

const pessoa ={
    nome:'luiz',
    sobrenome: 'Almeida',
    idade: 21,
    endereco: {
        rua: 'Maranhão',
        numero: 2255
    }
}

// const nome = pessoa.nome
// console.log(nome);

// ***** ATRIBUIÇÃO/DESESRUTURAÇÃO

const {nome, idade, ...resto } = pessoa
console.log(nome, idade, resto);