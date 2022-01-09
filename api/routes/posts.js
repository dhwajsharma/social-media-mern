const router = require("express").Router();
const Post = require("../models/Post");

// create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated successfully");
    } else {
      res.status(403).json("You can update only your post.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("The post has been deleted successfully");
    } else {
      res.status(403).json("You can delete only your post.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// like a post

// get a post
// get timeline posts
module.exports = router;
