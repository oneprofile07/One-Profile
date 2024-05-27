import express from "express";
import { forgot, reset } from "../controller/forgot.controller.js";

const router = express.Router();

router.post("/forgot-password", forgot);
router.post("/reset-password", reset);

export default router;