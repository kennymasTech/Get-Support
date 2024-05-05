const {
  getPosts,
  createPost,
  uploadVideo,
  uploadAudio,
  getCreators,
  getCreatorById
} = require("../controllers/creatorController");
const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");
const verifyRoles = require("../middleware/verifyRoles");
// const { Admin, Tutor, Student } = require("../config/roles_list");

const router = express.Router();
router.get("/", getCreators)
router.get("/get-creator/:id", getCreatorById)
router.post("/create-post", verifyJWT, verifyRoles(), createPost);
router.get("/posts", getPosts);

module.exports = router;
