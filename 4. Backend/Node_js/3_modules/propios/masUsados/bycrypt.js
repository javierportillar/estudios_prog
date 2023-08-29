const bycript = require("bcrypt");
const password = "Sashita123."; //Peticion hhtp o entrada del usuario

bycript.hash(password, 5, (error, hash) => {
  //
  console.log(hash);
  bycript.compare('password', hash, (error, resultado) => {
    console.log(error);
    console.log(resultado);
  });
});
