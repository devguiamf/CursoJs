/* Esta instrução é usada quando não sabemos quantas vezes um determinado bloco de instruções precisa ser repetido. Com ele, a execução das instruções vai continuar até que uma condição seja verdadeira */

let i = 0
//    condição
while (i <=10){
    console.log(i);
    i++
}

/********************************************/

function ramdom(min, max){
    const n = Math.random() * (max -min) + min
    return Math.floor(n)
}

let rand = ramdom(1,50)

console.log(rand);
while (rand !== 10) {
    rand = ramdom(1,50)
    console.log(rand);
}