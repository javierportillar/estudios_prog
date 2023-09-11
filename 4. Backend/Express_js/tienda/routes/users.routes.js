const express = require('express');
const router = express.Router();
const faker = require('@faker-js/faker')

router.get('/',(req,res)=>{
  const usuarios=[];
  const {limit,offset} = req.query; //Se recoge a partir de query enves de params
  if(limit && offset){
    res.json({
      limit,offset
    })
  }else{
    res.send('No hay Parametros')
  }
  const limUsuarios=10;
  for (let i = 0; i < limUsuarios; i++) {
    usuarios.push({
      name:faker.name.firstName(),
      lastName:faker.name.lastName(),
    })
    res.json(usuarios);
  }
})

router.get('/:id',(req,res)=>{
  const {id}= req.params;
  res.json({
    id,
    name:faker.name.firstName(),
    lastName:faker.name.lastName(),
  });
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
module.exports = router;
