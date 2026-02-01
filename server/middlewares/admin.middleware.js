const uValidator = require("../validators/user.validator");

function adminMiddleware(req, resp, next) {
  try {
    // Parse and validate the request body
    const validateInputForUser = uValidator.parse(req.body);    

    // todo : parse() throws an error (needs try-catch)
    // todo : safeParse() returns {success: boolean, data/error} (no try-catch needed)

    // If validation passes, attach validated data to request
    req.validatedData = validateInputForUser;

    // Move to next middleware/route/controller(in this case) handler
    next();
  } catch (error) {
    // If validation fails, send error response
    return resp.status(400).json({
      message: "User Validation Failed",
      error: error.message,
    });
  }
}

module.exports = adminMiddleware;
