
# Guía Completa de JavaScript

Esta guía de estudio contiene explicaciones detalladas y ejemplos de diferentes aspectos de JavaScript, desde fundamentos hasta características un poco avanzadas como la Programación Orientada a Objetos y el manejo de promesas.

## Variables, Let y Const
- **Variables**: Declaran espacio en memoria para almacenar datos que pueden cambiar durante la ejecución.
- **Let**: Declaración de variables con ámbito de bloque.
- **Const**: Declaración de variables cuyo valor no puede cambiar.

```javascript
let variableLet = 10;
const constante = "No cambia";
```

## Métodos de String
- Métodos para manipular cadenas: `length`, `indexOf`, `slice`, `toLowerCase`, `toUpperCase`.
```javascript
let texto = "Hola Mundo";
console.log(texto.toUpperCase()); // "HOLA MUNDO"
```

## Operadores Numéricos y Math
- **Operadores Numéricos**: `+`, `-`, `*`, `/`, `%`.
- **Math**: Funciones matemáticas como `Math.round()`, `Math.max()`.
```javascript
let suma = 5 + 3; // 8
let valorMax = Math.max(5, 10); // 10
```

## Concatenación y Template Strings
- Unir cadenas y variables: uso de Template Literals para una integración más limpia.
```javascript
let nombre = "Mundo";
console.log(`Hola ${nombre}`); // "Hola Mundo"
```

## Booleanos y Operadores Lógicos
- Representan verdadero o falso; operadores como `&&`, `||`, `!`.

## Objetos
- Estructuras para almacenar propiedades y métodos.
```javascript
let persona = {
    nombre: "Juan",
    edad: 30
};
```

## Modificación y Destructuring de Objetos
- Modificar propiedades o extraer datos de objetos.
```javascript
persona.edad = 31; // Modificación
let { nombre } = persona; // Destructuring
```

## Arrays y Métodos de Arrays
- Listas y sus métodos como `push()`, `pop()`, `filter()`.
```javascript
let numeros = [1, 2, 3];
numeros.push(4); // [1, 2, 3, 4]
```

## Funciones y Tipos de Funciones
- Funciones declaradas, expresadas, y arrow functions.
```javascript
function suma(a, b) {
    return a + b;
}
let sumar = (a, b) => a + b;
```

## Estructuras de Control: If, Switch, Loops
- Controlar el flujo del programa utilizando estructuras como `if`, `switch`, `for`, `while`.
```javascript
if (condicion) {
    // código
} else {
    // código
}
```

## Programación Orientada a Objetos (POO)
- Usar clases y objetos para modelar datos y comportamientos.
```javascript
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
```

## Async/Await y Fetch API
- Manejo de operaciones asíncronas con `async`, `await` y solicitudes de red con Fetch API.
```javascript
async function obtenerDatos() {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
```

## Notification API
- Interactuar con el sistema de notificaciones del navegador para enviar alertas al usuario.
```javascript
Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        new Notification('Hola Mundo');
    }
});
```

## Uso de JSON
- Trabajar con el formato JSON para intercambio de datos y configuraciones.
```javascript
let jsonData = '{"nombre": "Juan", "edad": 30}';
let obj = JSON.parse(jsonData);
console.log(obj.nombre); // "Juan"
```

