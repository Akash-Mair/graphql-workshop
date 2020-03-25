module.exports = {
    Query: {
        songs(_, __, {Song}){
            return Song.find()
        },
        artists(_,__,{Artist}){
            return Artist.find()
        }
    },
    Mutation: {
        createSong(_, {input}, {Song}){
            return Song.create(input)
        },
        updateSong(_, {input}, {Song}){
            const _id = input.id
            delete input.id
            return Song.findByIdAndUpdate({_id}, {...input})
        },
        createArtist(_,{input}, {Artist}){
            return Artist.create(input)
        },
        updateArtist(_, {input}, {Artist}){
            const _id = input.id
            delete input.id
            return Artist.findByIdAndUpdate({_id}, {...input})
        }
    },
    Song: {
        id(song){
            return song._id
        },
        artist(song,_,{Artist}){
            return Artist.findById(song.artist)
        }
    },
    Artist: {
        id(artist){
            return artist._id
        },
        songs(artist, _, {Song}){
            return Song.find({artist: artist._id})
        }
    }
}