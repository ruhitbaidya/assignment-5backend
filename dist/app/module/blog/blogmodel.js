"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogMode = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.blogMode = (0, mongoose_1.model)("blog", blogSchema);
