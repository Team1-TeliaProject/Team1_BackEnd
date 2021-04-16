const usersRouter = require('express').Router();
const {
  getAllUsers,
  // getUsersByType,
  // getOneUser,
  registerUsers,
  logUser,
  // updateUser,
  // deleteUser,
} = require('../controllers/users');

usersRouter.get('/', getAllUsers);
// usersRouter.get('/:userType', getUsersByType);
// usersRouter.get('/:userId', getOneUser);
usersRouter.post('/register', registerUsers);
usersRouter.post('/login', logUser);
// usersRouter.put('/:userId', updateUser);
// usersRouter.put('/:userId', deleteUser);

module.exports = usersRouter;
