const express = require("express");
const { body } = require("express-validator");


const feedController = require("../controllers/feed");

const router = express.Router();

// GET /feed/posts
router.get("/posts", feedController.getPosts);

// POST /feed/post
router.post("/post", [
    body("title", "Title must not be empty.").trim().isLength({ min: 5 }),
    body("content", "Content must not be empty.").trim().isLength({ min: 5 }),
], feedController.createPost);

router.get("/post/:postId", feedController.getPost);

module.exports = router;
