const mongoose = require('mongoose')
const Album = require('./AlbumModel')
let Schema = mongoose.Schema

const songSchema = new Schema({
    name: String,
    playCount: Number,
    bpm: Number,
    spotifyLink: String,
    lastFm: String,
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' }
})

const Song = mongoose.model("Song", songSchema)

module.exports = Song