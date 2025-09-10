import { Pool } from "pg";
import 'dotenv/config';

// export const pool = new Pool({
//     host: process.env.host,
//     user: process.env.user,
//     database: process.env.database,
//     password: process.env.password,
//     port: process.env.port,
// }); 


export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});


/** |Railway Variables For Database|
 * => Original Content:
 * DATABASE_URL = postgresql://${{PGUSER}}:${{POSTGRES_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:5432/${{PGDATABASE}}
 * 
 * => New Content:
 * postgresql://${{PGUSER}}:${{POSTGRES_PASSWORD}}@${{PGHOST}}:5432/${{PGDATABASE}}
 */