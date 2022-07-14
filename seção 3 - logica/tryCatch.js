// try catch e throw

// serve para vc tratar erros e ser mais facil de identificalos 
try{// execute esse bloco 
    console.log(naoExisto);
}catch(err){ // execute esse caso o de cima de erro
    console.log('naoExisto nao existe'); // mensagem do erro    
}

// usos para o throw
function soma (x, y){
    if(typeof x !== number || typeof y !== number){
        throw('x e y precisam ser numeros')
    }
    return x + y
}
console.log(1,a);