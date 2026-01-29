const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.port;

app.use(express.json());

app.post("/signup", function (req, resp) {});
app.post("/login", function (req, resp) {});
app.get("/courses", function (req, resp) {});
app.post("/user/course/purchase", function (req, resp) {});
app.get("/user/mycourses", function (req, resp) {});
