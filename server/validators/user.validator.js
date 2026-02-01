// This validates the input data for the user/admin using Zod.

const { z } = require("zod");

const userValidator = z.object({
  email: z.email().toLowerCase().trim(),
  password: z
    .string()
    .min(10, "must be 10 char long")
    .max(30, "can be 30 char long"),
  firstName: z.string().min(5).max(20),
  lastName: z.string().min(2).max(20),
});

module.exports = userValidator;
