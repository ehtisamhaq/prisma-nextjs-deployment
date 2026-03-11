import { Router } from "express";
import { userController } from "./user.controller.js";
import { checkAuth } from "../../middleware/auth.js";
const userRouter = Router();
userRouter.get("/", checkAuth(), userController.getUsers);
export default userRouter;
//# sourceMappingURL=user.router.js.map