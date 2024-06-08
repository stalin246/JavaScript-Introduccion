// Async / await

// Definicion de una funcion que devuelve una promesa
function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descragando clientes..... espere....');

        setTimeout(()=>{
            resolve('Los clienntes fueron descargados');
        }, 5000);

    })
}

// Para usar AsyncAwait se creara la funcion asincrona
async function app() { // Async al inicio de la funcion
    // console.log('app');

    try {
        const resultado = await descargarNuevosClientes(); // 'await' pausa la ejecución hasta que la Promesa se resuelva
        console.log(resultado)// Muestra el resultado de la promesa
        
    } catch (error) {
        console.log(error); // Maneja cualquier error que pueda ocurrir durante la espera
    }
}
app();

console.log('Este codigo no se bloquea'); // Lo demas sigue en ejecucion


// Froma de usar timeout
// setTimeout(() => {
//     console.log('Set timeout')
// }, 5000); Se ejecutara despues de 5 segundos