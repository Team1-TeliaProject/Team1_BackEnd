export const usersRouter = require('express').Router();
import {
  getAllUsers,
  getUsersByType,
  getOneUser,
  registerUsers,
  logUser,
  updateUser,
  deleteUser,
} from '../controllers/user';

usersRouter.get('/', getAllUsers);
usersRouter.get('/:userType', getUsersByType);
usersRouter.get('/:userId', getOneUser);
usersRouter.post('/register', registerUsers);
usersRouter.post('/login', logUser);
usersRouter.put('/:userId', updateUser);
usersRouter.put('/:userId', deleteUser);
