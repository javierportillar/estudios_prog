const sharp = require("sharp");
let a= './sashi.png'

sharp(a)
.resize(80)
.grayscale()
.toFile('./resized1.jpeg')