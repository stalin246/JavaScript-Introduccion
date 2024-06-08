// Arreglos o arrays

// Arreglo de meses
const meses = ["enero", "Febrero", "Marzo", "Abril"];

// Arreglo de objetos que representan productos en un carrito de compras
const carrito = [
    {nombre: "Laptop", precio: 400},
    {nombre: "Celular", precio: 500},
    {nombre: "Televisor", precio: 800},
    {nombre: "Teclado", precio: 600},
    {nombre: "Mouse", precio: 200},
    {nombre: "Monitor", precio: 400},
    {nombre: "USB", precio: 40},
    {nombre: "Parlante", precio: 80}
];

// Uso de forEach para verificar si "Marzo" está en el arreglo de meses
meses.forEach(function(mes) {
    if(mes == "Marzo"){
        console.log("Marzo si existe"); // Imprime si encuentra "Marzo"
    }
});

// Uso de includes para comprobar si "Diciembre" está en el arreglo de meses
let resultado = meses.includes("Diciembre");
console.log(resultado); // Imprime false, "Diciembre" no está en el arreglo

// Uso de some para verificar si existe un producto llamado "Mouse" en el arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === "Mouse"
});
console.log(resultado); // Imprime true, "Mouse" está en el carrito

// Uso de reduce para calcular el total a pagar sumando los precios de todos los productos
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);
console.log(resultado); // Imprime el total de los precios

// Uso de filter para obtener productos cuyo precio es mayor a 400
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});
console.log(resultado); // Imprime los productos con precio mayor a 400

// Uso de filter para obtener un producto específico, en este caso "Laptop"
resultado = carrito.filter(function(producto) {
    return producto.nombre === "Laptop"
});
console.log(resultado); // Imprime los detalles de "Laptop"

// Uso de filter para excluir un producto específico, en este caso excluyendo "Laptop"
resultado = carrito.filter(function(producto) {
    return producto.nombre !== "Laptop"
});
console.log(resultado); // Imprime todos los productos excepto "Laptop"
