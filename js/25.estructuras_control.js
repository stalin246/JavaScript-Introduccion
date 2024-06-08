// Estructuras de control en JavaScript

// Definición de variable 'puntaje'
const puntaje = 100;

// Estructura if con igualdad estricta
if (puntaje === 100) {
    console.log(`El puntaje es cien`); // Se ejecuta porque el puntaje es exactamente 100
} else {
    console.log(`No es igual`); // No se ejecuta
}

// Definición de variable 'puntaje2'
const puntaje2 = 101;

// Estructura if con igualdad estricta
if (puntaje2 === 100) {
    console.log(`El puntaje es cien`); // No se ejecuta porque puntaje2 es 101
} else {
    console.log(`No es igual`); // Se ejecuta
}

// Estructura if con desigualdad
const puntaje3 = 101;

if (puntaje3 !== 200) {
    console.log(`No es igual`); // Se ejecuta porque puntaje3 no es igual a 200
} else {
    console.log(`Si es igual`); // No se ejecuta
}

// Estructura de control con comparación de mayor que (>)
const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log(`El usuario puede pagar`); // Se ejecuta porque el efectivo es mayor que el carrito
} else {
    console.log(`Fondos insuficientes`); // No se ejecuta
}

// Estructuras de control para roles de usuario
const rol = "ADMINISTRADOR"; // Posibles valores: ADMINISTRADOR, EDITOR, VISITANTE

if (rol === "ADMINISTRADOR") {
    console.log(`Acceso a todo el sistema`); // Se ejecuta para el rol ADMINISTRADOR
} else if (rol === "EDITOR") {
    console.log(`Puedes entrar al sistema según tu rol`); // Se ejecutaría para el rol EDITOR
} else {
    console.log(`No tienes acceso`); // Se ejecutaría si no es ADMINISTRADOR ni EDITOR
}
