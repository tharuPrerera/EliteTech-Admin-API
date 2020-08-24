const express = require("express");
const app = express();
const PORT = 6000;

app.use(express.json());

app.listen(PORT, function () {
    console.log("Listening on port - " + PORT);
  });