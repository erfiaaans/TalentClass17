const { Pool } = require('pg');

const pool = new Pool({
    host: "aws-0-ap-southeast-1.pooler.supabase.com",  
    port:"6543",
    user: "postgres.emgbngviykfigbcwfcon",  
    database: "postgres",  
    password: "nTk$-Grxejf3kmM",
    port: 5432,  
    max: 10,  
    idleTimeoutMillis: 3000,  
    connectionTimeoutMillis: 2000,  
});

module.exports = pool;