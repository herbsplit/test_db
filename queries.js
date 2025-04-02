const db = require("./pg-config");

const createUser = (req, res) => {
    const { personid, name } = req.body;

    db.pool.query("INSERT INTO person (personid, name) VALUES ($1, $2) RETURNING *;", [personid, name], (err, result) => {
        if (err) {
            throw err;
        }
        
        res.status(201).send(`Person added with ID: ${result.rows[0].id}`);
    });
}

const getAllItems = (req, res) => {
    db.pool.query("SELECT * FROM item", (err, result) => {
        if (err) {
            throw err;
        }

        res.status(200).json(result.rows);
    });
}

module.exports = {
    getAllItems, createUser
}