
// Metodos de propiedad
const reproductor = {
    //1er metodo depropiedad reproducir
    reproducir : function(id){
        console.log("Reproducionedo cancion");
        console.log(`Reproducinedo cancion con el ID: ${id}`);
    },
    //2do metodo de propiedad pausar

    pausar : function(){

        console.log(`Pausando...`)
    },

    crearPlaylist : function(nombre){
        console.log(`Creando el playlist: ${nombre}`);
    },
    reproduciendoPlaylist : function(nombre){
        console.log(`Reproduciendo el playlist: ${nombre}`);
    },

}

//Fuerad del objeto

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion: ${id}`)

}


console.log(reproductor);

reproductor.reproducir(2016);

reproductor.pausar();

reproductor.borrarCancion(20);

reproductor.crearPlaylist(`Rock`);
reproductor.reproduciendoPlaylist(`Rock y pop`);