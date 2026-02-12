import express from "express";

import { addProblem, deletedProblem, getAllProblems, getProblem } from "../../controllers/problemController";

const router = express.Router();

router.route("/addProblem").post(addProblem);
router.route("/").get(getAllProblems);
router.route("/:id").get(getProblem);

router.route("/deleteProblem/:id").delete(deletedProblem);

export default router;