import express from "express";
import { create,view,update,deleteById,viewId} from "../controller/professional.controller.js";

const router = express.Router();

router.post("/create", create);
router.put("/update/:professionalId",update)
router.get("/view/:professionalId", view);
router.delete("/remove/:professionalId", deleteById);
router.get("/viewByUserId",viewId);
// router.get("/viewByUserId/:userId",viewByUserId)

export default router;