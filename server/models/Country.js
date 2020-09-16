const mongoose = require('mongoose')
let Schema = mongoose.Schema

const countrySchema = new Schema({
    name: String,
    artists:[{ type: Schema.Types.ObjectId, ref: 'Artist' }]
})

const Country = mongoose.model("Country", countrySchema)

module.exports = Country