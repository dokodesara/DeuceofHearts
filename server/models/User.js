const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// const sixteenAgo = () => {
//   return new Date()
//   // how do write 16 years ago
//   // Moment.js?
// }

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  DOB: {
    type: Date,
    // validate: {
    //   validator: function (input) { return new Date(input) && new Date(input) <= sixteenAgo },
    //   message: 'Users must be 16 or older'
    // },
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;