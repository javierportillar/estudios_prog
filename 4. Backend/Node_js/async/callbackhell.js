function saludo(nombre, elCallback) {
  // console.log('Funcion asíncrona');
  setTimeout(function () {
    console.log("Hola " + nombre);
    elCallback(nombre);
  }, 1500);
}
function despedida(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}
function hablar(cbHablar) {
  setTimeout(() => {
    console.log("CallBack Hablar");
    cbHablar();
  }, 1500);
}
function conversacion(nombre,nVeces,cback){
    console.log(nVeces);
    if(nVeces>0||nVeces==0){
        hablar(()=>{
            nVeces--;
            conversacion(nombre,nVeces,cback);
        })
    }else{
        despedida(nombre,cback);
    }
}

console.log("Iniciando proceso");
hablar(function(nombre){
    conversacion(nombre,2,()=>{
        console.log('Proceso terminado');
    })
})

// saludo("Javi", () => {
//   hablar(function () {
//       hablar(function () {
//       hablar(function () {
//         despedida("Javi", () => {
//             console.log("Finalizando proceso");
//       });
//     });
//   });
// });
// });


// saludo("Javi", () => {
// despedida("Javi", () => {});
// });
