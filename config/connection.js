//connection.js respansble of connect rest of files and folders to burger DB
const mysql = require("mysql");
const style = require("chalk")

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "r2005moner",
    database: "burgers_db"
});
console.log("connection.js is connected");
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});



module.exports = connection;