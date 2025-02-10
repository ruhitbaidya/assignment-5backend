import { model, Schema } from "mongoose";
import { TBlogInterface } from "./blogInterface";

const blogSchema = new Schema<TBlogInterface>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const blogMode = model<TBlogInterface>("blog", blogSchema);
