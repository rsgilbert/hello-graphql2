const { GraphQLServer } = require('graphql-yoga')

// decides where the data will be got from
const resolvers = {
    Query: {
        info: () => `Simple graphql API`,
        feed: () => links,    
    },

    Mutation: {
        post: (_parent, args) => {
            let link = {
                id: `link-${links.length}`,
                description: args.description,
                url: args.url
            }
            links.push(link)
            return link
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log('Server is running on localhost:4000'))

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