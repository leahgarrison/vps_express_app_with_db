import PG from 'pg'
const Pool = PG.Pool;

// const Pool = require('pg').Pool
const pool = new Pool({
  user: 'leah',
  host: 'localhost',
  database: 'api',
  password: 'starplayer421',
  port: 3000,
})

export const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

