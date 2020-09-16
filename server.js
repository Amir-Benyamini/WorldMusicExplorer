const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const api = require('./server/routes/api')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/WorldMusicExplorer', { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false})

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)

const {port} = require("./config")
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
