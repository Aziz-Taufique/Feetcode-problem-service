import mongoose from "mongoose";

import serverConfig from "../config/serverConfig";

async function connectDb() {
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log("Db connected successfully");
    } catch (error: unknown) {
        console.log("Mngosse connection Error", error);
    }
}

export default connectDb;