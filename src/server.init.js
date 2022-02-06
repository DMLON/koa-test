
const config = require('./config')
const koa = require('koa')
const koaBody = require('koa-body')
const apiRouter = require('./routers/api.router')

const dbConnection = require('./db/mongo.connect')
const mongoConnection = new dbConnection(config.mongoUri);
mongoConnection.connect();

const app = new koa();

app.use(koaBody())
    .use(apiRouter.routes());

module.exports = app;