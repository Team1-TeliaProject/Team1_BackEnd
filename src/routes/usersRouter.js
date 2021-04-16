const usersRouter = require('express').Router();
const { registerUsers, logUser } = require('../controllers/users');

// usersRouter.get('/', getAllUsers);
// usersRouter.get('/:userType', getUsersByType);
// usersRouter.get('/:userId', getOneUser);
usersRouter.post('/register', registerUsers);
usersRouter.post('/login', logUser);
// usersRouter.put('/:userId', updateUser);
// usersRouter.delete('/:userId', deleteUser);

module.exports = usersRouter;
