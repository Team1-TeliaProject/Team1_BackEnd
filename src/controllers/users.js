const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

// const Admin = require('../modals/Admin');
const { SECRET } = require('../utils/config');

export const getAllUsers = async (req, res) => {
  try {
    const venues = await Admin.find({});
    res.json(venues);
  } catch (error) {
    console.log('errorr--', error);
  }
};

export const registerUsers = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingAdmin = await Admin.findOne({ email: email });

    if (existingAdmin) {
      throw new Error('Account with the given Email already exists');
    } else if (password.length < 4) {
      throw new Error('Password must be atleast 4 characters long');
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      };

      const savedUser = await new Admin(newUser).save();
      res.json(savedUser);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const logUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email: email });
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
