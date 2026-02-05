const { Router } = require("express");
const cRouter = Router();
const {
  courses,
  myCourses,
  courseContent,
} = require("../controllers/course.controller");
const { jwtVerifyUserMiddleware } = require("../middlewares/user.middleware");

cRouter.get("/", courses, function (req, resp) {
  const allCourses = req.courses;
  resp.json(allCourses);
});

cRouter.get(
  "/mycourses",
  jwtVerifyUserMiddleware,
  myCourses,
  function (req, resp) {
    // for now, this route will only work for user not for admin.
    const userCourses = req.userPurchase;
    resp.json(userCourses);
  },
);

cRouter.get(
  "/course-content",
  jwtVerifyUserMiddleware,
  courseContent,
  function (req, resp) {
    resp.send("course-content");
  },
);

module.exports = cRouter;
