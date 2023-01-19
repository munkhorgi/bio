
import express from "express";
import {
  getAllUser,
  createUser,
  getUserByObject,
  deleteUser,
  getUserById,
} from "../controller/user.js";
import { checkTokenMiddleware } from "../middleware/middleware.js";

const userRouter = express.Router();

userRouter.route("/").get(getAllUser);
userRouter.route("/signup").post(createUser);
userRouter.route("/login").post(getUserByObject).post(checkTokenMiddleware);
userRouter.route("/:id").delete(deleteUser).get(getUserById);

export default userRouter;