const p = require('process')

process.on('exit', ()=>{ //Una vez ejecutado, que sea sincrono será ejecutado en nodo principal porque está acabando.
    console.log('Termianado');
});
process.on('beforeExit', ()=>{
    console.log('El proceso va a terminar');
});

process.on('uncaughtException',(error,origen)=>{
    console.error('Se nos olvido capturar algun error');
    console.error(error);
}) //

funcionnoExiste();
// process.on('unhandledRejection') //Para promesas rechazadas que no tienen catch 