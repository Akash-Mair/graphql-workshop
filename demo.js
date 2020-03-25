const { gql, ApolloServer } = require('apollo-server');

const typeDefs = gql`
    type User {
        username: String
        id: ID!
        fullName: String
    }


    type Query {
        me: User!
    }
`

const resolvers = {
    Query: {
        me(_,__,context){
            console.log(context)
            return {
                username:'KashMan',
                id:[]
            }
        }
    },
    User: {
        fullName(user,_, {models}) {
            return models.User.findById(user.id)
            // return 'Akash Mair'
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context(){
        return {hello:'world'}
    }
})


server.listen(4666).then(()=>console.log('running on port 4666'))