const { Router } = require("express");
const aRouter = Router();

aRouter.get("/courses", function (req, resp) {
  resp.send("admin courses");
});
aRouter.get("/mycourses", function (req, resp) {
  resp.send("admin courses");
});

module.exports = aRouter;
