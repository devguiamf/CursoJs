// Operadores aritméticos 
// + Adiçao ou Concatenação
// - Subtração
// / Divisoa
// * Multiplicação
// ** Potenciação
// % Resto da divisão

const num1 = 5;
const num2 = 10;
console.log("Soma dos valores", num1 + num2);
console.log("Subtração dos valores",num1 - num2);
console.log("Divissão dos valores",num1 / num2);
console.log("Multiplcação dos valores",num1 * num2);
console.log("Potenciação dos valores",num1 ** num2);
console.log("Resto da divisão dos valores",num1 % num2);

// Operador de encremento ++ e decremento --

let contador = 1
contador++ // soma 1 na variavel
contador-- //subtrai na variavel
console.log(contador);


/*Quando queremos que o contador some mais que uma unidade utilizamos os operadores de atribuição
+= - soma
*= - multiplicação 

*/

let contador2 = 1
contador2 += 2 //soma na variavel mais 2

//Nan - not a number
const numero1= 10
const numero2 = 'luis'
console.log(numero1 + numero2);

/*conversao de string para inteiro
parseInt('5') - converte de string para numero
parseFloat('5.2') - converte de string para float
number('5') - conver para numero também
*/

const number1 = parseInt('10')
const number2 = parseFloat('10.9')
const number3 = Number('10')

console.log(number1 + number2 + number3);