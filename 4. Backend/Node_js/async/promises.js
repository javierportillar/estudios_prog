function saludo(nombre, elCallback) {
  return new Promise((resuelta, rechazada) => {
    setTimeout(() => {
      console.log("HOLA " + nombre);
      resuelta(nombre);
    }, 1000);
  });
}

function despedida(nombre, otroCallback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios " + nombre);
      resolve();
    }, 1000);
  });
}
function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("CallBack Hablar");
      resolve(nombre);
    }, 1500);
  });
}
function error() {
  return new Promise((resolve, reject) => {
    reject("Hay un error");
  });
}

console.log("Iniciando P");
saludo("Javi")
  .then(hablar)
  .then((nombre) => {
    return despedida(nombre);
  })
  .then((nombre) => {
    console.log("Se terminó el proceso");
  })
  .then(error)
  .catch((error) => {
    console.error("hey guacho una promesa da reject");
    console.error(error);
  });
