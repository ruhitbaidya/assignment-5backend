import express from "express";
import { blogControl } from "./blogcontroler";
const router = express.Router();

router.post("/createBlog", blogControl.blogCreateControler);
router.get("/findAll", blogControl.findAllBlogControl);
router.get("/findSingalBlog/:id", blogControl.findSingalBlogControl);
router.patch("/updateBlog/:id", blogControl.editBlogControler);
router.delete("/deleteBlog/:id", blogControl.deleteBlogControl);
export const blogRouter = router;
