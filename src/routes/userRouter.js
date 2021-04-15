export const userRouter = require('express').Router();
import { getAllUsers, registerUsers, logUser } from '../controllers/admin';

adminRouter.get('/', getAllUsers);
adminRouter.post('/register', registerUsers);
adminRouter.post('/login', logUser);
