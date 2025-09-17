import express from "express";
import { addUser, login } from "../controllers/userController.js";

const router = express.Router();

router.post("/", addUser);  //signup
router.post("/login", login);    //login

export default router;
