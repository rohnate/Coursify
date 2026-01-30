const { Router } = require("express");
const cRouter = Router();

cRouter.get("/courses", function (req, resp) {
  resp.send("courses page");
});

cRouter.get("/mycourses", function (req, resp) {
  resp.send("mycourses page");
});

cRouter.get("/course-content", function (req, resp) {
  resp.send("course-content");
});

module.exports = cRouter;
