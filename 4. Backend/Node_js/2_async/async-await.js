async function saludo(nombre, elCallback) {
  return new Promise((resuelta, rechazada) => {
    setTimeout(() => {
      console.log("HOLA " + nombre);
      resuelta(nombre);
    }, 2000);
  });
}

async function despedida(nombre, otroCallback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios " + nombre);
      resolve();
    }, 1000);
  });
}
async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("CallBack Hablar");
      resolve(nombre);
    }, 1500);
  });
}
async function error() {
  return new Promise((resolve, reject) => {
    reject("Hay un error");
  });
}
async function main(){
    let nombre='Javi'
    await saludo(nombre);
    await hablar();
    await hablar();
    await despedida(nombre);
    console.log('Finalizando');
}
console.log('Empezando');
main();
