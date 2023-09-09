const express = require('express');
const {faker} = require('@faker-js/faker');
const routerApi = require('./routes/index')

const app = express(); //Declaración de app como un método - función express
const port = 3000;

app.listen(port, () => {
  //Que escuche en ese puerto (puerto a utilizar) y que hacer después de ello dentro de {}
  console.log('Puerto:' + port);
});

routerApi(app);



/*
app.get('/home',(peticion,respuesta)=>{
  respuesta.send('Servidor en home')
})
app.get('/producto',(peticion,respuesta)=>{
  respuesta.json({
    name:'Producto1',
    price:2000
  }); // Se puede jugar con la respuesta, normalmente se manda json
});   //Se usa para comunicar datos a clientes de front end que renderizan la información "Info de la API"
*/
