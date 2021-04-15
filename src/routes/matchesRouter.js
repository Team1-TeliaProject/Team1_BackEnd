export const matchesRouter = require('express').Router();
import { getAllMatches, createMatch } from '../controllers/matches';

matchesRouter.get('/:userId', getAllMatches);
matchesRouter.post('/', createMatch);
