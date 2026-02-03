const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uModel = require("../models/user.model");
const pModel = require("../models/purchase.model");

async function userLogin(req, resp, next) {
  const { email, password } = req.validatedData;
  try {
    const user = await uModel.findOne({ email });
    if (!user) {
      resp.status(401).json({
        message: "User not found, Invalid Email or password",
      });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        resp.status(401).json({
          message: "Invalid user Password, Please try again.",
        });
      } else {
        // If in future i want to do cookies or session based logic instead of token then below logic will change.
        const token = jwt.sign({ id: user._id }, process.env.JWT_USER_SECRET, {
          expiresIn: "30d",
        });
        req.token = token;

        //todo: next() is not a data carrier. so cannot do like next(token)
        next();
      }
    }
  } catch (e) {
    resp.status(400).json({
      message: "Something unexpected occured during user login",
      error: e.message,
    });
  }
}

async function userSignup(req, resp, next) {
  const { email, password, firstName, lastName } = req.validatedData;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await uModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    next();
  } catch (e) {
    return resp.status(400).json({
      message: "Error during user signup",
      error: e.message,
    });
  }
}

function userPurchase(params) {}

module.exports = {
  userLogin,
  userSignup,
  userPurchase,
};
