const Router = require('express');

const newMessageRouter = Router();

const messages = require('../models/messagesDatabase');

newMessageRouter.get("/", (req, res) => {
    res.status(200).render("form");
});

newMessageRouter.post("/", (req, res) => {
    console.log("Post Name: ", req.body.name); // Testing
    console.log("Post Message: ", req.body.message); // Testing

    messages.push({text: req.body.message, user: req.body.name, added: new Date() });

    console.log("Messages Object: ", messages); // Testing 

    // Note: Won't need to redirect since 'New Post Window' will pop up on the page.
    // User will just need to click the 'New Post Button' to open the window from the
    // index template. 
    setTimeout(() =>{
        res.redirect("/"); 
    }, 1000);
    
});

module.exports = newMessageRouter;