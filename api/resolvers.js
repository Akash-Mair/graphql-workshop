module.exports = {
    Query: {
        songs(_, __, {songModel}){
            return songModel.find()
        },
        artists(_,__,{artistModel}){
            return artistModel.find()
        }
    },
    Mutation: {
        createSong(_, {input}, {songModel}){
            return songModel.create(input)
        },
        updateSong(_, {input}, {songModel}){
            return songModel.findByIdAndUpdate({_id: input.id}, {...input})
        },
        createArtist(_,{input}, {artistModel}){
            return artistModel.create(input)
        },
        updateArtist(_, {input}, {artistModel}){
            return artistModel.findByIdAndUpdate({_id: input.id}, {...input})
        }
    },
    Song: {
        id(song,_,{songModel}){
            return songModel.findOne(song).then(song => song._id)
        },
        artist(song,_,{artistModel}){
            return artistModel.findById(song.artist)
        }
    },
    Artist: {
        id(artist,_,{artistModel}){
            return artistModel.findOne(artist).then(artist => artist._id)
        },
        songs(artist, _, {songModel}){
            console.log(artist)
            return songModel.find({artist: artist._id})
        }
    }
}