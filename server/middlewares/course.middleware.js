const cValidator = require("../validators/course.validator");

function courseMiddleware(req, resp, next) {
  try {
    // Parse and validate the request body
    req.validatedCourseData = cValidator.parse(req.body);
    // Move to next middleware/route/controller(in this case) handler
    next();
  } catch (e) {
    return resp.status(400).json({
      message: "course validation failed",
      error: e.message,
    });
  }
}

module.exports = courseMiddleware;
