// Objeto 'producto' definido con tres propiedades
const producto = {
    nombreProducto: "Laptop Lenovo",  // Propiedad 'nombreProducto' con valor "Laptop Lenovo"
    precio: 300,                      // Propiedad 'precio' con valor 300
    disponible: true                  // Propiedad 'disponible' con valor booleano true
}

// Ejemplo de cómo se accedía a las propiedades antes de ES6
// const precioProducto = producto.precio;  // Accede al precio de 'producto'
// const nombre_producto = producto.nombreProducto;  // Accede al nombre de 'producto'
// console.log(precioProducto);  // Imprime el precio en consola
// console.log(nombreProducto);  // Imprime el nombre en consola

// Destructuración de objetos: extrae directamente las propiedades del objeto en variables
const {precio, nombreProducto} = producto;
// Aquí se desestructuran 'precio' y 'nombreProducto' del objeto 'producto'
// asignando sus valores correspondientes a las variables 'precio' y 'nombreProducto'.

console.log(precio);           // Imprime 300
console.log(nombreProducto);   // Imprime "Laptop Lenovo"
