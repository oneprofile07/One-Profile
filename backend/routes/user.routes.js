import express from "express";
import { body } from 'express-validator';
import {signIn, signUp,} from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/signin",
      body("email", "Invalid Email Id ").isEmail(),
      body("password", "Password is required").notEmpty()
      ,signIn);




export default router;
