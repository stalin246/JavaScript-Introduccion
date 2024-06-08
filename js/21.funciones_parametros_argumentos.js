// Funciones con parámetros y argumentos

// Definición de la función 'sumar' con parámetros 'num1' y 'num2'
function sumar(num1, num2) { // 'num1' y 'num2' son parámetros que la función espera recibir
    console.log(num1 + num2); // Suma los parámetros y muestra el resultado en la consola
}

// Llamada a la función 'sumar' con diferentes conjuntos de argumentos
sumar(30, 30); // 60: Estos números son argumentos pasados a la función
sumar(30, 10); // 40: Otro conjunto de argumentos
sumar(3, 30);  // 33: Un tercer conjunto de argumentos

// Función expresada 'resta' con parámetros 'n1' y 'n2'
const resta = function(n1, n2) { // 'n1' y 'n2' son parámetros para la función de resta
    console.log(n1 - n2); // Resta 'n1' y 'n2', y muestra el resultado en la consola
}
resta(20, 10); // 10: Argumentos pasados para restar 20 menos 10

// Definición de la función 'suma2' con valores predeterminados para sus parámetros
function suma2(num1 = 0, num2 = 0) { // 'num1' y 'num2' tienen valores por defecto de 0
    console.log(num1 + num2); // Suma los valores y muestra el resultado; si no se pasan argumentos, el resultado será 0
}
suma2(100); // 100: Solo se proporciona un argumento, por lo que 'num2' utiliza su valor por defecto de 0
suma2();    // 0: No se proporcionan argumentos, ambos parámetros utilizan sus valores por defecto

