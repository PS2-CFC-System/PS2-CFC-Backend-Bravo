import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router({ mergeParams: true });

/*
    POST users
    GET users
*/
userRouter.route('/')
    .post(userController.create)
    .get(userController.findAll);

/*
    GET users/findAllInstructors
*/
userRouter.route('/findAllInstructors').get(userController.findAllInstructors);

/*
    GET users/findUserEmail/:email
*/
userRouter.route('/findUSerEmail/:email').get(userController.findUserEmail)

export default userRouter;