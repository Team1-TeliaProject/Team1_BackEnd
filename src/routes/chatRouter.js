const chatRouter = require('express').Router();

const chat = require('../controllers/chat');

chatRouter.use('/', chat);

module.exports = chatRouter;
