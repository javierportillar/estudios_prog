let suma = 0;
let suma1 = 0;
console.time("ciclo_for");
for (let i = 0; i < 999999; i++) {
  suma = suma + i;
}
console.timeEnd("ciclo_for");

console.time("ciclo_for2");

for (let i = 0; i < 99999999; i++) {
  suma1 = suma1 + i;
}
console.timeEnd("ciclo_for2");


console.time("Asyync");
asincrox().then(() => {
console.log('Terminado async');
  console.timeEnd("Asyync");
});

function asincrox() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("probando el async, aquí está ocurriendo lo chido asincrono");
      resolve();
    });
  });
}
