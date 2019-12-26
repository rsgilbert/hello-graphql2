const { GraphQLServer } = require('graphql-yoga')

// schema
const typeDefs = `
    type Query {
        info: String!
        feed: [Link]!
    }
   
    type Link {
        id: ID!
        description: String!
        url: String!
    }
`;

let links = [
    {
        id: 'link-0',
        url: 'www.howtographql.com',
        description: 'Fullstack tutorial for GraphQL'
    }, {   
        id:  7,
        url: 'www.campusgram.me',
        description: 'Being Polite'
    }
]

// decides where the data will be got from
const resolvers = {
    Query: {
        info: () => `Simple graphql API`,
        feed: () => links
    
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log('Server is running on localhost:4000'))