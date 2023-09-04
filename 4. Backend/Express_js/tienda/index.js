const express = require('express');

const app = express(); //Declaración de app como un método - función express
const port = 3000;

app.listen(port, () => {
  //Que escuche en ese puerto (puerto a utilizar) y que hacer después de ello dentro de {}
  console.log('Puerto:' + port);
});
app.get('/products', (peticion, respuesta) => {
  //get recibe dos parametros (ruta) y fcn callback (respuesta)
  respuesta.json([
    {
      name: 'Producto1',
      price: 2000,
    },
    {
      name: 'Producto2',
      price: 3000,
    },
  ]);
});

app.get('/products/:iden', (request, response) => {
  const id = request.params.iden;
  const { iden } = request.params;
  response.json({
    id,
    iden,
    name: 'Producto2',
    price: 3000,
  });
});

app.get('/categories/:cid/products/:pid', (req, res) => {
  const { cid, pid } = req.params;
  res.json({
    cid,
    pid,
  });
});

app.get('/categories', (reg, res) => {
  res.json({
    blue: true,
    green: false,
    blue: false,
    red: true,
  });
});

app.get('/categories/id', (reg, res) => {
  const { id } = req.params;
  res.json({
    id,
    blue: true,
    green: false,
  });
});

app.get(' /people', (req, res) => {
  res.json({
    name: 'Luis',
    age: 23,
    role: 'Backend Engineer',
    name: 'Paula',
    age: 25,
    role: 'Product Design',
  });
});

app.get('/people/:id', (reg, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Luis',
    age: 23,
    role: 'Backend Engineer',
  });
});

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
