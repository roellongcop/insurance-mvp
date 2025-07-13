import { Pool } from 'pg'

// Reads DATABASE_URL from env (as set in docker-compose)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export default pool
