"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageControler = void 0;
const asyncFun_1 = require("../../utils/asnycFun/asyncFun");
const sendResponse_1 = require("../../utils/sendResponse/sendResponse");
const messageModel_1 = require("./messageModel");
const createMessage = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = req.body;
    const result = yield messageModel_1.messageModel.create(message);
    return (0, sendResponse_1.sendResponse)(res, {
        message: "Message Send",
        status: 200,
        data: result,
    });
}));
const getAllMessage = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield messageModel_1.messageModel.find();
    return (0, sendResponse_1.sendResponse)(res, {
        message: "Message get successfully",
        status: 200,
        data: result,
    });
}));
exports.messageControler = {
    createMessage,
    getAllMessage,
};
