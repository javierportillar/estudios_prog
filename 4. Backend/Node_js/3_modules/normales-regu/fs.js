let ruta = `${__dirname}/texto.txt`;
let ruta2 = `${__dirname}/texto1.txt`;
const fs = require("fs").promises;

async function leer(ruta) {
  const data = await fs.readFile(ruta);
  let dataSt = data.toString();
  console.log(dataSt);
  return dataSt;
}

async function escribir(ruta,texto){
  const data = await fs.writeFile(ruta,texto);
  return data;
}

async function eliminar(ruta){
  const data = await fs.unlink(ruta);
  return data;
}
leer(ruta);
escribir(ruta2,'Soy un nuevo archivo de texto');
eliminar(ruta2)

