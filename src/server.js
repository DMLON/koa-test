const config = require('./config')
const app = require("./server.init");

//https://mherman.org/blog/user-authentication-with-passport-and-koa/
app.listen(config.port, () => {
  console.log(`Server Listening on port: ${config.port}`)
});



