const products = require('./products')
const categories = require('./categories.routes')
const users = require('./users.routes')


function routerApi(app){
  app.use('/products',products)
  app.use('/categories',categories)
  app.use('/users',users)
}
module.exports = routerApi;
