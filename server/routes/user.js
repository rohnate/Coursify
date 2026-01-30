const { Router } = require("express");

const uRouter = Router();

uRouter.post("/signup", function (req, resp) {
  resp.send("signup page");
});
uRouter.post("/login", function (req, resp) {
  resp.send("login page");
});
uRouter.get("/courses", function (req, resp) {
  resp.send("courses page");
});
uRouter.post("/course/purchase", function (req, resp) {
  resp.send("purchase page");
});
uRouter.get("/mycourses", function (req, resp) {
  resp.send("mycourses page");
});

module.exports = uRouter;
