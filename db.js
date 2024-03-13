const { Pool } = require('pg');

const pool = new Pool({
  user: 'Intankamuh',
  password: 'intan221003',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'your_database_name'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};