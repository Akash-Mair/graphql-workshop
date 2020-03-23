const { gql } = require('apollo-server')

const typeDefs = gql`
        type User {
            username: String!
            id: ID!
        }

        type Song {
            name: String!
            id: ID!
            genre: String!
            artist: Artist!
        }

        input NewSong {
            name: String!
            genre: String!
            artist:ID!
        }

        input UpdateSong {
            name: String
            id: ID
            genre: String,
            artist:ID
        }

        type Artist {
            name: String!
            id: ID!
            songs: [Song]!
            genre: String
        }

        input NewArtist {
            name: String!
            genre: String!
            songs: [ID]!
        }

        input UpdateArtist {
            name: String
            songs: [ID]
            genre: String
            id: ID!
        }

        type Query {
            songs: [Song]!
            artists: [Artist]!
        }

        type Mutation {
            createSong(input: NewSong!): Song!
            updateSong(input: UpdateSong!): Song!
            createArtist(input: NewArtist!): Artist!
            updateArtist(input: UpdateArtist!): Artist!
        }
` 

module.exports = typeDefs