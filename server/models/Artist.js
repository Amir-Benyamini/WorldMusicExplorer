const mongoose = require('mongoose')
let Schema = mongoose.Schema

const artistSchema = new Schema({
    name: String,
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
    wikipediaSummary: String
})

const Artist = mongoose.model("Artist", artistSchema)

module.exports = Artist