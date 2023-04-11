const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { verifyToken } = require("../middleware/authJWT");

const router = express.Router();

router.route("/").post(registerUser).get(verifyToken, allUsers);
router.post("/login", authUser);

module.exports = router;
