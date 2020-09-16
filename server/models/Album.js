const mongoose = require('mongoose')
let Schema = mongoose.Schema

const albumSchema = new Schema({
    name: String,
    releaseDate:Date,
    artist:{ type: Schema.Types.ObjectId, ref: 'Artist' }
})

const Album = mongoose.model("Album", albumSchema)

module.exports = Album