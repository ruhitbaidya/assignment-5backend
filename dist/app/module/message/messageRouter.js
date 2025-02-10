"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
const express_1 = __importDefault(require("express"));
const messageControler_1 = require("./messageControler");
const router = express_1.default.Router();
router.post("/createMessage", messageControler_1.messageControler.createMessage);
router.get("/message", messageControler_1.messageControler.getAllMessage);
exports.messageRouter = router;
