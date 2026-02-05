const { Router } = require("express");
const {
  userMiddleware,
  jwtVerifyUserMiddleware,
} = require("../middlewares/user.middleware");
const courseMiddleware = require("../middlewares/course.middleware");
const uRouter = Router();
const {
  userLogin,
  userSignup,
  userPurchase,
} = require("../controllers/user.controller");

uRouter.post("/signup", userMiddleware, userSignup, (req, resp) => {
  resp.send("user has signed up successfully.");
}); //checked - working perfect

uRouter.post("/login", userMiddleware, userLogin, (req, resp) => {
  resp.setHeader("authorization", req.token);
  resp.send("user has logged in successfully.");
});

uRouter.post(
  "/course/purchase",
  jwtVerifyUserMiddleware,
  userPurchase,
  (req, resp) => {
    resp.send("user has purchased the course successfully.");
  },
);

module.exports = uRouter;
