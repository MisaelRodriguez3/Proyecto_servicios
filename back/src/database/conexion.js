const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    port: process.env.puerto,
    password: process.env.PASSWORD_BD,
    database: process.env.NAME_BD
});

connection.connect(error => {
    if (error)
        throw error;
    console.log('La conexion con mysql es correcta');
});

module.exports = connection;