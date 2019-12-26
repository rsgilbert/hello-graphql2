const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
    type Query {
        info: String!
    }
`;

const resolvers = {
    Query: {
        info: () => `Simple graphql API`
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log('Server is running on localhost:4000'))