// Arreglos o arrays

// Creación de un arreglo de números
const num = [10, 20, 30, 40, 50];

// Imprime el arreglo 'num' en la consola
console.log(num);

// Muestra el arreglo 'num' en forma de tabla en la consola
console.table(num);

// Creación de un arreglo de strings usando el constructor Array
const meses = new Array("enero", "Febrero", "Marzo", "Abril");

// Muestra el arreglo 'meses' en forma de tabla en la consola
console.table(meses);

// Creación de un arreglo de meses de manera directa
const month = ["enero", "Febrero", "Marzo", "Abril"];

// Muestra el arreglo 'meses' nuevamente en forma de tabla en la consola
console.table(month);

// Creación de un arreglo mixto con diferentes tipos de datos
const arreglo = ["Buenos días", 20, true, {nombre: "Luis", trabajo: "desarrollador"}, [1, 2, 3]];
console.log(arreglo); // Muestra un arreglo que incluye strings, números, booleanos, objetos y otro arreglo

// Acceso a un elemento específico del arreglo 'num' por su índice
console.log(num[2]); // Muestra 30, el tercer elemento del arreglo 'num'

// Conocer la extensión de un arreglo, es decir, cuántos elementos contiene
console.log(meses.length); // Muestra 4, indicando que 'meses' contiene cuatro elementos

// Iteración sobre los elementos del arreglo 'num' usando forEach
num.forEach(function(num) {
    console.log(num); // Imprime cada número del arreglo 'num' en la consola
});
