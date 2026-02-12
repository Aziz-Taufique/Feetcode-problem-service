
class ProblemService {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    problemRepository: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(problemRepository: any) {
        this.problemRepository = problemRepository;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createProblem(problemData: any) {
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }

    async getAllProblems() {
        const problem = await this.problemRepository.getAllProblems();
        return problem;
    }

    async getProblem(problemId: string) {
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }

    async deleteProblem(problemId: string) {
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }
}

export default ProblemService;