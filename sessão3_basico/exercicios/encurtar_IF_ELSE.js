const pontucao = 999

//quando temos so duas opções como on codigo abaixo, podemos utilizar operção ternaria

if (pontuacao >= 999){
    console.log('Usuario VIP');
}else{
    console.log();
}

//OPERAÇÃO TERNARIA
//                             valor para verdadero  |  valor para falso
const nivelUsuario = pontuacao>= 1000 ? 'Usuário VIP':'Usuario normal'

console.log(nivelUsuario);
