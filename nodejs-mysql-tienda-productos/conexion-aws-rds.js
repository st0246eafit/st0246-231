const mysql = require("mysql");
// Coloca aquí tus credenciales
module.exports = mysql.createPool({
  host: "host-aws-rds",
  user: "dbuser",
  password: "Eafit2023.",
  database: "tienda"
});