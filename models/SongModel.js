const mongoose = require('mongoose')
const Album = require('./AlbumModel')
let Schema = mongoose.Schema

const songSchema = new Schema({
    name: String,
    numListeners: Number,
    updatedAt: Date,
    spotifyLink: String,
    lastFm: String,
    album: albumSchema
})

const Song = mongoose.model("Song", songSchema)

module.exports = Song