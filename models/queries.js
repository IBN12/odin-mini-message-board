import { pool } from "./pool.js";

// Will grab all the user post from the database:
async function getAllUserPosts(){
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows; 
}

// Will insert data into the database (table):
async function insertUserPost(post){
    // console.log(post); // Testing 
    await pool.query("INSERT INTO posts (username, message, added) VALUES ($1, $2, $3)", [post.name, post.message, post.date]);
}

export default {getAllUserPosts, insertUserPost}; 