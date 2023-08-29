// FUNCIÓN A TRABAJAR QUE PUEDE DAR ALGÚN FALLO
function asincrona(callback){
    setTimeout(()=>{
        try{
            let a= 3+z
            callback(null, a)
        }catch(e){
            callback(e)
        }
    },1000)
}

//MANEJO DEL ERROR 
asincrona((error,dato)=>{
    if (error){
        console.error('Hay un error, el error ESS');
        console.error(error);
        return false;
    }
    console.log('Todo está bien, el dato es: ',dato );
});
