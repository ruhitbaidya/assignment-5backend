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
exports.projectServices = void 0;
const projectmodel_1 = require("./projectmodel");
const createProjectServices = (info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projectmodel_1.projectModel.create(info);
    return result;
});
const updateProjectServices = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projectmodel_1.projectModel.findOneAndUpdate({ _id: id }, {
        $set: {
            image: data.image,
            title: data.title,
            live_link: data.live_link,
            description: data.description,
        },
    }, {
        new: true,
    });
    return result;
});
exports.projectServices = {
    createProjectServices,
    updateProjectServices,
};
