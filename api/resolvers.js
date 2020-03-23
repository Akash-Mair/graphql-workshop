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
            return Song.findByIdAndUpdate({_id: input.id}, {...input})
        },
        createArtist(_,{input}, {Artist}){
            return Artist.create(input)
        },
        updateArtist(_, {input}, {Artist}){
            return Artist.findByIdAndUpdate({_id: input.id}, {...input})
        }
    },
    Song: {
        id(song,_,{Song}){
            return Song.findOne(song).then(song => song._id)
        },
        artist(song,_,{Artist}){
            return Artist.findById(song.artist)
        }
    },
    Artist: {
        id(artist,_,{Artist}){
            return Artist.findOne(artist).then(artist => artist._id)
        },
        songs(artist, _, {Song}){
            console.log(artist)
            return Song.find({artist: artist._id})
        }
    }
}