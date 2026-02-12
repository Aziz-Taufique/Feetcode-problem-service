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

async function getAllProblems(req: Request, res: Response, next: NextFunction) {

    try {

        const response = await problemService.getAllProblems();

        res.status(StatusCodes.OK).json(new ApiResponse(true, response, "All problem fetched successfully."));
    } catch (error) {
        next(error);
    }
}

async function getProblem(req: Request, res: Response, next: NextFunction) {

    try {

        const response = await problemService.getProblem(req.params.id as string);

        res.status(StatusCodes.OK).json(new ApiResponse(true, response, `Problem fetched with this id ${req.params.id}`));
    } catch (error) {
        next(error);
    }
}

async function deletedProblem(req: Request, res: Response, next: NextFunction) {

    try {
        const deletedProblem = await problemService.deleteProblem(req.params.id as string);

        res.status(StatusCodes.OK).json(new ApiResponse(true, deletedProblem, `Problem deleted with this id ${req.params.id}`));
    } catch (error) {
        next(error);
    }
}
export {
    addProblem,
    deletedProblem,
    getAllProblems,
    getProblem
};