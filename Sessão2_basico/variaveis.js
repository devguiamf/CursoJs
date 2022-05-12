/* 
    As variaveis são dados guardados na memoria que podem variar ou não.
    Existe a variavel de escopo de bloco que pode ser atualizada porem nao declarada novamente = let
    E temos a variavel que pode ser atualizada e declaradas de novo tendo o escocpo Global = var

/*  
    Nao podemos criar LET como palavras reservadas
    LET precisam ter nomes significativos
    não podemos começar o nome de uma LET com numero
    não podem conter espaços
    utilizamos camelcase
    uma LET é uma case-sensitive
    não podemos modificar o valor de uma LET
    não utilizar var, utilize LET
 */

/* 
    No exemplo abaixo, pecebemos que o nome 'João' aparece repetidas vezes. 
    Logo podemos criar uma variavel que recebe o nome de 'João' e na hora de imprimir o nome 
    chamamos a variavel no lulgar
*/


console.log('João nasceu em 2004');
console.log('Em 2000 joãoconheceu Maria');
console.log('João casou-se com maria em 2012');
console.log('Maria teve 1 filho com João em 2015');
console.log('O filho de João se chama Eduardo');
console.log('\n')

let nome = 'João'; //Criando variavel de nome

// Realizando a troca do nome pela variavel que contem o nome
console.log(nome,'nasceu em 2004');
console.log('Em 2000',nome,'conheceu Maria');
console.log(nome,'casou-se com maria em 2012');
console.log('Maria teve 1 filho com',nome,'em 2015');
console.log('O filho de',nome,'se chama Eduardo');
