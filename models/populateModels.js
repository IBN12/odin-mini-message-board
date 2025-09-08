import { Client } from "pg";
import 'dotenv/config';

// For the date column:
const date = new Date();

const SQL = `CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY GENERATED ALWAYS IDENTITY,
    username VARCHAR(20),
    message VARCHAR(300),
    added date
);

INSERT INTO posts (username, message, added) VALUES ('Amando', 'Hi There!', '${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}');
INSERT INTO posts (username, message, added) VALUES ('Charles', 'Hello World!', '${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}');
INSERT INTO posts (username, message, added) VALUES ('Damon', 'Cool message board', '${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}');
`;

// main(): Will create the main database if it doesn't exist. 
async function main(){
    console.log("Seeding...");
    console.log(process.env); // Testing 
    const client = new Client({
        connectionString: `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main(); 