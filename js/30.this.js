// Uso de 'this' dentro de una función definida en un objeto

// Definición de un objeto 'reservacion' con varias propiedades y un método
const reservacion = {
    nombre: "Luis",
    apellido: "Valencia",
    total: 300,
    estado: false,
    // Uso de una función tradicional para mantener el contexto de 'this'
    informacion: function() {
        // 'this' aquí se refiere al objeto 'reservacion' que contiene la función
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
    }
}

// Llamada al método 'informacion' del objeto 'reservacion'
reservacion.informacion(); // Imprime: El cliente Luis reservó y su cantidad a pagar es 300

// Intento de usar una arrow function dentro de un objeto para definir un método
const reservacion2 = {
    nombre: "Luis",
    // Definición del método con una arrow function
    informacion: () => {
        // 'this' en una arrow function aquí referencia al contexto léxico exterior, que es el global en este caso
        console.log(`El cliente ${this.nombre}`);
    }
}

// Llamada al método 'informacion' en el objeto 'reservacion2'
reservacion2.informacion(); // Imprime: El cliente undefined
