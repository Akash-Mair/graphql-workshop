const { Schema, model } = require('mongoose');

const userSchema = Schema({
    username: String,
    id: String
}) 

module.exports = model('User', userSchema)

