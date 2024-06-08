// Objetos en JavaScript

// Se ha comentado una posible forma de declarar cada propiedad por separado.
// const nombreProducto = "Laptop Lenovo";
// const precio = 900;
// const disponible = true;

// Define un objeto 'producto' con propiedades para nombre, precio y disponibilidad.
const producto = {
    nombreProducto : "Laptop Lenovo",  // Propiedad 'nombreProducto' con valor "Laptop Lenovo"
    precio: 300,                      // Propiedad 'precio' con valor 300
    disponible: true                  // Propiedad 'disponible' con valor booleano true
}

// Imprime todo el objeto 'producto' en consola.
console.log(producto); // Muestra {nombreProducto: "Laptop Lenovo", precio: 300, disponible: true}

// Accede a la propiedad 'precio' del objeto 'producto' y la imprime en consola.
console.log(producto.precio); // Muestra 300

// Accede a la propiedad 'nombreProducto' del objeto 'producto' y la imprime en consola.
console.log(producto.nombreProducto); // Muestra "Laptop Lenovo"

// Accede a la propiedad 'disponible' del objeto 'producto' y la imprime en consola.
console.log(producto.disponible); // Muestra true

// Acceso alternativo a las propiedades mediante notación de corchetes, comentado aquí.
// console.log(producto["precio"]); // También mostraría 300 si se descomenta
