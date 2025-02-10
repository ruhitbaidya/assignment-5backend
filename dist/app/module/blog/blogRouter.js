"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = __importDefault(require("express"));
const blogcontroler_1 = require("./blogcontroler");
const router = express_1.default.Router();
router.post("/createBlog", blogcontroler_1.blogControl.blogCreateControler);
router.get("/findAll", blogcontroler_1.blogControl.findAllBlogControl);
router.get("/findSingalBlog/:id", blogcontroler_1.blogControl.findSingalBlogControl);
router.patch("/updateBlog/:id", blogcontroler_1.blogControl.editBlogControler);
router.delete("/deleteBlog/:id", blogcontroler_1.blogControl.deleteBlogControl);
exports.blogRouter = router;
