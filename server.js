const express = require("express");

const itemController = require("./queries");

const app = express();
const port = 5000

app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/item", itemController.getAllItems)

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
