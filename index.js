const {ApolloServer, gql} = require('apollo-server')

const posts = [
    {
        text: "",
        comments: []
    }
]

const typeDefs = gql`
    type Comment {
        author: String,
        text: String
    }

    type Post {
        text: String,
        comments: [Comment]
    }

    type Query {
        posts: [Post]
    }

    type Mutation {
        addComment(author: String, text: String): Comment
    }
`

const resolvers = {
    Query: {
        posts: () => posts
    },
    Mutation: {
        addComment: (root, args) => {
            const newComment = {author: args.author, text: args.text}
            posts[0].comments.push(newComment);
            return newComment
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen().then(({url}) => {
    console.log(`Server is running on ${url}`)
})

