"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes/routes"));
const globalErrorHandel_1 = require("./app/errors/globalErrorHandel");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/p1", routes_1.default);
app.get("/", (req, res) => {
    res.json({ message: "Hello World!", status: "200" });
});
app.use(globalErrorHandel_1.globalErrorHandel);
exports.default = app;
