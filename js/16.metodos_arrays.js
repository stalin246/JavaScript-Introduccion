// Arreglos o arrays

// Creación de un arreglo de números
const num = [10, 20, 30, 40, 50];
console.table(num); // Muestra el arreglo original

// Agregar nuevos elementos de forma directa asignando valores a índices específicos
num[5] = 60; // Asigna el valor 60 al índice 5
num[6] = 80; // Asigna el valor 80 al índice 6
console.table(num); // Muestra el arreglo después de agregar dos elementos directamente

// Uso de push para agregar elementos al final del arreglo
num.push(100, 200, 300); // Agrega 100, 200, y 300 al final del arreglo
console.table(num); // Muestra el arreglo después de los push

// Uso de unshift para agregar elementos al inicio del arreglo
num.unshift(-40, -50, -600); // Agrega -40, -50, y -600 al inicio del arreglo
console.table(num); // Muestra el arreglo después de los unshift

// Creación de un arreglo de meses usando el constructor Array
const meses = new Array("enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio");
console.table(meses); // Muestra el arreglo de meses

// Eliminar el último elemento del arreglo usando pop
meses.pop(); // Elimina "Julio"
console.table(meses); // Muestra el arreglo después de eliminar el último elemento

// Eliminar el primer elemento del arreglo usando shift
meses.shift(); // Elimina "enero"
console.table(meses); // Muestra el arreglo después de eliminar el primer elemento

// Eliminar un elemento específico usando splice
meses.splice(2, 1); // Elimina 1 elemento en el índice 2, que es "Marzo"
console.table(meses); // Muestra el arreglo después de la eliminación con splice

// Creación de un nuevo arreglo usando el operador spread para no modificar el original
const nuevoArray = ["diciembre", ...meses]; // Crea un nuevo arreglo agregando "diciembre" al inicio y luego copia los elementos de 'meses'
console.table(nuevoArray); // Muestra el nuevo arreglo
