// Objeto 'producto' definido con tres propiedades
const producto = {
    nombreProducto: "Laptop Lenovo",  // Propiedad 'nombreProducto' con valor "Laptop Lenovo"
    precio: 300,                      // Propiedad 'precio' con valor 300
    disponible: true                  // Propiedad 'disponible' con valor booleano true
}

// Congelar el objeto
Object.freeze(producto); // Impide que se realicen cambios en las propiedades del objeto.
// Intento de cambiar una propiedad después de congelar el objeto
producto.precio = "NUEVO VALOR"; // No tiene efecto porque el objeto está congelado
console.log(producto); // Muestra que el precio sigue siendo 300

// Verificar si un objeto está congelado
console.log(Object.isFrozen(producto)); // Devuelve true, confirma que el objeto está congelado

// Sellar el objeto
Object.seal(producto); // Impide que se agreguen o eliminen propiedades, pero permite modificar las existentes.
// Intento de cambiar una propiedad después de sellar el objeto
producto.precio = "NUEVO VALOR"; // Cambia el valor porque 'seal' permite la modificación de propiedades existentes
console.log(producto); // Muestra que el precio ahora es "NUEVO VALOR"

//Nota es importante descomentar ya sea freeze o seal para que surtan los cambios
