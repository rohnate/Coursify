const aModel = require("../models/admin.model");
const cModel = require("../models/course.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function adminSignup(req, resp, next) {
  const { email, password, firstName, lastName } = req.validatedData;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await aModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    next();
  } catch (e) {
    return resp.status(400).json({
      message: "Error during admin signup",
      error: e.message,
    });
  }
}

// ! req lives for the entire request lifecycle. Every middleware & controller can access it

async function adminLogin(req, resp, next) {
  const { email, password } = req.validatedData;
  try {
    const user = await aModel.findOne({ email });
    if (!user) {
      resp.status(401).json({
        message: "Admin not found, Invalid Email or password",
      });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        resp.status(401).json({
          message: "Invalid admin Password, Please try again.",
        });
      } else {
        // If in future i want to do cookies or session based logic instead of token then below logic will change.
        const token = jwt.sign({ id: user._id }, process.env.JWT_ADMIN_SECRET, {
          expiresIn: "30d",
        });
        req.token = token;

        //todo: next() is not a data carrier. so cannot do like next(token)
        next();
      }
    }
  } catch (e) {
    resp.status(400).json({
      message: "Something unexpected occured during admin login",
      error: e.message,
    });
  }
}

async function createCourse(req, resp, next) {
  const { email, password, title, description, price, imageUrl } =
    req.validatedCourseData;

  try {
    const admin = await aModel.findOne({ email });
    const passwordCheck = await bcrypt.compare(password, admin.password);
    if (!passwordCheck) {
      resp.status(401).json({
        message: "Incorrect password for create course",
      });
    } else {
      await cModel.create({
        title,
        description,
        price,
        imageUrl,
        creatorId: admin._id,
      });
    }
    next();
  } catch (error) {
    resp.status(400).json({
      message: "user not found, create course",
      error: error.message,
    });
  }
}

async function deleteCourse(req, resp, next) {
  const { email, password, title } = req.validatedCourseData;

  try {
    const admin = await aModel.findOne({ email });
    const passwordCheck = await bcrypt.compare(password, admin.password);
    if (!passwordCheck) {
      resp.status(401).json({
        message: "Incorrect password for delete course",
      });
    } else {
      await cModel.findOneAndDelete({
        title,
        creatorId: admin._id,
      });
    }
    next();
  } catch (error) {
    resp.status(400).json({
      message: "unexpected error during course deletion",
      error: error.message,
    });
  }
}

async function courseEdit(req, resp, next) {}

module.exports = {
  adminSignup,
  adminLogin,
  createCourse,
  deleteCourse,
  courseEdit,
};
