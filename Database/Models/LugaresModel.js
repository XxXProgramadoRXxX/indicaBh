const mongoose = require("mongoose")

const LugaresModel = new mongoose.Schema({

    nome: String,
    localizacao: String,
    url_foto: String,
    estrela: String,
    desc: String,
    tags: Array

   
})


module.exports = LugaresModel