import express from "express";
import { body } from 'express-validator';
import {signIn, signUp,} from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup",
      body("email", "Invalid Email Id ").isEmail(),
      body("password", "Password is required").notEmpty(),
      body("password", "Password must have at least 5 characters").isLength({ min: 5 }),
      body("name", "Name is required").notEmpty(),
      body("name", "Only alphabets are allowed").isAlpha(),
      signUp);

router.post("/signin",
      body("email", "Invalid Email Id ").isEmail(),
      body("password", "Password is required").notEmpty()
      ,signIn);




export default router;
