require("dotenv").config()

const express = require("express")
const app = express()
const bodyParaser = require("body-parser")

const lugaresController = require("./lugares/lugaresController")

//req = requisição dados enviados pelo usuarios
//res = respostax
//:parametro = indica que a requisição vai ter parametro 
//:parametro? = indica que o parametro vai ser opcional 
//queryparams = req.query["nomedoparametro"]

app.use(bodyParaser.urlencoded({extends: false}))
app.use(bodyParaser.json())

const port = process.env.PORT || 5000

app.use("/", lugaresController)
app.get("/", (req, res) => {
    res.statusCode = 200
    res.json({mensagem: "[+] SERVIDOR ONLINE [+]"})
})

app.get("/env", (req, res) => {
    const data = process.env.DATABSE_URL
    res.send(data)
})

app.listen(port, (err) => {
    if(err){
        console.log("[+] Error ao iniciar servidor [+]")
    }else{
        console.log("[+] SERVIDOR ONLINE [+]")
    }
})