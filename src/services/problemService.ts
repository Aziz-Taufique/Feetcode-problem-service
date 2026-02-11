
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
}

export default ProblemService;