

const Router = require('koa-router')
const productsRouter = require('./products.router')
const messagesRouter = require('./messages.router')

const apiRouter = new Router({
  prefix: '/api'
})

apiRouter.use(productsRouter.routes())
apiRouter.use(messagesRouter.routes())

module.exports = apiRouter;

