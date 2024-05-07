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
  const title = req.body.title;
  const content = req.body.content;
  const post = {
    _id: new Date().toISOString(),
    title: title,
    content: content,
    creator: { name: "H.E Peter Obi" },
    createdAt: new Date(),
  };
  res.status(201).json({
    message: "Post created successfully!",
    post: post,
  });
};
