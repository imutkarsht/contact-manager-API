import express from "express";
import { handleGetCurrentUser, handleLoginUser, handleRegisterUser } from "../controllers/users.js";
import validateToken from "../middlewares/validateToken.js";
const userRouter = express.Router();

userRouter.post('/register', handleRegisterUser)

userRouter.post('/login', handleLoginUser)

userRouter.get('/current',validateToken, handleGetCurrentUser)

export default userRouter;
