// Definición de la clase base Producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;  // Propiedad 'nombre' de la instancia
        this.precio = precio;  // Propiedad 'precio' de la instancia
    }
    // Método para formatear la salida del producto
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

// Definición de la clase Libro que extiende Producto
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio); // Llama al constructor de la clase padre para inicializar 'nombre' y 'precio'
        this.isbn = isbn;      // Propiedad adicional específica de Libro
    }
    // Sobrescritura del método formatearProducto para incluir ISBN
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
        // Utiliza 'super' para llamar al método formatearProducto de la clase padre y añade información del ISBN
    }
}

// Creación de una instancia de Libro
const libro = new Libro("JavaScript la Revolución", 150, "45641546565");
console.log(libro.formatearProducto()); // Salida: "El producto JavaScript la Revolución tiene un precio de: $ 150 y su ISBN es 45641546565"
