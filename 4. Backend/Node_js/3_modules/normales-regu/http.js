const http = require('http');
http.createServer(enrutamiento).listen(4200);

function enrutamiento(require,response){
    console.log('Nueva peticion');
    console.log(require.url);
    
    switch(require.url){
        case '/hola':
            let saludo = hola();
            response.write(saludo);
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

function hola(){
    return 'Hola bb que más pues'
}