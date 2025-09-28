import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { 
    type: String, 
    enum: ["Travel/Places", "Books", "Studies"], 
    required: true 
  },
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

export default Post;
