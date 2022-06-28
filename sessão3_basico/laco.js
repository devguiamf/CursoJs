// console.log('linha 1');
// console.log('linha 2');
// console.log('linha 3');
// console.log('linha 4');
// console.log('linha 5');

// ************************* FOR CLASSICO *********************************

// //para criação do laço utilizamos for e dentro do () colocamos 3 expressões que são separadas por ;
// // 1° criamos uma variavel que controla o laço (contador)
// // 2° uma condição para o laço parar
// // 3° incrementa ou decrementa o contador 
// for (let i = 0; i<= 5; i++) {
//     console.log(`linha ${i}`);
// }

//  const frutas = ['Banana','Maçã','Pera','Uva','Melancia']

// for (let i = 0; i < frutas.length; i++){
//     console.log(`Indice ${i}:${frutas[i]}`);
// }

// // for in le os indices ou chaves do objtos
// for( let i in frutas){
//     console.log(frutas[i]);
// }

// ************************* FOR IN *********************************
// const frutas = ['Banana','Maçã','Pera','Uva','Melancia']
// const pessoa = {
//     nome: 'Guilherme',
//     sobrenome: 'Almida',
//     idade: 21
// }

// for (const i in pessoa) {
//     console.log(i, pessoa[i]);
// }
// for (const i in frutas) {
//     console.log(i, frutas[i]);
// }

// ************************* FOR OF *********************************

const nomes = ['Guilhrme', 'Gustavo', 'Beatriz', 'Lucas']

//ele pega o valor direto sem o indice
for (let valor in nomes){
    console.log(valor);
}

