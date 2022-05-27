const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    friends: [Friend]!
  }
type Query {
    users: [User]
    user(username: String!): User
  }

type Mutation {
    
  }
`;

module.exports = typeDefs;