const nome = 'Guilherme'
const sobrenome = 'Almeida Morais Ferreira'
const idade = 21
const peso = 80
const alturaEmMt = 1.80

let imc = peso / (alturaEmMt * alturaEmMt)
let anoNascimento = 2022 - idade

console.log(nome,sobrenome,'tem',idade,'anos','pesa',peso,'kg','e tem',alturaEmMt,'de altura');
console.log('Seu IMC é de ',imc);
console.log(nome,'nasceu em',anoNascimento);