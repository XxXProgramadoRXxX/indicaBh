const mongoose = require("mongoose")
const lugaresModel = require("./Models/LugaresModel")

const url = process.env.DATABSE_URL 
mongoose.connect(url, ({useNewUrlParser: true, useUnifiedTopology: true}))

const Lugares = mongoose.model("Lugares", lugaresModel);

module.exports = Lugares

/*
Lugares.find({}).then(lugares => {
    console.log(lugares)
}).catch(err => {
    console.log(err)
})

*/


/*
cadastro
const lugares = new Lugares({
    nome: "Praça da Liberdade",
    localizacao: "Av Brasil ",
    url_foto:"embreve",

})

lugares.save().then(() => {
    console.log("[+] SPOT SALVO [+]")
}).catch((err) => {
    console.log("[+] ERRO [+]")
})

*/