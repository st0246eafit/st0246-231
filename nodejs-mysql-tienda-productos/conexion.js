const mysql = require("mysql");
// Coloca aquí tus credenciales
module.exports = mysql.createPool({
  host: "localhost",
  user: "dbuser",
  password: "Eafit2022.",
  database: "tienda"
});