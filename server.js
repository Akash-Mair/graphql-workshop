const { ApolloServer } = require('apollo-server');
const typeDefs = require('./api/schema.js');
const resolvers  = require('./api/resolvers.js');
const mongoose = require('mongoose');
const artistModel = require('./api/models/artist.js');
const songModel = require('./api/models/song.js');

const server = new ApolloServer(
    {   
        typeDefs, 
        resolvers, 
        context(){
            return {artistModel, songModel}
        }
    })

mongoose.connect('mongodb://localhost:27017/songsgql', {useNewUrlParser: true, useUnifiedTopology: true });

server.listen(4500).then(()=> console.log('listening on 4500'))
