
// For Loops

for( let i = 0; i < 10; i++){
    console.log(i);


}

for( let i = 1; i < 100; i++){
    if( i % 2 ===0){
        console.log(`El numero ${i} es PAR`)


    }else {
        console.log(`El numero ${i} es IMPAR`)

    }


    
}


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


for(let i = 0; i < carrito.length; i++) {

    console.log(carrito[i]);
    // console.log(carrito[i].nombre);
    

}
