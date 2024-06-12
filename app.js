// * modules
const express = require("express");

// * importing files
const config = require("./config/config");
const router = require("./router/router");

// * configurations
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
app.use("/", router);

// * socket.io stuff
let activeUsers = [];
io.on("connection", (socket) => {
    let userName = "";
    socket.on("NewUserConnected", (data) => {
        userName = data;
        activeUsers.push(userName);
        console.log(`Active: ${activeUsers.length}`);
        console.log(`User connected: ${userName}`);
        socket.broadcast.emit("userJoined", userName);
        socket.emit("currentUsers", activeUsers);
    });
    socket.on("sendMessage", (message) => {
        io.emit("receiveMessage", { user: userName, message: message });
    });
    socket.on("disconnect", () => {
        if (userName) {
            activeUsers = activeUsers.filter(user => user !== userName);
            console.log(`Active: ${activeUsers.length}`);
            console.log(`User disconnected: ${userName}`);
            io.emit("userLeft", userName);
        }
    });
});

// * starting the app
http.listen(config.port, () => {
    console.log("server is running on port " + config.port);
});