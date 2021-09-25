const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Book {
    title: String! # returns a String
    author: String # returns an Author
  }

  type User {
    id: ID!
    name: String
  }

  type Query {
    books: [Book]
    user(id: ID!): User
  }
`

const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return user.find(user => user.id === args.id)
    }
  }
}

const user = [
  {
    id: '1',
    name: 'Elizabeth Bennet'
  },
  {
    id: '2',
    name: 'Fitzwilliam Darcy'
  }
]

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})