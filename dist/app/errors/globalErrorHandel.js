"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandel = void 0;
const globalErrorHandel = (err, req, res, next) => {
    const error = err.message;
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        status: status,
        message: error,
    });
};
exports.globalErrorHandel = globalErrorHandel;
