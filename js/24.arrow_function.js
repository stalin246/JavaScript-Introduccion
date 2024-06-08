// Arrow Functions, una forma concisa de escribir funciones en JavaScript

// Expresión de función tradicional
const sumar2 = function(n1, n2) {
    console.log(n1 + n2); // Realiza la suma y muestra el resultado
}
sumar2(5, 10); // Invoca la función sumar2

// Ejemplo de arrow function simplificada para realizar una suma
const suma3 = (n1, n2) => console.log(n1 + n2);
suma3(10, 10); // Invoca la función suma3

// Ejemplo de arrow function básica para mostrar aprendizaje de tecnología
const aprendiendo = tecnologia => {
    console.log(`Aprendiendo ${tecnologia}`); // Imprime qué tecnología se está aprendiendo
}
aprendiendo(`JavaScript`);

// Arrow function simplificada cuando hay un solo parámetro
const aprendiendo2 = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo2(`JavaScript2`);

// Arreglos o arrays

// Arreglo de meses
const meses = ["enero", "Febrero", "Marzo", "Abril"];

// Arreglo de objetos representando productos en un carrito de compras
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

// Uso de arrow function en forEach para verificar la existencia de "Marzo"
meses.forEach(mes => {
    if(mes == "Marzo"){
        console.log("Marzo si existe"); // Imprime si encuentra "Marzo"
    }
});

// Uso de arrow function en some para verificar si un producto 'Mouse' está en el carrito
let resultado = carrito.some(producto => producto.nombre === "Mouse");
console.log(resultado); // Muestra true si encuentra 'Mouse'

// Uso de reduce con arrow function para calcular el total a pagar sumando los precios de todos los productos
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado); // Imprime el total de los precios

// Uso de filter con arrow function para obtener productos cuyo precio es mayor a 400
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado); // Imprime los productos con precio mayor a 400

// Uso de filter con arrow function para obtener un producto específico, en este caso "Laptop"
resultado = carrito.filter(producto => producto.nombre === "Laptop");
console.log(resultado); // Imprime los detalles de "Laptop"
