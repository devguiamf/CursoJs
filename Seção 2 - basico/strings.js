// uma string é teravel ou seja contem indice

//               01234567  
let umaString = 'Um texto'

//dessa forma consiguimos imprimir a letra de tal indice indicado, OBS: o indice 0 é a primeira letra
console.log(umaString[4]);

//Outra forma de imprimir por indice
console.log(umaString.charAt(4));

// Como saber o tamnho da string
console.log(umaString.length);//lembrado que op indice começa do 0 porem length começa do 1

//fatia minha string entre os valores passados, quando passamos so um valor ele vai do valor até o final
console.log(umaString.slice(2, 5));