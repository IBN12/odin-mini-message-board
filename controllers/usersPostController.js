import db from "../models/queries.js";

// userPostControllerGet(): Will get all the data in our table to display on the index page.
const userPostControllerGet = async (req, res) => {
    const messages = await db.getAllUserPosts();
    console.log(messages); // Testing 
    
    res.status(200).render("index", {
        title: "MINI MESSAGEBOARD", 
        messages: messages 
    });
}

export default { userPostControllerGet }; 