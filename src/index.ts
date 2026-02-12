import bodyParser from "body-parser";
import express from "express";

import serverConfig from "./config/serverConfig";
import connectDb from "./db/dbConnection";
import apiRouter from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/ping", (req, res) => {
    return res.send({ message: "Server is alive" });
});

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running at port ${serverConfig.PORT}`);
    connectDb();
});