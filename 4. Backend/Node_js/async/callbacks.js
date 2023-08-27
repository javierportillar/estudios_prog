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

console.log("Iniciando proceso");
saludo("Javi", () => {
  despedida("Javi", () => {
    console.log("Finalizando proceso");
    saludo("Javi", () => {
      despedida("Javi", () => {});
    });
  });
});
