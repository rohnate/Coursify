const { Router } = require("express");
const adminMiddleware = require("../middlewares/admin.middleware");
const courseMiddleware = require("../middlewares/course.middleware");
const {
  adminSignup,
  adminLogin,
  createCourse,
  deleteCourse,
  courseEdit,
} = require("../controllers/admin.controller");
const aRouter = Router();

aRouter.post("/signup", adminMiddleware, adminSignup, (req, resp) => {
  resp.send("Admin has signed-up Successfully.");
}); // checked - working perfect

aRouter.post("/login", adminMiddleware, adminLogin, (req, resp) => {
  const token = req.token;
  resp.setHeader("authorization", token);
  resp.send("Admin logged in successfully.");
}); // checked - working perfect

aRouter.post("/create-course", courseMiddleware, createCourse, (req, resp) => {
  resp.send("The course has been created by the admin");
});

aRouter.delete("/delete-course", function (req, resp) {
  resp.send("admin delete-course");
});

aRouter.put("/course-edit", function (req, resp) {
  resp.send("admin course-edit");
});

module.exports = aRouter;
