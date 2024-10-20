const express = require("express")
const { sendMail } = require("./controllers/mail")

//requisição para enviar bot.js p/ routes.js
require("./controllers/bot")

const routes = express()

//ligando os direrorios da pasta public com as rotas                                              
routes.use(express.static(__dirname + '/view'))
// metodo get para mostrar pasta public no cliente
routes.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})
//Enviar o email para dentro da rota.
routes.use("/send", sendMail) 

module.exports = routes     