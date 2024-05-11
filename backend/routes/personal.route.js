import express from "express";
import { create, update, view, deleteById } from "../controller/personal.controller.js";

const router = express.Router();

router.post("/create", create);
router.put("/update/:personalId",update)
router.get("/view/:personalId", view);
router.delete("/remove/:personalId", deleteById);

export default router;
