const messagesController = require('../controllers/messages.controllers')
const Router = require('koa-router')

const messagesRouter = new Router({
  prefix: '/messages'
})

messagesRouter
    .get('/', messagesController.getMessages)
    .get('/:id', messagesController.getMessageById)
    .post('/', messagesController.createMessage)
    .delete('/:id', messagesController.deleteMessage)
    .put('/:id', messagesController.updateMessage);

module.exports = messagesRouter


