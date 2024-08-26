import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {type: Number, required: true, unique: true},
    title: {type: String, required: true, maxlength: 100, unique: true},
    body: {type: String, maxlength: 500, unique: true},
    reactions: {type: Number},
    tags: {type: [String]},
}, {timestamps: true});


const Post = new mongoose.model('Post', postSchema);


export default Post;