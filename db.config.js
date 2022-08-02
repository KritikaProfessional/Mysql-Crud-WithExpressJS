const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Nav@gur1',
  database : 'node_mysql_crud_db'
});

dbConn.connect(function(err){
    if (err) throw err;
    console.log("database connected");
});

// var table = `CREATE TABLE employees (id INT AUTO_INCREMENT PRIMARY KEY,
//   first_name VARCHAR(255) NOT NULL,last_name VARCHAR(255) NOT NULL, 
//   email VARCHAR(255) NOT NULL,phone VARCHAR(32) NOT NULL,organization VARCHAR(255) NOT NULL,designation VARCHAR(100) NOT NULL,
//   salary DECIMAL(11,2) UNSIGNED DEFAULT 0.00,status TINYINT UNSIGNED DEFAULT 0,is_deleted TINYINT UNSIGNED DEFAULT 0,
//   created_at DATETIME NOT NULL,updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`
// dbConn.query(table,function(err,result){ 
//   if (err) throw err;
//   console.log("Table created created")
// });

var data_input = "INSERT INTO employees (first_name, last_name, email, phone,organization, designation,salary, status, is_deleted, created_at, updated_at) VALUES ?";
var values = [['John', 'Doe', 'johndoe@gmail.com', '1234567890', 'BR Softech Pvt Ltd', 'Full Stack Developer', 500.00, '1', '0', '2019-11-19 03:30:30','2019-11-19 04:30:30']];
dbConn.query(data_input,[values], function (err, result) {
  if(err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    console.log('There is no changes in the update, lets continue the progress...');
    console.log("record inserted...");
});
  
module.exports = dbConn;
