const fs = require('fs');
const stream = require('stream');
const util = require('util')
let data='';

let rStream = fs.createReadStream(__dirname+'/input.txt')

rStream.setEncoding('utf-8')

const nombrexoy = stream.Transform; // Creación del stream doble

function Mayusculass(){
    nombrexoy.call(this)
}
util.inherits(Mayusculass,nombrexoy)

Mayusculass.prototype._transform = function(salida,codificador,callback){
    rtaMayus = salida.toString().toUpperCase();
    this.push(rtaMayus);
    callback();
}
let mayuculas = new Mayusculass();

rStream.pipe(mayuculas).pipe(process.stdout)

/* LECUTRA
rStream.on('data',(a)=>{
    data+=a; 
})
rStream.on('end',()=>{
    console.log(data);
})
*/

/* ESRITURA
process.stdout.write('Holi')
process.stdout.write('Como')
process.stdout.write('Estas')
*/
