
// Fetch Api
// Función asíncrona que recupera datos de empleados desde un archivo JSON
async function obtenerEmpleados() {
    const archivo = 'empleados.json'; // Ruta del archivo JSON

    // Usando fetch para obtener los datos del archivo JSON
    const resultado = await fetch(archivo); // Realiza la solicitud HTTP GET para el archivo JSON
    const datos = await resultado.json(); // Convierte la respuesta del servidor de formato JSON a un objeto JavaScript
    console.log(datos); // Muestra los datos obtenidos en la consola
}

// Llamar a la función para ejecutarla
obtenerEmpleados();
