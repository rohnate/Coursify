const cModel = require("../models/course.model");
const pModel = require("../models/purchase.model");
const jwt = require("jsonwebtoken");

async function courses(req, resp, next) {
  try {
    const allCourses = await cModel.find();
    req.courses = allCourses;
    next();
  } catch (e) {
    resp.status(500).json({
      message: "Failed to fetch courses",
      error: e.message,
    });
  }
}

async function myCourses(req, resp, next) {
  const token = req.headers.authorization;

  try {
    const userDetail = jwt.verify(token, process.env.JWT_USER_SECRET);
    const userId = userDetail.id;

    const userPurchase = await pModel.find({ userId });
    if (userPurchase.length === 0) {
      return resp.status(404).json({
        message: "User has not purchased any course.",
      });
    }
    req.userPurchase = userPurchase;
    next();
  } catch (e) {
    return resp.status(403).json({
      message: "Error while fetching your courses. Please try again",
      error: e.message,
    });
  }
}

function courseContent() {}

module.exports = {
  courses,
  myCourses,
  courseContent,
};
