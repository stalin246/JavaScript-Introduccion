// Cadenas de texto

// Declara una constante 'texto' y asigna una cadena de texto usando comillas dobles.
const texto = "Un dia tiene 24 horas"; 

// Declara otra constante 'producto2' con el valor "Laptop Lenovo".
const producto2 = "Laptop Lenovo"; 

// Declara una constante 'email' con un valor que representa un correo electrónico.
const email = "email@email.com"; 

// Método 'length' devuelve la longitud de la cadena.
console.log(texto.length); // Imprime 21, que es el número de caracteres en 'texto'.
console.log(producto2); // Imprime 'Laptop Lenovo'.

// Imprime el tipo de dato de 'producto2', que será 'string'.
console.log(typeof producto2); 
console.log(producto2); // Imprime 'Laptop Lenovo' de nuevo.

// Método 'indexOf' devuelve la posición del primer carácter del substring proporcionado.
console.log(texto.indexOf("dia")); // Retorna la posición de inicio de "dia" en 'texto'.
console.log(producto2.indexOf("lenovo")); // Esto retorna -1 porque la búsqueda es case-sensitive y "lenovo" está en minúsculas.
console.log(email.indexOf("@")); // Retorna la posición del carácter '@' en 'email'.

// Método 'includes' comprueba si el substring está presente en la cadena y devuelve true o false.
console.log(texto.includes("dia")); // Retorna true porque "dia" está en 'texto'.
console.log(producto2.includes("lenovo")); // Retorna false, caso sensible a mayúsculas.
console.log(producto2.includes("hora")); // Retorna false, "hora" no está en 'producto2'.

// Agregando más métodos útiles

// Método 'toUpperCase' convierte una cadena a mayúsculas.
console.log(texto.toUpperCase()); // "UN DIA TIENE 24 HORAS"

// Método 'toLowerCase' convierte una cadena a minúsculas.
console.log(texto.toLowerCase()); // "un dia tiene 24 horas"

// Método 'slice' extrae una sección de una cadena y devuelve una nueva cadena.
console.log(texto.slice(3, 6)); // "dia", extrae desde la posición 3 hasta la 5 (no incluye el 6).

// Método 'replace' reemplaza una ocurrencia del valor especificado por otro.
console.log(texto.replace("dia", "noche")); // "Un noche tiene 24 horas"

// Método 'split' divide una cadena en un array de cadenas basado en un delimitador especificado.
console.log(texto.split(" ")); // ["Un", "dia", "tiene", "24", "horas"]
