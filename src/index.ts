import express from "express";

import serverConfig from "./config/serverConfig";

const app = express();

app.get("/", (req, res) => {
    res.end("hello");
});


app.listen(serverConfig.PORT, () => {
    console.log(`Server is running at port ${serverConfig.PORT}`);
});