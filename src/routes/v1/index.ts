import express from "express";

import problemRouter from "./problemRoute";

const v1Route = express.Router();

v1Route.use("/problems", problemRouter);

export default v1Route;