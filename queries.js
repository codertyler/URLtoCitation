const Pool = require("pg").Pool;

//Connecting to the server
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "urltocitation",
  password: "password",
  port: 5432,
});

const addUser = (user) => {
  return pool.query(
    `INSERT INTO users (email, password)
  VALUES ($1, $2)
  RETURNING *;`,
    [user.email, user.password]
  ).catch((err) => {
    console.error("This is the error", err);
  })
};

exports.addUser = addUser;
