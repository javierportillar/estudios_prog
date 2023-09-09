const express = require('express');
// const {faker} = require('@faker-js/faker');
const router = express.Router();

router.get('/:cid/products/:pid', (req, res) => {
  const { cid, pid } = req.params;
  res.json({
    cid,
    pid,
  });
});

router.get('/', (reg, res) => {
  res.json({
    blue: true,
    green: false,
    blue: false,
    red: true,
  });
});

router.get('/id', (reg, res) => {
  const { id } = req.params;
  res.json({
    id,
    blue: true,
    green: false,
  });
});

module.exports = router;
