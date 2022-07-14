/*
    Quando recebemos uma variavel para utilizar na função, e chamado de parametro, e quando passamos e chamado de argumento. No exemplo abaixo o parametro recebido e chamado de NOME e o argumento passado foi 'Guilherme'
*/
function funcao(nome){
    console.log(`Olá ${nome}`);
}
funcao('Guilherme')

/*
    Também podemos passar argumentos sem receber parametros. Mas nesse caso o exemplo abaixo so funciona quando declaramos uma função com a palavra function
*/
function nomes() {
    console.log(arguments[2]); // arguments sao os agumentos passados ao chamar a função, mesmo que nao receba nenhum parametro
}
nomes('Guilherme','João,','Adriel')

/*
    Também podemos assumir valores padrao nos parametros caso nao for passado nenhum argumento ou for passado o valor undefined
*/

function soma(a=2, b=3, c=4) {
    console.log(a+b+c);
}
soma(10,10)// estou passando os 2 parametros sendo eles A e B = 10 porem a soma vai dar 24 pois o valor c nao foi passado e ele assumiu o valor padrao de 4