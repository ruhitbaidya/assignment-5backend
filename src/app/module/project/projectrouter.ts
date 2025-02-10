import express from "express";
import { projectControler } from "./projectcontroler";

const router = express.Router();

router.post("/createProject", projectControler.createProjectControler);
router.get("/getAllProject", projectControler.getAllProjectControl);
router.get("/getSingalProject/:id", projectControler.getSingalProjectControle);
router.patch("/updateProject/:id", projectControler.updateProjectControl);
router.delete("/deleteProject/:id", projectControler.deleteProjectControl);
export const projectRouter = router;
