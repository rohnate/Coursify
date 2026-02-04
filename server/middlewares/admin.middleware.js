const uValidator = require("../validators/user.validator");
const jwt = require("jsonwebtoken");

function adminMiddleware(req, resp, next) {
  try {
    // Parse and validate the request body
    const validateInputForAdmin = uValidator.parse(req.body);

    // todo : parse() throws an error (needs try-catch)
    // todo : safeParse() returns {success: boolean, data/error} (no try-catch needed)

    // If validation passes, attach validated data to request
    req.validatedData = validateInputForAdmin;

    // Move to next middleware/route/controller(in this case) handler
    next();
  } catch (error) {
    // If validation fails, send error response
    return resp.status(400).json({
      message: "Admin Validation Failed",
      error: error.message,
    });
  }
}

function jwtVerifyAdminMiddleware(req, resp, next) {
  const token = req.headers.authorization;

  if (!token) {
    return resp.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_ADMIN_SECRET);
    req.adminId = decoded.id;
    next();
  } catch (e) {
    return resp
      .status(401)
      .json({ message: "Invalid Token", error: e.message });
  }
}

module.exports = { adminMiddleware, jwtVerifyAdminMiddleware };
