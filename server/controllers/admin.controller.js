const aModel = require("../models/admin.model");
const bcrypt = require("bcrypt");

async function adminSignup(req, resp, next) {
  const { email, password, firstName, lastName } = req.validatedData;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await aModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    next();
  } catch (e) {
    resp.status(400).json({
      message: "Something unexpected occured",
      error: e.message,
    });
  }
}
function adminLogin() {}
function createCourse() {}
function deleteCourse() {}
function courseEdit() {}

module.exports = {
  adminSignup,
  adminLogin,
  createCourse,
  deleteCourse,
  courseEdit,
};
