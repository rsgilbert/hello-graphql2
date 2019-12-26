const resolvers = {
    Query: {
        info: () => `Simple graphql API`,
        feed: () => links,    
        link: (_parent, args) => findLink(args.id)
    },

    Mutation: {
        post: (_parent, args) => {
            console.log(args)
            let link = {
                id: `link-${links.length}`,
                description: args.description,
                url: args.url
            }
            links.push(link)
            return link
        },
        updateLink: (_parent, args) => {
            let link = findLink(args.id)
            if(args.description) {
                link.description = args.description
            }
            if(args.url) {
                link.url = args.url
            }
            return link
        },
        deleteLink: (_parent, args) => {
            const link = findLink(args.id)
            if(link) {                
                links = links.filter(lk => lk.id !== link.id)
            }
            return link
        }
    }
}

const findLink = id => links.find(lk => lk.id === id)
let links = [
    {
        id: 'link-0',
        url: 'www.howtographql.com',
        description: 'Fullstack tutorial for GraphQL'
    }, {   
        id:  "7",
        url: 'www.campusgram.me',
        description: 'Being Polite'
    }
]

module.exports = resolvers


