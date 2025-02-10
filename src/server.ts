import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
dotenv.config();
export const connectServer = async () => {
  try {
    await mongoose.connect(process.env.DBURL as string);
    app.listen(process.env.PORT || 7000, () => {
      console.log("server is connected 5000");
    });
  } catch (err) {
    console.log(err);
  }
};

connectServer();
