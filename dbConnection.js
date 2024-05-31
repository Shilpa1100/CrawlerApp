var mysql = require('mysql2');

var con = getConnection();
function getConnection(){
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crawler_db"
  });
} 

exports.con = con;