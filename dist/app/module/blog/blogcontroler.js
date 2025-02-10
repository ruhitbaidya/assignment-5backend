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
exports.blogControl = void 0;
const asyncFun_1 = require("../../utils/asnycFun/asyncFun");
const sendResponse_1 = require("../../utils/sendResponse/sendResponse");
const blogmodel_1 = require("./blogmodel");
const blogservices_1 = require("./blogservices");
const blogCreateControler = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = req.body;
    const result = yield blogservices_1.blogServices.createBlogServices(blog);
    return (0, sendResponse_1.sendResponse)(res, {
        message: "blog Create Successfully",
        status: 200,
        data: result,
    });
}));
const editBlogControler = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    const result = yield blogservices_1.blogServices.editBlogServices(data, id);
    return (0, sendResponse_1.sendResponse)(res, {
        message: "blog Create Successfully",
        status: 200,
        data: result,
    });
}));
const findAllBlogControl = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogmodel_1.blogMode.find();
    return (0, sendResponse_1.sendResponse)(res, {
        message: "all blog get Successfully",
        status: 200,
        data: result,
    });
}));
const deleteBlogControl = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield blogmodel_1.blogMode.findOneAndDelete({ _id: id });
    return (0, sendResponse_1.sendResponse)(res, {
        message: "blog Delete Successfully",
        status: 200,
        data: result,
    });
}));
const findSingalBlogControl = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield blogmodel_1.blogMode.findById(id);
    return (0, sendResponse_1.sendResponse)(res, {
        message: "blog get Successfully",
        status: 200,
        data: result,
    });
}));
exports.blogControl = {
    blogCreateControler,
    findAllBlogControl,
    findSingalBlogControl,
    editBlogControler,
    deleteBlogControl,
};
