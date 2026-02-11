import express from "express";

import serverConfig from "./config/serverConfig";

const app = express();

app.get("/ping", (req, res) => {
    return res.send({ message: "Server is alive" });
});


app.listen(serverConfig.PORT, () => {
    console.log(`Server is running at port ${serverConfig.PORT}`);
});