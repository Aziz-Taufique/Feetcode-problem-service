import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import repositories from "../repositories/index";
import services from "../services/index";
import { ApiResponse } from "../utils/response";

const problemService = new services.problemService(new repositories.ProblemRepository());

async function addProblem(req: Request, res: Response, next: NextFunction) {
    try {
        const response = await problemService.createProblem(req.body);

        res.status(StatusCodes.OK).json(new ApiResponse(true, response, "Problem added successfully."));


    } catch (error) {
        next(error);
    }
}

export {
    addProblem
};