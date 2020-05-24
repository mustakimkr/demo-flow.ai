const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.LOCAL_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
db.connect((e) => {
  if (e) {
    return e;
  }
  console.log("mysql connected!");
});

module.exports = db;
