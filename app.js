// * modules
const express = require("express");

// * importing files
const config = require("./config/config");
const router = require("./router/router");

// * configurations
const app = express();
app.use("/", router);

// * starting the app
app.listen(config.port, () => {
    console.log("server is running on port " + config.port);
});