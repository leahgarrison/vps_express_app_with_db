import "dotenv/config";
import PG from 'pg'
const Pool = PG.Pool;


// const Pool = require('pg').Pool
const pool = new Pool({
  // user: process.env.DB_NAME,
  // host: process.env.DB_HOST,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASS,
  user: "leah",
  host: "localhost",
  database: "postgres",
  password: "another",
  port: 5432,
})

export const getUsers = async (request, response) => {
  await pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      console.log(error)
      // throw error
    }
    response.status(200).json(results.rows)
  })
}

