function suma(a,b){
    return a+b;
}

function call(a,b,callback){
    return callback(a,b);
}

console.log(call(2,2,suma));

setTimeout(function(){console.log('Hola mundo');},5000)

function saludo(nombre){
    console.log(`Hola ${nombre}`)
}

setTimeout(saludo,2000,'Javier')

