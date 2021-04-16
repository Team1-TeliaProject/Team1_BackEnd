const matchesRouter = require('express').Router();
const { getAllMatches, createMatch } = require('../controllers/matches');

matchesRouter.get('/:userId', getAllMatches);
matchesRouter.post('/', createMatch);
