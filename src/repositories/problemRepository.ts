import models from "../models/index";

class ProblemRepository {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createProblem(problemData: any) {
        try {

            const problem = await models.ProblemModel.create({
                title: problemData.title,
                description: problemData.description,
                codeStubs: problemData.codeStubs,
                testCase: problemData.testCase ? problemData.testCase : []
            });

            return problem;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default ProblemRepository;