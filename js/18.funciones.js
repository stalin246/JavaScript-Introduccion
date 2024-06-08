// Funciones

// Declaracion

function sumar() { // Se crea la funcion

    console.log(10 + 10);
}
// Se llama a la funcion
sumar()

// Expresion de la funcion
const sumar2 = function() {
    console.log( 3 + 5);
}
sumar2();

// IIFE, se invocan ellas mismas

(function(){
    console.log("Es una funcion");
})();