"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, data) => {
    res.status(data.status).json({
        message: data.message,
        status: data.status,
        data: data.data || null,
    });
};
exports.sendResponse = sendResponse;
