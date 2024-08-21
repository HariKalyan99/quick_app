import express from 'express';
import { addPost, deletePost, editPost, getAllPosts } from '../controllers/post.controllers.js';

const router = express.Router();


router.get("/all/posts", getAllPosts);
router.post("/add/posts", addPost);
router.put("/edit/posts/:id", editPost);
router.delete("/del/posts/:id", deletePost);


export default router;