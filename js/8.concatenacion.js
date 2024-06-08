// Concatenación de cadenas

// Declara una constante 'nombre' con el valor "Stalin".
const nombre = "Stalin";

// Declara una constante 'email' con un valor que representa un correo electrónico.
const email = "email@email.com";

// Concatena 'nombre' y 'email' utilizando el operador de suma.
console.log(nombre + email); // Muestra "Stalinemail@email.com" en la consola.

// Concatena cadenas de texto y variables para formar una cadena más descriptiva.
console.log("Nombre Cliente: " + nombre + " Email: " + email); // Muestra "Nombre Cliente: Stalin Email: email@email.com" en la consola.

// Template Strings - Utilizando literales de plantilla (template literals)

// Utiliza template strings para incorporar variables dentro de una cadena más legible.
console.log(`Nombre cliente: ${nombre} Email: ${email}`); // Muestra "Nombre cliente: Stalin Email: email@email.com" en la consola.
