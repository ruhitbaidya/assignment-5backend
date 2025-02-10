"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncFun = void 0;
const asyncFun = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
exports.asyncFun = asyncFun;
