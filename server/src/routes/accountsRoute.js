import { Router } from "express";
import { loginUser, signupUser } from "../controllers/accountsController.js";

const accountsRoute = Router();

accountsRoute.route("/login").post(loginUser);
accountsRoute.route("/signup").post(signupUser);

export { accountsRoute };
