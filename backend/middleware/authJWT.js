const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const verifyToken = asyncHandler(async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    try {
      const decoded = jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.JWT
      );

      req.user = await User.findById(decoded.id).select("-password");
      next();
      //   function (err, decode) {
      //     if (err) req.user = undefined;
      //     User.findOne({
      //       _id: decode.id,
      //     }).exec((err, user) => {
      //       if (err) {
      //         res.status(500).send({
      //           message: err,
      //         });
      //       } else {
      //         req.user = user;
      //         next();
      //       }
      //     });
      //   }
    } catch (error) {
      res.status(401);
      throw new Error("not authorized, bad token");
    }
  else {
    res.status(401);
    throw new Error("no token");
  }
});
module.exports = { verifyToken };
