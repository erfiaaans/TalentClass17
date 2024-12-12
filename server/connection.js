const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "localhost",
    user: "aetherylo",
    database: "talent_class_17",
    password: "stack45skypiercer",
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
// const promisePool = pool.promise();
module.exports = pool;