const express = require("express");
const app = express();
const port = 3000;

app.get("/shop", (req, res) => res.send("Hello Shop!"));
app.get("/shop/:id", (req, res) => res.send(`Hello Shop ${req.params.id}!`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
