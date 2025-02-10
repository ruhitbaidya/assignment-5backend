import { asyncFun } from "../../utils/asnycFun/asyncFun";
import { sendResponse } from "../../utils/sendResponse/sendResponse";
import { messageModel } from "./messageModel";

const createMessage = asyncFun(async (req, res) => {
  const message = req.body;
  const result = await messageModel.create(message);
  return sendResponse(res, {
    message: "Message Send",
    status: 200,
    data: result,
  });
});

const getAllMessage = asyncFun(async (req, res) => {
  const result = await messageModel.find();
  return sendResponse(res, {
    message: "Message get successfully",
    status: 200,
    data: result,
  });
});
export const messageControler = {
  createMessage,
  getAllMessage,
};
