const likesRouter = require('express').Router();

const { normalLike, superLike } = require('../controllers/likes');

likesRouter.use('/normal', normalLike);
likesRouter.use('/super', superLike);

module.exports = likesRouter;
