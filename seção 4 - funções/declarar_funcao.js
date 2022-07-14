//Declaração de função (function hoisting)
falaOi();
function falaOi() {
    console.log('oie');
}

//First-class objects (Objetos de primeira classe )
//Function exprssion
const faloOi2 = function(){
    console.log('oie 2');
}
faloOi2()

//arrow function
const arrowFunction = () => {
    console.log('sou uma arrow function');
} 
arrowFunction()

//Dentro de um objeto 
const objeto= {
    falar: function() {console.log('falar');   }
}
objeto.falar()