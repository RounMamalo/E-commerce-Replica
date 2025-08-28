const express = require("express");
const router = express.Router();
const { getPosts, getPost, createPost, editPost, destroyPost } = require('../controllers/postController')

//Posts API
router.route("/").get(getPosts);
router.route("/:id").get(getPost);
router.route("/").post(createPost);
router.route("/:id").put(editPost);
router.route("/:id").delete(destroyPost);

// Should Create a different route for different functionality
// router.route("/profile/:id").get((req, res) => {
//     res.status(200).json({message:`Get profile information ${req.params.id}`});
// });

// router.route("/messages").get((req, res) => {
//     res.status(200).json({message:"Get all messages"});
// });

// router.route("/friends").get((req, res) => {
//     res.status(200).json({message:"Get all friends"});
// });

module.exports = router;