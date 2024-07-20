const mysql = require("mysql2/promise");

async function initializeConnection() {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bookstore",
  });
  return connection;
};

module.exports = initializeConnection;