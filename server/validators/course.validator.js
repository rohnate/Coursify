// This validated the input data for the course using zod

const { z } = require("zod");

const courseValidator = z.object({
  email: z.email().toLowerCase().trim(),
  // password validation logic should not be here because we anyhow going to send token with the req to create course after admin logs in, just writing here to check the logic
  password: z
    .string()
    .min(10, "must be 10 char long")
    .max(30, "can be 30 char long"),
  title: z.string().min(10).max(100),
  description: z.string().min(20).max(2000),
  price: z.number().max(10000),
  imageUrl: z.string(),
});

module.exports = courseValidator;
