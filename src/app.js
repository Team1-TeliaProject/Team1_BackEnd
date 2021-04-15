const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const { userRouter } = require('./routes/usersRouter');
const { jobRouter } = require('./routes/jobsRouter');
const { jobRouter } = require('./routes/matchesRouter');

app.use(cors);
app.use(express.json()); //handles body data

app.use('/api/users', userRouter);
app.use('/api/jobs', jobRouter);
app.use('/api/matches', matchRouter);

module.exports = app;
