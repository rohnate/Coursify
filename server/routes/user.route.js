const { Router } = require("express");
const userMiddleware = require("../middlewares/user.middleware");
const uRouter = Router();

uRouter.post("/signup", function (req, resp) {
  resp.send("signup page");
});

uRouter.post("/login", function (req, resp) {
  resp.send("login page");
});

uRouter.use(userMiddleware);

uRouter.post("/course/purchase", function (req, resp) {
  resp.send("purchase page");
});

module.exports = uRouter;
