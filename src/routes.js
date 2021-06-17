const express = require('express')
const routes = express.Router()

const dirname = __dirname 
routes.use(express.static(dirname + "/view/style"))
routes.get('/', (req, res)=>{
    res.sendFile(dirname + "/view/pages/index.html")
})

module.exports = routes