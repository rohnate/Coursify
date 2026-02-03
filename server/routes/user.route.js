const { Router } = require("express");
const adminMiddleware = require("../middlewares/admin.middleware");
const courseMiddleware = require("../middlewares/course.middleware");
const uRouter = Router();
const {
  userLogin,
  userSignup,
  userPurchase,
} = require("../controllers/user.controller");

uRouter.post("/signup", adminMiddleware, userSignup, (req, resp) => {
  resp.send("user has signed up successfully.");
}); //checked - working perfect

uRouter.post("/login", adminMiddleware, userLogin, (req, resp) => {
  resp.setHeader("authorization", req.token);
  resp.send("user has logged in successfully.");
});

uRouter.post("/course/purchase", function (req, resp) {
  resp.send("purchase page");
});

module.exports = uRouter;
