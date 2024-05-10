import express from "express";
import { create,view,viewById,viewId} from "../controller/professional.controller.js";

const router = express.Router();

router.post("/create", create);
// router.put("/update", update);
router.get("/view", view);
router.get("/viewById/:userId",viewById);
router.post("/viewId", viewId);
// router.delete("/remove", remove);

export default router;