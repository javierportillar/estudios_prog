const express = require('express');
const {faker} = require('@faker-js/faker');

const router = express.Router();

router.get('/', (peticion, respuesta) => {//get recibe dos parametros (ruta) y fcn callback (respuesta)
  const productos =[];
  const {size}= peticion.query;
  const limit = size||10;

  for (let i = 0; i < limit; i++) {
    productos.push({
      id: i,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      imagen: faker.image.imageUrl()
    });
  }
  respuesta.json(productos);
});

router.post('/',(req,res)=>{
  const puta = req.body;
  res.json({
    mensaje:'creado',
    datos:puta,
  })
})

router.patch('/:id',(req,res)=>{
  const {id}= req.params;
  res.json({
    mensaje:'actualizado',
    data:puta,
    id
  })
})
router.delete('/:id',(req,res)=>{
  const {id}= req.params;
  const puta = req.body;
  res.json({
    mensaje:'eliminado',
    id
  })
})


router.get('/filter',(req,res)=>{
  res.send('Ruta products/filter')
})

router.get('/:iden', (request, response) => {
  const id = request.params.iden;
  const { iden } = request.params;
  response.json({
    id,
    iden,
    name: 'Producto2',
    price: 3000,
  });
});


module.exports = router;
