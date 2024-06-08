// Notification Api


// Ejemplo de las acciones en un boton:
//Creamos la variable referenciando el id del boton.
const boton1 = document.querySelector('#boton1');
//Creamos el Eventos al dar clic en la variable boton con addEventListener
boton1.addEventListener('click', function(){
    console.log('diste click');
    // console.log(3 + 3);

});



// Usando ya el Notification Api y garatnizar los permisos de notificacion
const boton2 = document.querySelector('#boton2');
boton2.addEventListener('click', ()=>{
    Notification.requestPermission() // Aparecera en el navegador si queremos dar permiso a notificaciones, se maneja directo la promesa por lo cual no se la invoca
    .then(resultado => console.log('El resultado es', resultado)) 
        //La mayoria de apis de JavaScript usan promesas, en este caso las usaremos para poder enviar notificaciones

});


// Aqui si el permiso es garantizado se ejecutara la Notificacion Api
if(Notification.permission === 'granted') {
    new Notification('Esta es una notificacion :-)', { // Titulo de la notificacion
        icon: 'img/DAL.PNG', // palabra reservada de Notification
        body: 'Introduccion a JavaScript'
    })
}




// const boton1 = document.querySelector('#boton1'); // Selecciona el botón por su ID
// boton1.addEventListener('click', () => console.log('diste click')); // Registra un evento de click que imprime un mensaje en la consola

// const boton2 = document.querySelector('#boton2'); // Selecciona el segundo botón por su ID
// boton2.addEventListener('click', () => {
//     Notification.requestPermission().then(permission => { // Solicita permiso para enviar notificaciones
//         if (permission === 'granted') { // Verifica si el permiso fue concedido
//             const notification = new Notification('Notificación Activada', { // Crea y muestra una notificación
//                 body: 'Gracias por activar las notificaciones.', // Cuerpo de la notificación
//                 icon: 'img/icon.png' // Icono de la notificación
//             });
//             notification.onclick = () => window.open('https://example.com'); // Agrega un evento de clic a la notificación que abre una URL
//         }
//     });
// });
