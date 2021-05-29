const express = require("express")
var app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.get("/", (req, resp) => {
    resp.send("Bem vindo a aplicação do Felipe")
})

//Aberta
require("./controllers/login")(app)

const middleware = require('./middleware/autenticar')
app.use(middleware)

//Fechada
require("./controllers/usuarios")(app)

app.use((req, res) => {
    res.send("Página não encotrada")
})

app.listen(process.env.PORT || 80, () => {
    console.log("servidor online")
})