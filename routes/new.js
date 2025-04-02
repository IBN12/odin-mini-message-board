const Router = require('express');

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => res.send("You will post new messages here."));

module.exports = newMessageRouter;