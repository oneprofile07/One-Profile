import express from "express";
import {add,getSharesWithProfile} from "../controller/share.controller.js";


const router = express.Router();

router.post("/add",add);
router.get("/getSharesWithProfile/:receiverUserId",getSharesWithProfile);
// router.get('/viewBy/:userId',viewId)
export default router;