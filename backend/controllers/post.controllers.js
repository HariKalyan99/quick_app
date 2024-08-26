import Post from "../models/posts.models.js"

export const getAllPosts = async(request, response) => {
    try {
        const posts = await Post.find({});
        return response.status(200).json(posts);
    } catch (error) {
        console.log("Error in the getAllPosts controller", error.message);
        return response.status(500).json({error: "Internal server error"})
    }
}
export const addPost = async(request, response) => {
    try {
        const {userId, title, body, reactions, tags} = request.body;
        const res = new Post({userId, title, body, reactions, tags});
        const posts = await res.save();
        return response.status(201).json(posts);
    } catch (error) {
        console.log("Error in the addPost controller", error.message);
        return response.status(500).json({error: "Internal server error"})
    }
}
export const editPost = async(request, response) => {
    try {
        const {id} = request.params;
        console.log(id)
        const result = await Post.findOneAndUpdate({_id: id}, {...request.body}, {new: true});
        return response.status(200).json(result)
    } catch (error) {
        console.log("Error in the editPost controller", error.message);
        return response.status(500).json({error: "Internal server error"})
    }
}
export const deletePost = async(request, response) => {
    try {
        const {id} = request.params;
        const result = await Post.findOneAndDelete({_id: id});
        return response.status(200).json(result)
    } catch (error) {
        console.log("Error in the deletePost controller", error.message);
        return response.status(500).json({error: "Internal server error"})
    }
}