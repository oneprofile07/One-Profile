import express from "express";
import  { signIn,signUp,viewUser,updateUser, uploadMiddleware,remove, changePassword } from "../controller/user.controller.js";
import { upload } from "../model/user.model.js";
// import { singUp, signIn, update, userList, getUserByEmail, remove } from "../controller/user.controller.js";
// import { body } from 'express-validator';

const router = express.Router();

router.post("/signup", upload.single('image'),signUp);
router.post("/signIn",signIn)
router.get("/viewById/:_Id",viewUser);
router.put("/updateById/:_Id",uploadMiddleware,updateUser)
router.delete("/remove/:_Id",remove);
router.put("/changePassword/:_Id",changePassword)

export default router;
