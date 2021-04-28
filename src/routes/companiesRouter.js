const companiesRouter = require('express').Router();
const {
  getCompanies,
  getOneCompany,
  registerCompany,
  updateCompany,
  deleteCompany,
  like,
  superLike,
} = require('../controllers/companies');

companiesRouter.get('/', getCompanies);
companiesRouter.get('/:userId', getOneCompany);
companiesRouter.post('/register', registerCompany);
companiesRouter.put('/:userId', updateCompany);
companiesRouter.delete('/:userId', deleteCompany);
companiesRouter.post('/like', like);
companiesRouter.post('/superlike', superLike);

module.exports = companiesRouter;
