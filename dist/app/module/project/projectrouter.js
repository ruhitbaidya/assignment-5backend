"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = __importDefault(require("express"));
const projectcontroler_1 = require("./projectcontroler");
const router = express_1.default.Router();
router.post("/createProject", projectcontroler_1.projectControler.createProjectControler);
router.get("/getAllProject", projectcontroler_1.projectControler.getAllProjectControl);
router.get("/getSingalProject/:id", projectcontroler_1.projectControler.getSingalProjectControle);
router.patch("/updateProject/:id", projectcontroler_1.projectControler.updateProjectControl);
router.delete("/deleteProject/:id", projectcontroler_1.projectControler.deleteProjectControl);
exports.projectRouter = router;
