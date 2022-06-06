import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $dob: String!, $gender: String!, $password: String!) {
    addUser(username: $username, email: $email, DOB: $dob, Gender: $gender, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// mutation AddUser($username: String!, $email: String!, $dob: String!, $gender: String!, $password: String!) {
//   addUser(username: $username, email: $email, DOB: $dob, Gender: $gender, password: $password) {
//     token
//     user {
//       _id
//     }
//   }
// }

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtAuthor: String!, $thoughtText: String!) {
    addThought(thoughtAuthor: $thoughtAuthor, thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
mutation addComment($thoughtId: ID!, $commentText: String!, $commentAuthor: String!) {
  addComment(
    thoughtId: $thoughtId,
    commentText: $commentText,
    commentAuthor: $commentAuthor){
     _id
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($messageText: String!, $to: String!, $from: String!) {
    sendMessage(messageText: $messageText, to: $to, from: $from) {
      _id
      messageText
      to
      from
      createdAt
    }
  }
`;

// from here down is probably wrong
export const REMOVE_THOUGHT = gql`
  mutation removeThought($thoughtId: ID!) {
    removeThought(thoughtId: $thoughtId)
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($thoughtId: ID!, $commentId: ID!) {
    removeComment(thoughtId: $thoughtId, commentId: $commentId)
  }
`;

/*export const ADD_FRIEND = gql`
  mutation addFriend($username: String!, $friendId: ID!) {
    addFriend( ???? )
  }
`;*/