import express from "express";
import cors from "cors";
import { globalErrorHandel } from "./app/errors/globalErrorHandel";
import { blogRouter } from "./app/module/blog/blogRouter";
import { messageRouter } from "./app/module/message/messageRouter";
import { projectRouter } from "./app/module/project/projectrouter";
import { connectServer } from "./server";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount Routers with Different Paths to Avoid Conflict
app.use("/api/p1", blogRouter);
app.use("/api/p1", projectRouter);
app.use("/api/p1", messageRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!", status: "200" });
});
connectServer();
// Global Error Handler
app.use(globalErrorHandel);

export default app;
