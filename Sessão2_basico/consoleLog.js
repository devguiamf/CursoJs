//Console LOG - são somente exibidos no terminal da IDE e no log do navegador 

// Tudo dentro de "", '', `` é interpretado como String(texto)

console.log('Guilherme de Almeida');
console.log("Guilherme de ALmeida");
console.log(`Guilherme de Alemdia `);

//Podemos utlizar as misturas de '', "" , `` dentro os textos

console.log('Guilherme de "Almeida"');
console.log("Guilherme de 'Almeida'");
console.log(`"Guilherme" de 'Almeida'`);

//Podemos imprimir Number(nuemros) que nao utilizao '', "", `` junto com as String(Texto)

console.log(123456);
console.log(123456 , "Guilherme de Almeida");

console.log('Meu nome é "Nome". Estou aprendendo JavaScript as', 10 ,'da manhã.');

//podemos imprimir as variaveis de 2 formas usando JS.

//1° forma é utilizando o nome da variavel fora das aspas e separando por virgulas:
let nome = 'Guilherme'
let sobrenome = 'Almeida Morais Ferreira'

console.log('Meu nome é',nome,'e meu sobrenome é',sobrenome);

/* 2° forma e mais usada utilizada, trocamos as aspas pelas crases e ao inves de virgulas
 utilizamos ${} -> dentro das chaves colocamos  a variavel */
 console.log(`Meu nome é ${nome} e meu sobrenome é ${sobrenome}`);