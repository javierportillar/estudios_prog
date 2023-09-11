const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const puta = req.body;
  res.json({
    mensaje: "creado",
    datos: puta,
  });
});

module.exports = router;
