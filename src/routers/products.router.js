const productControllers = require('../controllers/products.controllers')
const Router = require('koa-router')

const productsRouter = new Router({
  prefix: '/products'
})

productsRouter
    .get('/', productControllers.getProducts)
    .get('/:id', productControllers.getProductById)
    .post('/', productControllers.createProduct)
    .delete('/:id', productControllers.deleteProduct)
    .put('/:id', productControllers.updateProduct);

module.exports = productsRouter


