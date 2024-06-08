// Programacion Orientada a Objetos POO

// Objeto producto - Object literal
const producto = {

    nombre: "Celular",
    precio: 200

}

// Object Constructor

function Producto(nombre, precio, disponible) { // Parametros
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;

}

const producto2 = new Producto("Celular LG", 600, false); // Argumentos
const producto3 = new Producto("Monitor", 200, true); // Argumentos
const producto4 = new Producto("Laptop ", 900, false); // Argumentos
const producto5 = new Producto("MMouse", 20, true); // Argumentos


console.log(producto2)
console.log(producto3)

console.log(producto4)
console.log(producto5)