const jsonServer = require('json-server')
const EServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = 3000||process.env.PORT

EServer.use(middleware)
EServer.use(router)

EServer.listen(PORT,()=>{
    console.log(`ETech server started at port ${PORT}`);
})