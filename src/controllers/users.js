const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const User = require('../modals/user');
const { SECRET } = require('../utils/config');

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.json(users);
//   } catch (error) {
//     console.log('errorr--', error);
//   }
// };

const registerUsers = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const saltRounds = 10;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      throw new Error('User with the given email already exist');
    } else {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      };
      const savedUser = await new User(newUser).save();
      res.json(savedUser);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const correctPassword = !user
      ? null
      : await bcrypt.compare(password, user.password);
    if (!(user && correctPassword)) {
      throw new Error('Email and password not matched!');
    }

    const userInfo = {
      email,
      name: user.name,
      userId: user.id,
    };
    const token = await JWT.sign(userInfo, SECRET);
    res.status(200).send({ token, userInfo });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  // getAllUsers,
  registerUsers,
  logUser,
};
