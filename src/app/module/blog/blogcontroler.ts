import { asyncFun } from "../../utils/asnycFun/asyncFun";
import { sendResponse } from "../../utils/sendResponse/sendResponse";
import { blogMode } from "./blogmodel";
import { blogServices } from "./blogservices";

const blogCreateControler = asyncFun(async (req, res) => {
  const blog = req.body;
  const result = await blogServices.createBlogServices(blog);
  return sendResponse(res, {
    message: "blog Create Successfully",
    status: 200,
    data: result,
  });
});

const editBlogControler = asyncFun(async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const result = await blogServices.editBlogServices(data, id);
  return sendResponse(res, {
    message: "blog Create Successfully",
    status: 200,
    data: result,
  });
});
const findAllBlogControl = asyncFun(async (req, res) => {
  const result = await blogMode.find();
  return sendResponse(res, {
    message: "all blog get Successfully",
    status: 200,
    data: result,
  });
});

const deleteBlogControl = asyncFun(async (req, res) => {
  const id = req.params.id;
  const result = await blogMode.findOneAndDelete({ _id: id });
  return sendResponse(res, {
    message: "blog Delete Successfully",
    status: 200,
    data: result,
  });
});

const findSingalBlogControl = asyncFun(async (req, res) => {
  const id = req.params.id;
  const result = await blogMode.findById(id);
  return sendResponse(res, {
    message: "blog get Successfully",
    status: 200,
    data: result,
  });
});
export const blogControl = {
  blogCreateControler,
  findAllBlogControl,
  findSingalBlogControl,
  editBlogControler,
  deleteBlogControl,
};
