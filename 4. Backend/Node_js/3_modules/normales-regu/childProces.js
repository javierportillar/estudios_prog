const {exec, spawn}= require('child_process');

/*
exec('node ./3_modules/fs.js',(error,standarOut,standarError)=>{
    if (error) {
        console.error(error)
        return false;
    }
    console.log((standarOut));
})
*/

let proceso = spawn('ls',['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato)=>{
    console.log('Terminó el proceso?');
    console.log(proceso.killed);
    console.log(dato.toString());
})

proceso.on('exit',()=>{
    console.log('Terminó el proceso?');
    console.log('Terminado');
})