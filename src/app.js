const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const { MONGODB_URI } = require('./utils/config');
const userRouter = require('./routes/usersRouter');
const jobRouter = require('./routes/jobsRouter');
const matchRouter = require('./routes/matchesRouter');

app.use(cors);
app.use(express.json()); //handles body data

//mongodb connection

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message);
  });

app.use('/api/users', userRouter);
app.use('/api/jobs', jobRouter);
app.use('/api/matches', matchRouter);

module.exports = app;
