const products = require('./products')
const categories = require('./categories.routes')
const users = require('./users.routes')
const express= require('express')


function routerApi(app){
  const mainRouter = express.Router();
  app.use('/v1',mainRouter);
  mainRouter.use('/p',products);
  mainRouter.use('/c',categories);
  mainRouter.use('/u',users);
}
module.exports = routerApi;
