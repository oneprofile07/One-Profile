import express from "express";
import { create,view,update,deleteById} from "../controller/professional.controller.js";

const router = express.Router();

router.post("/create", create);
router.put("/update/:professionalId",update)
router.get("/view/:professionalId", view);
router.delete("/remove/:professionalId", deleteById);

export default router;