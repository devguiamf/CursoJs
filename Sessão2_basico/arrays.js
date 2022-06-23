// arrays sao comos listas onde temos varios objetos dentro desta lista, todo array começa no indice 0

const aluno = ['Luiz','Maria','João', 1, true, null];
console.log(aluno);

//imprimir por index
console.log(aluno[3]);

//editar um dos elemenos da lista
aluno[0] = 'Eduardo'

//adicionando um elemento, porem temos que saber qual o numero do index do ultimo elemento 
aluno[6] = 'Xxxx'

//função para adicionar no final da lista
aluno.push('Ultimo')

//função para adicionar no primeiro elemento, ou seja elemento 0, passando os outros para frente 
aluno.unshift('Luiza')

//remove o ultimo elemento da lista e posibilita salvar o elemento removido em uma variavel
let removido = aluno.pop()
console.log(removido);

//remove o primeiro da lista e assim como pop, também tem como guardar dentro de uma variavel
let removido2 = aluno.shift()
console.log(removido2);

//deleta o elemento dentro do indice deixando vazio
delete aluno[1]

//fatiar a lista, e mostra os elementos de indice 0 a 2
console.log(aluno.slice(0,3));


 console.log(aluno);