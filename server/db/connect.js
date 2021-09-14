const { Pool } = require("pg");
require("dotenv").config();

const uri = process.env.NODE_ENV === "development" ? process.env.DEV_DB : process.env.TEST_DB;

const pool = new Pool({
  connectionString: uri,
});

module.exports = pool;