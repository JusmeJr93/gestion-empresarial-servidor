import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export const dbConnection = () => {
    if (process.env.JAWSDB_URL) {
        const pool = mysql.createPool(process.env.JAWSDB_URL);
        return pool.promise();
    } else {
        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        return pool.promise();
    }
};
