const eBook = require("./../models/eBooks");

exports.upload = async (req, res) => {
  try {
    const { title, author, imageUrl, description, link, category } = req.body;

    const post = new eBook({
      title,
      author,
      imageUrl,
      description,
      link,
      category,
    });

    const savedPost = await post.save();

    res.json({
      post: savedPost,
      success: true,
      message: "eBook Uploaded Successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Error while Saving Post!",
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({
      posts,
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error While getting posts!",
    });
  }
};
