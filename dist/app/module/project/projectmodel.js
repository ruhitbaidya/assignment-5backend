"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectModel = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    live_link: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
exports.projectModel = (0, mongoose_1.model)("project", projectSchema);
