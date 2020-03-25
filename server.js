const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./api/schema.js');
const resolvers  = require('./api/resolvers.js');

const Artist = require('./api/models/artist.js');
const Song = require('./api/models/song.js');

const server = new ApolloServer()

mongoose.connect('mongodb://localhost:27017/songsgql', {useNewUrlParser: true, useUnifiedTopology: true });

server.listen(4500).then(()=> console.log('listening on 4500'))
