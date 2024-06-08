// Modificar objetos

// Define un objeto 'producto' con propiedades iniciales.
const producto = {
    nombreProducto: "Laptop Lenovo",  // Propiedad 'nombreProducto' con valor "Laptop Lenovo"
    precio: 300,                      // Propiedad 'precio' con valor 300
    disponible: true                  // Propiedad 'disponible' con valor booleano true
}
console.log(producto); // Imprime el objeto original en la consola

// Agregar nuevas propiedades y modificar una existente en una sola línea.
producto.imagen = "imagen.jpg"; producto.precio = 350; // Agrega 'imagen' y modifica 'precio'

// Eliminar propiedades y agregar otra en una sola línea.
delete producto.disponible; producto.color = "negro"; // Elimina 'disponible', agrega 'color'

console.log(producto); // Imprime el objeto modificado en la consola

// Uso de Object.assign() para actualizar y agregar propiedades.
Object.assign(producto, { almacenamiento: "256GB", precio: 400 });

// Uso del operador spread para combinar objetos.
const updatedProducto = { ...producto, peso: "1.5kg", precio: 450 };

console.log(updatedProducto); // Imprime el objeto actualizado con nuevas propiedades y modificado 'precio'
