import { body, validationResult } from "express-validator"; 

import db from "../models/queries.js";

const lengthErr = "must be between 1 and 20 characters."; 
const messageErr = "must be between 1 and 300 characters."; 

const validateUserPost = [
    body("name").trim().notEmpty()
        .isLength({min: 1, max: 20}).withMessage(`Name ${lengthErr}`),
    body("message").trim().notEmpty()
        .isLength({min: 1, max: 300 }).withMessage(`Message ${messageErr}`),
]

// newMessageGet(): The new message controller will take the user to the main page to post a new message.
export const newMessageGet = (req, res) => {
    res.status(200).render("form",{
        title: "NEW MESSAGE", 
    });
};

// newMessagePost():
export const newMessagePost = [
    validateUserPost,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        {
            // The error array will only be displayed on the server end. 
            return res.status(400).render("form", {
                errors: errors.array(),
                title: "NEW MESSAGE",
            });
        }

        const { name, message } = req.body;

        const newDate = new Date();
        let year = newDate.getFullYear().toString();
        let month = (newDate.getMonth() + 1).toString();
        let date = newDate.getDate().toString();

        db.insertUserPost({name: name, message: message, date: year+'-'+month+'-'+date}); 

        // Note: We will wait for redirect for 1sec to give the "userPostWindow" time to close. 
        setTimeout(() => {
            res.redirect("/");
        }, 1000);
    }
]