import express from "express";
import * as authController from "../controllers/authController.js";

//router object
const router = express.Router();

//routes
// REGISTER
router.post("/register", authController.registerContoller);

//LOGIN
router.post("/login", authController.loginController);

//LOGOUT
router.post("/logout", authController.logoutController);

export default router;
