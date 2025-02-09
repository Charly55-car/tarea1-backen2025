import { Router } from "express";
import { middlewareCustom } from "../../middlewarecuston/middleware.js";
import { CreateUsers,GetAllUsers } from "./user-controllers.js";

const usersRouter = Router();

usersRouter.get("/",[middlewareCustom],GetAllUsers);

usersRouter.post("/",CreateUsers);




export default usersRouter;