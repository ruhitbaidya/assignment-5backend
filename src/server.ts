import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const connectServer = async () => {
  try {
    await mongoose.connect(process.env.DBURL as string);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.log("MongoDB connection error:", err);
  }
};

connectServer();
