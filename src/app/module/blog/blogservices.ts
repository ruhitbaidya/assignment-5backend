import { TBlogInterface } from "./blogInterface";
import { blogMode } from "./blogmodel";

const createBlogServices = async (info: TBlogInterface) => {
  const result = await blogMode.create(info);
  return result;
};

const editBlogServices = async (info: TBlogInterface, id: string) => {
  const result = await blogMode.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        title: info.title,
        content: info.content,
        category: info.category,
        image: info.image,
      },
    },
    {
      new: true,
    }
  );

  return result;
};
export const blogServices = {
  createBlogServices,
  editBlogServices,
};
