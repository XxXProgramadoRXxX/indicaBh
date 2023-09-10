const mongoose = require("mongoose")

const LugaresModel = new mongoose.Schema({

    nome: String,
    localizacao: String,
    url_foto: String,
   
})


module.exports = LugaresModel