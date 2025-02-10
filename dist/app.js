"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandel_1 = require("./app/errors/globalErrorHandel");
const blogRouter_1 = require("./app/module/blog/blogRouter");
const messageRouter_1 = require("./app/module/message/messageRouter");
const projectrouter_1 = require("./app/module/project/projectrouter");
const server_1 = require("./server");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Mount Routers with Different Paths to Avoid Conflict
app.use("/api/p1", blogRouter_1.blogRouter);
app.use("/api/p1", projectrouter_1.projectRouter);
app.use("/api/p1", messageRouter_1.messageRouter);
app.get("/", (req, res) => {
    res.json({ message: "Hello World!", status: "200" });
});
(0, server_1.connectServer)();
// Global Error Handler
app.use(globalErrorHandel_1.globalErrorHandel);
exports.default = app;
