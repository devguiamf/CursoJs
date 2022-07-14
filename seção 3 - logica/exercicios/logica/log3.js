/*
    Escreva uma função que recebe um numero e retorne o seguinte:
    numero é divisivel por 3 = fizz
    numero é divisivel por 5 = buzz
    numero é divisivel por 3 e 5 = Retorna o proprio numero
    numero não é divisel por 3 e 5 =Retorne o proprio numero
    checar se o numero é realmente um numero
    use função com numero de 0 a 100
*/

function FizzBuzz(numero){
    if(typeof numero !== 'number') return numero
    if(numero % 3 ===0 && numero % 5 === 0) return 'FizzBuzz'
    if(numero % 3 === 0) return 'Fizz'
    if(numero % 5 === 0) return 'Buzz'    
    return numero
}

for (let i= 0; i<=100; i++ ){
    console.log(i, FizzBuzz(i));
}