const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const { userRouter } = require('./routes/userRouter');

app.use(cors);
app.use(express.json()); //handles body data

app.use('/api/user', userRouter);

module.exports = app;
