const os = require('os');
const SIZE= 1024;

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
console.log(os.freemem());
console.log(Gb(os.totalmem()));
console.log(os.homedir()); //Directorio de archivo locales
console.log(os.tmpdir()); //Directorio de archivo temporal
console.log(os.hostname()); //Nombre del computador

function kb(bytes){
    return bytes/SIZE
}
function mb(bytes){
    return kb(bytes)/SIZE
}
function Gb(bytes){
    return mb(bytes)/SIZE
}
// console.log(os.constants);
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(os.networkInterfaces()); //Interfaces de red
