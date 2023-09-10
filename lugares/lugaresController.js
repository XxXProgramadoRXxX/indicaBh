const express = require("express")
const router = express.Router()

const LugaresModel = require("../Database/lugares")

//find({campo:"valor"}) busca por campo, pode ser mais de uma
//findOne({campo:"Valor"}) = busca por unico dado
//findByIdandDelete("id").then().catch() = deleta

//busca completa
router.get("/lugares", (req, res) => {
    LugaresModel.find({}).then( lugares => {
        res.json(lugares)
    }).catch(err => {
        res.json(err)
    })
})

//buscanome
router.get("/lugares/:nome", (req, res) => {
    const nome = req.params.nome 
    LugaresModel.find({nome:nome}).then((lugar) => {
        res.json(lugar)
    }).catch(err => {
        res.sendStatus = 400
    })
})

//cria
router.post("/lugares", (req, res) => {
    var {nome, localizacao, url_foto, estrela, desc, tags} = req.body

    const lugares = new LugaresModel({
        nome: nome,
        localizacao: localizacao,
        url_foto:url_foto,
        estrela: estrela,
        desc: desc,
        tags: tags
    })

    lugares.save().then(() =>{
        res.sendStatus(200)
    }).catch((err) => {
        res.sendStatus(400)
    })

})

//deleta
router.delete("/lugares/:id", (req, res) => {
    const id = req.params.id
    LugaresModel.findByIdAndDelete(id).then(() => {
        req.statusCode = 200
        res.json({message: "Deletado"})
    }).catch(err => {
        res.json({message: "nÃO DELETADO"})
    })
})


module.exports = router