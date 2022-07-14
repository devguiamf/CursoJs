//Função simples para saudação
function saudacao (){
 console.log('Bom dia !!');
}
saudacao();

//utilização de parametros nas funções 
function saudacao (nome){
    console.log(`Bom dia !! ${nome}`);
   }
   
saudacao('Guilherme');
saudacao('Luiz');
saudacao('Fernanda');

//função que retorna
function soma(x, y){
    const resultado = x + y
    return resultado
}
console.log(soma(2,2));
console.log(soma(2,7));
console.log(soma(15,92));
