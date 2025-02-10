import express from "express";
import { blogRouter } from "../module/blog/blogRouter";
import { projectRouter } from "../module/project/projectrouter";
import { messageRouter } from "../module/message/messageRouter";

const router = express.Router();
router.use("/", blogRouter);
router.use("/", projectRouter);
router.use("/", messageRouter);
export default router;
