const { Router } = require("express");
const adminMiddleware = require("../middlewares/admin.middleware");
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
});

aRouter.post("/login", function (req, resp) {
  resp.send("admin login");
});

aRouter.use(adminMiddleware);

aRouter.post("/create-course", function (req, resp) {
  resp.send("admin create-course");
});

aRouter.delete("/delete-course", function (req, resp) {
  resp.send("admin delete-course");
});

aRouter.put("/course-edit", function (req, resp) {
  resp.send("admin course-edit");
});

module.exports = aRouter;
