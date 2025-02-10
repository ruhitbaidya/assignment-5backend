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
exports.projectControler = void 0;
const asyncFun_1 = require("../../utils/asnycFun/asyncFun");
const sendResponse_1 = require("../../utils/sendResponse/sendResponse");
const projectmodel_1 = require("./projectmodel");
const projectservices_1 = require("./projectservices");
const createProjectControler = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projectservices_1.projectServices.createProjectServices(req.body);
    return (0, sendResponse_1.sendResponse)(res, {
        message: "Project Create Successfully",
        status: 200,
        data: result,
    });
}));
const getAllProjectControl = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projectmodel_1.projectModel.find();
    return (0, sendResponse_1.sendResponse)(res, {
        message: "get all project",
        status: 200,
        data: result,
    });
}));
const getSingalProjectControle = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projectmodel_1.projectModel.findById(req.params.id);
    return (0, sendResponse_1.sendResponse)(res, {
        message: "get Data project",
        status: 200,
        data: result,
    });
}));
const updateProjectControl = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projectservices_1.projectServices.updateProjectServices(req.body, req.params.id);
    return (0, sendResponse_1.sendResponse)(res, {
        message: "Project Update Successfully",
        status: 200,
        data: result,
    });
}));
const deleteProjectControl = (0, asyncFun_1.asyncFun)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projectmodel_1.projectModel.findByIdAndDelete(req.params.id);
    return (0, sendResponse_1.sendResponse)(res, {
        message: "Project Delete Successfully",
        status: 200,
        data: result,
    });
}));
exports.projectControler = {
    createProjectControler,
    getAllProjectControl,
    getSingalProjectControle,
    updateProjectControl,
    deleteProjectControl,
};
