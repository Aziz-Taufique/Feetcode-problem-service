import models from "../models/index";

class ProblemRepository {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createProblem(problemData: any) {
        try {

            return await models.ProblemModel.create({
                title: problemData.title,
                description: problemData.description,
                // codeStubs: problemData.codeStubs,
                // testCase: problemData.testCase ? problemData.testCase : []
            });

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            return await models.ProblemModel.find({});
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id: string) {
        try {
            const response = await models.ProblemModel.findById(id);
            if (!response) {
                throw new Error("Problem not found");
            }

            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id: string) {
        try {
            const deletedProblem = await models.ProblemModel.findByIdAndDelete(id);
            if (!deletedProblem) {
                throw new Error("Problem not found to delete");
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default ProblemRepository;