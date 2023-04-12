const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
} = require("../controllers/chatControllers");
const { verifyToken } = require("../middleware/authJWT");
const router = express.Router();

router.route("/").post(verifyToken, accessChat);
router.route("/").get(verifyToken, fetchChats);
router.route("/group").post(verifyToken, createGroupChat);
router.route("/rename").put(verifyToken, renameGroup);
router.route("/add").put(verifyToken, addToGroup);
router.route("/remove").put(verifyToken, removeFromGroup);

module.exports = router;
