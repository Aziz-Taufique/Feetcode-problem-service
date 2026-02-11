import mongoose, { Document, Model } from "mongoose";
import { string } from "zod";

interface ICodeStubs {
    language: "CPP" | "JAVA" | "PYTHON";
    startSnippet?: string;
    endSnippet?: string;
    userSnippet?: string;
}

interface ITestCase {
    input: string;
    output: string;
}

interface IProblemService extends Document {
    title: string;
    subtitle: string;
    description: string;
    difficulty: "easy" | "medium" | "hard";
    testCase: ITestCase[]
    codeStubs: ICodeStubs[],
    editurial?: string
}

const problemService = new mongoose.Schema<IProblemService>({
    title: {
        type: String,
        required: [true, "problem service title is required."],
        max: 200
    },
    description: {
        type: String,
        required: [true, "problem service title is required."],
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: [true, "problem difficuly is required."],
        default: "easy"
    },
    testCase: [
        {
            input: {
                type: String,
                required: [true, "input test case is required"]
            },
            output: {
                type: String,
                required: [true, "output test case is required"]
            }
        }
    ],
    codeStubs: {
        languages: {
            type: String,
            enum: ["CPP", "JAVA", "PYTHON"],
            require: [true, "language is required."],
        },
        startSnippet: {
            type: String
        },
        endSnippet: {
            type: String
        },
        userSnippet: {
            type: string
        }
    },
}, { timestamps: true });

const problem: Model<IProblemService> = mongoose.model<IProblemService>("Problem", problemService);

export default problem;