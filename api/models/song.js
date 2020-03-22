const { Schema, model } = require('mongoose');

const songSchema = Schema({
    name: String,
    id: String,
    artist: { type: Schema.Types.ObjectId, ref: 'artist' },
    genre: String
}) 

module.exports = model('Song', songSchema)

