import { gql } from '@apollo/client';

//get one user my their username
export const QUERY_SINGLE_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      DOB
      Gender
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

//get all users
export const QUERY_USERS = gql`
  query getUsers {
    users {
      username
      DOB
      Gender
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

//get all thoughts
export const QUERY_ALL_THOUGHTS = gql`
  query getAllThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

//get a specific user's thoughts
export const QUERY_USER_THOUGHTS = gql`
  query getUserThoughts($userId: String!) {
    thoughts(userId: $userId){
       _id
        username
        comments {
          _id
          commentText
          commentAuthor
        }
    }
}
`;

//get a single user's thoughts
export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

//get a user's private messages bu their username
export const QUERY_USER_MESSAGES = gql`
  query getUserMessages($username: String!) {
    messages(username: $username) {
      _id
      messageText: String
      messageAuthor: String
      messageFor: String
      createdAt: String
  }
}
`;

//get a specific user's friends
export const QUERY_USER_FRIENDS = gql`
  query getUserFriends($username: String!) {
    friends(username: $username){
       _id
        username
        DOB
        Gender
        email
        comments {
          _id
          commentText
          commentAuthor
        }
    }
}
`;

//get user's own profile
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
