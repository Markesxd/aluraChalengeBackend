const mysql = require('mysql2');

const conection = mysql.createConnection({
  "host": "localhost",
  "database": "AluraChalenge",
  "port": "3306",
  "user": "rafa",
  "password": "Cr6)sTYp:UfJ}4)"
})

module.exports = conection;
