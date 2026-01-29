const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;
const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection established");
    app.listen(port, () => {
      console.log(`App is listening on port : ${port}`);
    });
  })
  .catch((e) => {
    console.log("Not able to establish the connection with DB");
    console.log(e.message);
  });
