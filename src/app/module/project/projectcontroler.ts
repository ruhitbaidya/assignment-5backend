import { asyncFun } from "../../utils/asnycFun/asyncFun";
import { sendResponse } from "../../utils/sendResponse/sendResponse";
import { projectModel } from "./projectmodel";
import { projectServices } from "./projectservices";

const createProjectControler = asyncFun(async (req, res) => {
  const result = await projectServices.createProjectServices(req.body);
  return sendResponse(res, {
    message: "Project Create Successfully",
    status: 200,
    data: result,
  });
});

const getAllProjectControl = asyncFun(async (req, res) => {
  const result = await projectModel.find();
  return sendResponse(res, {
    message: "get all project",
    status: 200,
    data: result,
  });
});

const getSingalProjectControle = asyncFun(async (req, res) => {
  const result = await projectModel.findById(req.params.id);
  return sendResponse(res, {
    message: "get Data project",
    status: 200,
    data: result,
  });
});

const updateProjectControl = asyncFun(async (req, res) => {
  const result = await projectServices.updateProjectServices(
    req.body,
    req.params.id
  );
  return sendResponse(res, {
    message: "Project Update Successfully",
    status: 200,
    data: result,
  });
});

const deleteProjectControl = asyncFun(async (req, res) => {
  const result = await projectModel.findByIdAndDelete(req.params.id);
  return sendResponse(res, {
    message: "Project Delete Successfully",
    status: 200,
    data: result,
  });
});
export const projectControler = {
  createProjectControler,
  getAllProjectControl,
  getSingalProjectControle,
  updateProjectControl,
  deleteProjectControl,
};
