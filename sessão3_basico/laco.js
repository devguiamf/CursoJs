// console.log('linha 1');
// console.log('linha 2');
// console.log('linha 3');
// console.log('linha 4');
// console.log('linha 5');


//para criação do laço utilizamos for e dentro do () colocamos 3 expressões que são separadas por ;
// 1° criamos uma variavel que controla o laço (contador)
// 2° uma condição para o laço parar
// 3° incrementa ou decrementa o contador 
for (let i = 0; i<= 5; i++) {
    console.log(`linha ${i}`);
}

const frutas = ['Banana','Maçã','Pera','Uva','Melancia']

for (let i = 0; i < frutas.length; i++){
    console.log(`Indice ${i}:${frutas[i]}`);
}