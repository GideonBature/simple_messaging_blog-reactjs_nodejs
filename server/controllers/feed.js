const { validationResult } = require("express-validator");
const Post = require('../models/post')

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post",
        imageUrl: "../images/H.E Peter Obi.jpeg",
        creator: {
          name: "H.E Peter Obi"
        },
        createdAt: new Date(),
      },

    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = req.validationResult();
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed, entered data is incorrect.",
      errors: errors.array(),
    });
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: '../images/H.E Peter Obi.jpeg',
    creator: { name: "H.E Peter Obi" },
  });
  post
    .save()
    .then(result => {
    console.log(result);
    res.status(201).json({
      message: "Post created successfully!",
      post: result
    });
  })
  .catch(err => {
    console.log(err);
  });
};
