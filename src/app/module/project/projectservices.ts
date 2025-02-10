import { TProject } from "./projectInterface";
import { projectModel } from "./projectmodel";

const createProjectServices = async (info: TProject) => {
  const result = await projectModel.create(info);
  return result;
};

const updateProjectServices = async (data: TProject, id: string) => {
  const result = await projectModel.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        image: data.image,
        title: data.title,
        live_link: data.live_link,
        description: data.description,
      },
    },
    {
      new: true,
    }
  );

  return result;
};
export const projectServices = {
  createProjectServices,
  updateProjectServices,
};
