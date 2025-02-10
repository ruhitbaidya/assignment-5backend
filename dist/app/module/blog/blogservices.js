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
exports.blogServices = void 0;
const blogmodel_1 = require("./blogmodel");
const createBlogServices = (info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogmodel_1.blogMode.create(info);
    return result;
});
const editBlogServices = (info, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogmodel_1.blogMode.findByIdAndUpdate({ _id: id }, {
        $set: {
            title: info.title,
            content: info.content,
            category: info.category,
            image: info.image,
        },
    }, {
        new: true,
    });
    return result;
});
exports.blogServices = {
    createBlogServices,
    editBlogServices,
};
