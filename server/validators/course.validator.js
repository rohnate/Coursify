// This validated the input data for the course using zod

const { z } = require("zod");

const courseValidator = z.object({
  title: z.string().min(10).max(100),
  description: z.string().min(20).max(2000),
  price: z.number().max(10000),
  imageUrl: z.string(),
  creatorId,
});

module.exports = courseValidator;
