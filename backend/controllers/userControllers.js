const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async () => {
  const { name, email, password, pfp } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Input all fields");
  }

  const userExists = await User;
});
