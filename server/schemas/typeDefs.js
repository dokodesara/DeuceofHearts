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
    friendName: String
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
    messageAuthor: String
    messageFor: String
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
    addThought(thoughtAuthor: String!, thoughtText: String!): Thought
    addComment(
      thoughtId: ID!
      commentText: String!
      commentAuthor: String!
    ): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
    addFriend(
      userId: ID!
      friendName: String!
    ): User
    removeFriend(userId: ID!, friendId: ID!): User
    sendMessage(messageText: String!, messageAuthor: String!, messageFor: String!): Message 
  }
`;

module.exports = typeDefs;