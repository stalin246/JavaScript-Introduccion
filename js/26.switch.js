// Definición de la variable 'metodoPago'
const metodoPago = "efectivo";

// Uso de switch para manejar diferentes métodos de pago
switch (metodoPago) {
    case `tarjeta`:
        console.log(`Pagaste con tarjeta`);
        break; // Añadir break para evitar que la ejecución continue con los siguientes casos

    case `cheque`:
        console.log(`Pagaste con cheque`);
        break; // Añadir break para prevenir la ejecución en cascada

    case `efectivo`:
        console.log(`Pagaste con efectivo`);
        break; // Correctamente pone un break para detener más ejecuciones

    default:
        console.log(`Aún no has pagado`);
        break; // Break opcional aquí, sirve para mantener la consistencia
}

