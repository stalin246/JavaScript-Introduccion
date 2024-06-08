// Funciones que retornan valores

// Definición de la función 'sumar' que acepta dos parámetros y devuelve su suma
function sumar(n1, n2) {
    return n1 + n2; // Retorna la suma de n1 y n2
}

// Llama a la función 'sumar' con los argumentos 2 y 3, y guarda el resultado en 'resultado'
const resultado = sumar(2, 3);
console.log(resultado); // Muestra 5 en la consola, que es el resultado de sumar 2 y 3

// Inicialización de la variable 'total' a 0 para llevar un acumulado del carrito de compras
let total = 0;

// Definición de la función 'agregarCarrito' que toma un precio y lo suma al total acumulado
function agregarCarrito(precio) {
    return total += precio; // Suma el precio al total y retorna el nuevo total
}

// Llama a la función 'agregarCarrito' varias veces para agregar precios al carrito
total = agregarCarrito(200); // Añade 200 al total, total ahora es 200
total = agregarCarrito(400); // Añade 400, total ahora es 600
total = agregarCarrito(800); // Añade 800, total ahora es 1400
console.log(total); // Muestra 1400 en la consola, que es el total acumulado hasta ahora

// Definición de la función 'calcularImpuesto' que calcula el impuesto sobre el total
function calcularImpuesto(impuesto) {
    return 1.15 * impuesto; // Calcula y retorna el total incluyendo un impuesto del 15%
}

// Calcula el total a pagar, incluyendo impuestos, usando el 'total' acumulado
const totalPagar = calcularImpuesto(total);
console.log(`Total a pagar con impuestos: ${totalPagar}`); // Muestra el total a pagar incluyendo impuestos
