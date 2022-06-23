let num1 = 10
let num2 = 2.5
let num3 = 10.44455

// Converte o valor a ser mostrado em string, permitindo a concatenação. Porém nao muda o valor na variavel
console.log(num1.toString + num2)

//Converte em string e mostra em binario
console.log(num1.toString(2));

//Arredonda para 2 casas decimais
console.log(num3.toFixed(2));

//Retorna se o numero indicado e inteiro ou nao V(True) ou F(False)
console.log(Number.isInteger(num1));