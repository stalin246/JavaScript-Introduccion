// Objeto 'producto' con propiedades básicas
const producto = {
    nombreProducto: "Laptop Lenovo",  // Propiedad 'nombreProducto' con valor "Laptop Lenovo"
    precio: 300,                      // Propiedad 'precio' con valor 300
    disponible: true                  // Propiedad 'disponible' con valor booleano true
}

// Objeto 'medidas' con propiedades de dimensiones físicas
const medidas = {
    peso: "6kg",     // Propiedad 'peso' con valor "6kg"
    medidas: "1m"    // Propiedad 'medidas' con valor "1m"
}

// Creación de un nuevo objeto 'nuevoProducto' combinando 'producto' y 'medidas'
const nuevoProducto = {...producto, ...medidas};
// El operador de propagación '...' toma todas las propiedades de cada objeto y las combina en uno nuevo.

// Imprime el objeto original 'producto' en la consola
console.log(producto); // Muestra {nombreProducto: "Laptop Lenovo", precio: 300, disponible: true}

// Imprime el nuevo objeto 'nuevoProducto' que combina las propiedades de 'producto' y 'medidas'
console.log(nuevoProducto); // Muestra {nombreProducto: "Laptop Lenovo", precio: 300, disponible: true, peso: "6kg", medidas: "1m"}
