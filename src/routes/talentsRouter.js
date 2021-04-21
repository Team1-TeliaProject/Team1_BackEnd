const talentsRouter = require('express').Router();
const {
  registerTalent,
  logTalent,
  getTalents,
  getOneTalent,
  updateTalent,
  deleteTalent,
} = require('../controllers/talents');

talentsRouter.get('/', getTalents);
talentsRouter.get('/:userId', getOneTalent);
talentsRouter.post('/register', registerTalent);
talentsRouter.post('/login', logTalent);
talentsRouter.put('/:userId', updateTalent);
talentsRouter.delete('/:userId', deleteTalent);

module.exports = talentsRouter;
