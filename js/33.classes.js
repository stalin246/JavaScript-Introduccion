// Classes

// Definición de la clase Producto
class Producto {
    // Constructor de la clase, donde se inicializan las instancias
    constructor(nombre, precio) { // Parámetros para cada instancia creada
        this.nombre = nombre; // Propiedad 'nombre' del objeto
        this.precio = precio; // Propiedad 'precio' del objeto
    }
    // Método de la clase Producto para formatear la salida del producto
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

// Clase Valor para manejar valores separadamente (aunque su utilidad en este contexto no está clara)
class Valor {
    constructor(valores) {
        this.valores = valores; // Almacena el valor pasado al constructor
    }
}

// Creación de instancias de Producto
const producto2 = new Producto("Celular LG", 600); // Nuevo producto LG
const producto3 = new Producto("Celular Nokia", 600); // Nuevo producto Nokia
const valores = new Valor(500); // Nueva instancia de Valor

// Salidas en consola
console.log(producto2); // Muestra los detalles del producto2
console.log(producto3); // Muestra los detalles del producto3
console.log(valores); // Muestra los detalles de la instancia 'valores'




