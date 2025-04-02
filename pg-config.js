const Pool = require("pg").Pool;

const pool = new Pool({
    user: "sully",
    host: "localhost",
    database: "mydb",
    password: "password",
    port: 5432,
});

module.exports = {
    pool
};