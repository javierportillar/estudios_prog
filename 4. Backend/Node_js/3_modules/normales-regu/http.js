const http = require('http');

const enrutamiento=(require,response)=>{
    console.log('Nueva peticion');
    console.log(require.url);
    
    switch(require.url){
        case '/hola':
            response.write('Ay no, miremos como captamos todo esto haha');
            response.end();
            break;
            case '/':
                response.write('Escribiendo en servidor http con NodeJs');
                response.end();
            break;
            default:
                response.write('Error 404');
                response.end();
    }
}
console.log('Escuchando en el puerto 42000');

http.createServer(enrutamiento).listen(4200);