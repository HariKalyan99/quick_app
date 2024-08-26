import React, { useState } from 'react'
import Editposts from './Editposts';

const Post = ({post, editPosts, deletePosts}) => {
    const [editView, setEditView] = useState(false);

   
  const handleEdit = () => {
    setEditView(!editView)
  }

  const handleDelete = (id) => {
    deletePosts(id)
  }

  
  return (
    <div className="col">
        {editView ? <Editposts editView={editView} setEditView={setEditView} editPosts={editPosts} post={post}/> : <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div className="card-body">
                <h5>{post.userId}</h5>
              <h3 className="card-text">{post.title}</h3>
              <p className="card-text">{post.body}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  {post.tags.map((tag, ind) => <button key={ind} type="button" className="btn btn-sm btn-outline-secondary">{tag}</button>
                  )}
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
                <button type="button" className="btn btn-lg my-2 btn-outline-danger" onClick={handleEdit}>Edit</button>
                <button type="button" className="btn btn-lg my-2 mx-2 btn-outline-danger" onClick={() => handleDelete(post._id)}>Delete</button>
            </div>
          </div>}
          
        </div>
  )
}

export default Post