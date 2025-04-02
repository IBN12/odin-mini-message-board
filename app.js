const express = require("express"); 
const path = require("node:path");

const newMessageRouter = require('./routes/new');

const messages = require('./models/messagesDatabase'); 

const app = express(); 
const PORT = 8000;

/** |Project: Mini Message Board|
 * 1. Set up a basic Express app by installing 'Express' and 'EJS'. Set up a basic
 * index route and run your server. Create the required folders and files as
 * discussed in the previous lessons. 
 * 
 * 2. We are going to have 2 routes, the index ("/") and a "new message" form ("/new"); 
 * 
 * 3. Create an array at the top of your index router called 'messages' and put a couple
 * of sample messages inside of it like this.
 * 
 * 4. Next, in your 'index' template (in the "views" folder) loop through the messages array 
 * and for each one, display the user, text and the date the message was added. Don't forget
 * to make your messages available to your template by including it in the 'res.render' 'locals'
 * object (e.g. 'res.render("index", { title:  "Mini Messageboard", messages: messages })).
 */

// Serving Static Assets:
const assetsPath = path.join(__dirname, "public"); 
app.use(express.static(assetsPath)); 

// Locating our views for folder for EJS. 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Index Route: 
app.get("/", (req, res) =>{
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

// Standard routes for each category:
app.use("/new", newMessageRouter); // New Message Router

app.listen(PORT, () => { console.log(`Server is running on PORT ${PORT}.`); });