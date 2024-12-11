const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "localhost",
    user: "aetherylo",
    database: "talent_class_17",
    password: "stack45skypiercer",
    port: 3306,
    idleTimeoutMillis: 2000,
    connectionTimeoutMillis: 2000,
});

module.exports = pool;