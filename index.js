const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const laptop = require('./routes/laptop');
const desktop = require('./routes/desktop');
const hotDeals = require('./routes/hotDeals');
const accessories = require('./routes/accessories');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/laptop',laptop);
app.use('/api/desktop',desktop);
app.use('/api/hotDeals',hotDeals);
app.use('/api/accessories',accessories);

mongoose //database connection string
  .connect("mongodb://localhost/productdb", {
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
