// Creación de una nueva Promesa
const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true; // Simulación de autenticación

    if (auth) {
        resolve(`Usuario autenticado`); // La Promesa se resuelve exitosamente
    } else {
        reject(`No se pudo iniciar sesión`); // La Promesa es rechazada
    }
});

// Visualización del estado y el resultado de la Promesa
console.log(usuarioAutenticado); // Muestra el estado de la Promesa, que puede ser pendiente, resuelta o rechazada

// Manejo de la Promesa usando then y catch
usuarioAutenticado
    .then((resultado) => console.log(resultado)) // Maneja el caso exitoso
    .catch((error) => console.log(error)); // Maneja el caso de error



// En Promises existen 3 valores:
// 1. Pending: No se ha cumplido pero tampoco rechazado
// 2. Folfilled: Ya se cumplio
// 3. Rejected: Se ha rechazado o no se pudo cumplir