// Definición del arreglo 'carrito' con varios objetos que representan productos
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

//ForEach--------------------------------------------
// Uso de forEach para ejecutar un console.log por cada elemento del arreglo 'carrito'
carrito.forEach(function(producto) {
    console.log(`Una vez por cada elemento`); // Se ejecuta una vez por cada elemento en 'carrito'
});

// Uso de Arrow Function con forEach para imprimir cada objeto del carrito
carrito.forEach(objeto => console.log(objeto)); // Imprime cada objeto en el carrito

// Uso de Arrow Function con forEach para imprimir el nombre de cada producto en el carrito
carrito.forEach(objeto => console.log(objeto.nombre)); // Imprime el nombre de cada producto


//Map--------------------------------------------
// Uso de map para imprimir el precio de cada objeto en 'carrito'
carrito.map(objeto => console.log(objeto.precio)); // Imprime el precio de cada objeto, pero no crea un arreglo

// Creación de un nuevo arreglo 'arreglo2' con los nombres de los productos usando map
const arreglo2 = carrito.map(objeto => objeto.nombre); // Crea un nuevo arreglo con los nombres de los productos
console.log(arreglo2); // Imprime el nuevo arreglo con los nombres

// Creación de un nuevo arreglo 'arreglo3' con cadenas que combinan nombre y precio de cada producto
const arreglo3 = carrito.map(objeto => `${objeto.nombre} - ${objeto.precio}`); // Crea un nuevo arreglo con nombre y precio
console.log(arreglo3); // Imprime el nuevo arreglo combinando nombre y precio
