import React, { useContext, useState } from 'react'
import Editposts from './Editposts';
import Post from './Post';
import { postStore } from '../store/PostStore';

const Dashboard = () => {
  const {postList} = useContext(postStore)
  return (
    <div className="album py-5 bg-body-tertiary w-100">
    <div className="container-fluid">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {postList.map((post) => <Post  post={post}  key={post._id}/>)}
      </div>
    </div>
  </div>
  )
}

export default Dashboard