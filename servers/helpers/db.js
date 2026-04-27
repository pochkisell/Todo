require('dotenv').config()
const { Pool } = require('pg')

const connectionConfig = process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
        ssl: {
            rejectUnauthorized: false
        }
    }

const pool = new Pool(connectionConfig)

const query = (sql, values = []) => pool.query(sql, values)

module.exports = {
    query
}
