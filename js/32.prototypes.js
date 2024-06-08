// Prototypes
// Definición del constructor de Producto
function Producto(nombre, precio) {
    this.nombre = nombre; // Propiedad nombre del objeto
    this.precio = precio; // Propiedad precio del objeto
}

// Agregando un método al prototype de Producto
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    // Este método retorna un string formateado mostrando el nombre y precio del producto
}

// Creación de una instancia de Producto
const producto2 = new Producto("Celular LG", 600);

// Llamada al método formatearProducto a través de la instancia producto2
console.log(producto2.formatearProducto());
// Imprime: "El producto Celular LG tiene un precio de: $ 600"

