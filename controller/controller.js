const nodemailer = require("nodemailer");
const config = require("../config/config");

const DeveloperContactMailer = async (name, email, message) => {
    try {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: config.email,
                pass: config.password
            }
        });

        const mailOption = {
            from: config.email,
            to: config.email,
            subject: 'MuscleMaven: Developer Contact',
            html: `
            <h4>From:</h4>:
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <br>
            <br>
            <h4>Message:<h4>
            <p>${message}</p>
            `
        }
        transport.sendMail(mailOption, (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Mail sent ✔")
            }
        });

    } catch (error) {
        console.log(error.message);
    }
}

const FeedbackMailer = async (name, email, message) => {
    try {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: config.email,
                pass: config.password
            }
        });

        const mailOption = {
            from: config.email,
            to: config.email,
            subject: 'MuscleMaven: Feedback',
            html: `
            <h4>From:</h4>:
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <br>
            <br>
            <h4>Feedback:<h4>
            <p>${message}</p>
            `
        }
        transport.sendMail(mailOption, (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Mail sent ✔")
            }
        });

    } catch (error) {
        console.log(error.message);
    }
}

const Load = async (req, res) => {
    try {
        res.status(200).render("Load");
    } catch (error) {
        console.log(error.message);
    }
}

const DeveloperContactLoad = async (req, res) => {
    try {
        res.render("DeveloperContact");
    } catch (error) {
        console.log(error.message);
    }
}

const DeveloperContacting = async (req, res) => {
    try {
        let { name, email, message } = await req.body;
        await DeveloperContactMailer(name, email, message);
        res.redirect("/");
    } catch (error) {
        console.log(error.message);
    }
}

const FeedbackLoad = async (req, res) => {
    try {
        res.render("Feedback");
    } catch (error) {
        console.log(error.message);
    }
}

const FeedbackConnecting = async (req, res) => {
    try {
        let { name, email, message } = await req.body;
        await FeedbackMailer(name, email, message);
        res.redirect("/");
    } catch (error) {
        console.log(error.message);
    }
}

const PrivacyAndPolicies = async (req, res) => {
    try {
        res.render("PrivacyAndPolicies")
    } catch (error) {
        console.log(error.message);
    }
}

const ChatRoom = async (req, res) => {
    try {
        res.render("ChatRoom");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    Load,
    DeveloperContactLoad,
    DeveloperContacting,
    FeedbackLoad,
    FeedbackConnecting,
    PrivacyAndPolicies,
    ChatRoom
}