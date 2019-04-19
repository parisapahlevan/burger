var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "DeviceRotationRate",
    password: "root",
    database:"burgers_db"
});



connection.connect(function(error){
    if (err)
    console.log(err);
    console.log("connected as id" + connection.threadId)
});

module.exports = connection;