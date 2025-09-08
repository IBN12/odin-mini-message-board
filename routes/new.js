import express from "express";

const newMessageRouter = express.Router();

import { newMessageGet, newMessagePost } from "../controllers/newMessageController.js";

// Get Route: Main page for a new user message. 
newMessageRouter.get("/", newMessageGet); 

// Post Route: Mains page for posting a new user message.
newMessageRouter.post("/", newMessagePost);

export default newMessageRouter; 