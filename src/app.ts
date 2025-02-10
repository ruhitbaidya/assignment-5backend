import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes/routes";
import { globalErrorHandel } from "./app/errors/globalErrorHandel";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/p1", router);
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!", status: "200" });
});
app.use(globalErrorHandel);
export default app;
