import { model, Schema } from "mongoose";
import { TProject } from "./projectInterface";

const projectSchema = new Schema<TProject>({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  live_link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const projectModel = model<TProject>("project", projectSchema);
