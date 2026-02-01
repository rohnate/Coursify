const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Here we are loading .env once into the process.env

const userRouter = require("./routes/user.route"); // importing the router from the specific router file.
const adminRouter = require("./routes/admin.route");
const courseRouter = require("./routes/course.route");

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.use("/api", courseRouter);
app.use("/user", userRouter); // this is how to use the Routes on to the main file
app.use("/admin", adminRouter);

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
