const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    DOB: String
    Gender: String
    email: String
    friends: [Friend]!
    messages: [Message]!
    thoughts: [Thought]!
  }
  
  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Friend {
    _id: ID
    name: String
    gender: String
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Message {
    _id: ID
    messageText: String
    from: String
    to: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
  }

  type Mutation {
    addUser(username: String!, email: String!, DOB: String!, Gender: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(
      thoughtId: ID!
      commentText: String!
   
    ): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
    addFriend(username: String!, friendId: ID!): Auth
    sendMessage(messageText: String!, to: String!, from: String!): Message   
  }
`;

module.exports = typeDefs;