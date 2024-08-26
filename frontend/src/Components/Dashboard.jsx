import React, { useState } from 'react'
import Editposts from './Editposts';
import Post from './Post';

const Dashboard = ({postList, editPosts, deletePosts}) => {
  
  return (
    <div className="album py-5 bg-body-tertiary w-100">
    <div className="container-fluid">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {postList.map((post) => <Post deletePosts={deletePosts} editPosts={editPosts} post={post}  key={post._id}/>)}
      </div>
    </div>
  </div>
  )
}

export default Dashboard