import express from "express";
import { messageControler } from "./messageControler";

const router = express.Router();

router.post("/createMessage", messageControler.createMessage);
router.get("/message", messageControler.getAllMessage);
export const messageRouter = router;
