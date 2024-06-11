require("dotenv").config();

let port = process.env.PORT;
let email = process.env.EMAIL;
let password = process.env.PASSWORD;

module.exports = {
    port,
    email,
    password
}