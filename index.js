const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 6000;

app.use(express.json());

mongoose //database connection string
  .connect("mongodb://localhost/itemdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Db successfully..."))
  .catch((err) =>
    console.log("Error has occured while connecting to db : ", err)
  );

app.listen(PORT, function () {
    console.log("Listening on port - " + PORT);
  });