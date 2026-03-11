import { Router } from "express";
import { userController } from "./user.controller";
import { checkAuth } from "../../middleware/auth";

const userRouter = Router();

userRouter.get("/", checkAuth(), userController.getUsers);

export default userRouter;
