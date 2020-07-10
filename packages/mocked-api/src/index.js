const { ApolloServer, gql } = require('apollo-server')
// TODO: fill after schema clarification
const transactions = require('./transactions.json')

const typeDefs = gql`
  enum Currency {
    EUR
    USD
    BTC
  }

  # TODO: Clarify id/uuid differences and update schema
  type Transaction {
    amount: Int!
    currency: Currency!
  }

  type Query {
    transactions: [Transaction]
  }
`

const resolvers = {
  Query: {
    transactions: () => transactions
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`)
})