const matchesRouter = require('express').Router();
const { getAllMatches, createMatch } = require('../controllers/matches');

matchesRouter.get('/:id', getAllMatches);
matchesRouter.post('/', createMatch);

module.exports = matchesRouter;
