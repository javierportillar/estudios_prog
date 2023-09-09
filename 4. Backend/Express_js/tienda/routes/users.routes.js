const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  const {limit,offset} = req.query; //Se recoge a partir de query enves de params
  if(limit && offset){
    res.json({
      limit,offset
    })
  }else{
    res.send('No hay Parametros')
  }
})

router.get('/:id',(req,res)=>{
  const {id}= req.params;
  res.json({
    id,
    name: 'Luis',
    age: 23,
    role: 'Backend Engineer',
    name: 'Paula',
    age: 25,
    role: 'Product Design',
  });
})
module.exports = router;
