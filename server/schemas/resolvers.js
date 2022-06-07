const mongoose = require ('mongoose');

const { AuthenticationError } = require('apollo-server-express');
const { User, Thought, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts').populate('friends').sort({ createdAt: -1 });
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
    me: async (parent, args, context) => {
      return User.findOne({ _id: context.user._id });
    }
    // myComments: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id });
    //   }
    //   throw new AuthenticationError('Username or password is incorrect');
    // },
  },

  Mutation: {
    addUser: async (parent, { username, email, DOB, Gender, password }) => {
      const user = await User.create({ username, email, DOB, Gender, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
    addFriend: async (parent, { friendId }, context) => {
      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { friends: mongoose.Types.ObjectId(friendId) } },
      );
    },
    removeFriend: async (parent, { userId, friendId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { friends: { _id: friendId } } },
        { new: true }
      );
    },
    sendMessage: async (parent, { messageText, messageAuthor, messageFor }) => {
      const message = await Message.create({ messageText, messageAuthor, messageFor });

      await User.findOneAndUpdate(
        { username: messageFor },
        { $addToSet: { messages: message._id } }
      );

      return message;
    },
  },
};

module.exports = resolvers;