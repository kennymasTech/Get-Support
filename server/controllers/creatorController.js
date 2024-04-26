const Post = require("../models/PostModel");
const Audio = require("../models/AudioModel");
const Video = require("../models/VideoModel");
const User = require("../models/userModel");
const cloudinary = require("cloudinary").v2;

// console.log(User);

//Create Posts
const createPost = async (req, res) => {
  try {
    const userId = req.userId;
    const postDetails = req.body;
    console.log(postDetails)
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    if(postDetails.type==='text'){

      const post = new Post({
        user: userId,
        ...postDetails
      });
  
      await post.save();
      res.status(201).json({ post });
    } else {
      const result = await cloudinary.uploader.upload(postDetails.fileUrl, {
        folder: "posts",
        resource_type: "auto",
      });
      const post = new Post({
        user: userId,
        fileUrl: result.secure_url,
        type: postDetails.type,
        title: postDetails.title,
        description: postDetails.description,
      });

      await post.save();
      res.status(201).json({ post });
    }
  } catch (error) {
    console.log(error);
  }
};

const uploadVideo = async (req, res) => {
  try {
    const userId = req.userId;

    // Extract data from request body
    const { videoUrl } = req.body;

    // Create a new video instance
    const newVideo = new Video({
      user: userId, // Assuming userId is passed in the request
      videoUrl,
    });

    // Save the video to the database
    await newVideo.save();

    res
      .status(201)
      .json({ message: "Video uploaded successfully", video: newVideo });
  } catch (error) {
    console.error("Error uploading video:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const uploadAudio = async (req, res) => {
    try {
      // Extract data from request body
      const { audioUrl, userId } = req.body;
  
      // Create a new audio instance
      const newAudio = new Audio({
        user: userId, // Assuming userId is passed in the request
        audioUrl
      });
  
      // Save the audio to the database
      await newAudio.save();
  
      res.status(201).json({ message: 'Audio uploaded successfully', audio: newAudio });
    } catch (error) {
      console.error('Error uploading audio:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

 const getPosts = async (req, res) => {
    try {
      const posts = await Post.find().populate({
        path: 'user',
        select: 'name avatar', // Select only name and avatar fields
      }).exec();
      
      res.status(200).json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

module.exports = { createPost, uploadVideo, uploadAudio, getPosts };
