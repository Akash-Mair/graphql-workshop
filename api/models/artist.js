const { Schema, model } = require('mongoose');

const artistSchema = Schema({
    name: String,
    id: String,
    songs: [{ type: Schema.Types.ObjectId, ref: 'song' }],
    genre: String
}) 

module.exports = model('Artist', artistSchema)

