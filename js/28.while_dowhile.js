// Bucle While   

// Inicialización del índice
let i = 0;

// Bucle while que continúa mientras i sea menor que 10
while(i < 10) {
    console.log(i); // Imprime el valor actual de i
    i++; // Incrementa i en 1 en cada iteración
}

// Inicialización de otro índice para demostrar pares e impares
let j = 1;

// Bucle while que evalúa números del 1 al 10 para determinar si son pares o impares
while(j <= 10) {
    if(j % 2 === 0) {
        console.log(`El número es ${j} par`); // Imprime si j es par
    } else {
        console.log(`El número es ${j} impar`); // Imprime si j es impar
    }
    j++; // Incrementa j en cada iteración
}

// Ejemplo de iteración sobre un arreglo de objetos usando while
const carrito = [
    {nombre: "Laptop", precio: 400},
    {nombre: "Celular", precio: 500},
    {nombre: "Televisor", precio: 800},
    {nombre: "Teclado", precio: 600},
    {nombre: "Mouse", precio: 200},
    {nombre: "Monitor", precio: 400},
    {nombre: "USB", precio: 40},
    {nombre: "Parlante", precio: 80}
];

let k = 0; // Índice para iterar sobre el carrito

// Bucle while para iterar sobre el arreglo 'carrito'
while(k < carrito.length) {
    console.log(carrito[k].nombre); // Imprime el nombre de cada producto en el carrito
    k++; // Incrementa k en cada iteración
}

 // Bucle Do While
// Inicialización del índice para do while
let h = 0; // Índice empieza en 0

// Bucle do...while que primero ejecuta el código una vez y luego verifica la condición
do {
    console.log(`Usando Do While ${h}`); // Imprime el valor actual de h
    h++; // Incrementa h en cada iteración
} while(h < 10); // Continúa mientras h sea menor que 10

