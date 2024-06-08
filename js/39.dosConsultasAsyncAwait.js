// Async / await con mas consultas

// En este contexto clientes y pedidos no dependen una de otra
// Deben ejecutarse independientemente sin bloquear la ejecucion de la otra

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes..... espere....');

        setTimeout(()=>{
            resolve('Los clientes fueron descargados');
        }, 5000);

    })
}

function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log('Descagando pedidos..... espere....');

        setTimeout(()=>{
            resolve('Los pedidos fueron descargados');
        }, 3000);

    })
}
// Para usar AsyncAwait se creara la funcion
async function app() { // Async al inicio de la funcion
    // console.log('app');

    try {

        // Usando esta forma dependera de que la 1rea se ejcute para luego seguir la otra---------------------------------
        // const clientes = await descargarNuevosClientes();  //'await' pausa la ejecución hasta que la Promesa se resuelva
        // const pedidos = await descargarUltimosPedidos(); //'await' pausa la ejecución hasta que la Promesa se resuelva
        // console.log(clientes);
        // console.log(pedidos);

        //------------------------------------------------------------------------------------------------------------------

        //Para corregir eso es lo siguiente:
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();

console.log('Este codigo no se bloquea'); // Lo demas sigue en ejecucion


// Froma de usar timeout
// setTimeout(() => {
//     console.log('Set timeout')
// }, 5000); Se ejecutara despues de 5 segundos