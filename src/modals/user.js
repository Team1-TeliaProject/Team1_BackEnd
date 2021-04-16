const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Match',
    },
  ],

  jobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
    },
  ],

  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },
  companyName: {
    type: String,
  },
  email: {
    type: String,
    required: 'Email is required',
  },
  password: {
    type: String,
    required: 'Password is required',
  },

  phone: {
    type: String,
  },

  location: {
    type: String,
  },

  title: {
    type: String,
  },

  gitHub: {
    type: String,
  },

  linkedin: {
    type: String,
  },

  website: {
    type: String,
  },

  about: {
    type: String,
  },

  level: {
    type: String,
  },

  type: {
    type: String,
  },

  techs: [
    {
      type: String,
    },
  ],
  photo: {
    type: String,
  },
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('User', userSchema);
