`use strict`;
const express = require("express");
const app = express();

//parse incoming object as JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello world!");
});

const port = process.env.PORT || 3000;

module.exports = app;
app.listen(port, () => console.log(`Server is listening on port ${port}.`));
