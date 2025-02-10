"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogRouter_1 = require("../module/blog/blogRouter");
const projectrouter_1 = require("../module/project/projectrouter");
const messageRouter_1 = require("../module/message/messageRouter");
const router = express_1.default.Router();
router.use("/", blogRouter_1.blogRouter);
router.use("/", projectrouter_1.projectRouter);
router.use("/", messageRouter_1.messageRouter);
exports.default = router;
