import { useEffect, useState } from "react";
import Createposts from "./Components/Createposts";
import Dashboard from "./Components/Dashboard";
import Head from "./Components/Head";
import Sidebar from "./Components/Sidebar";
import axios from "axios";

function App() {
  const [getView, setView] = useState("home");
  const [postList, setPostList] = useState([]);
  const [getAddPosts, setAddPosts] = useState("");
  const [getEditPosts, setEditPosts] = useState("");
  const [getDeletePosts, setDeletePosts] = useState("");
  const view = (screen) => {
    setView(screen);
  };

  useEffect(() => {
    const fetchPosts = async() => {
      try {
        const {data} = await axios.get('http://localhost:8001/api/posts/all/posts');
        setPostList(data);
      } catch (error) {
        console.log(error);
      }
    }


    fetchPosts();
  }, [])

  useEffect(() => {
    const fetchAddPosts = async({userId, title, body, reactions, tags}) => {
      try {
        const {data} = await axios.post(`http://localhost:8001/api/posts/add/posts`, {
          userId, title, body, reactions, tags
        });
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    }

    if(getAddPosts?.title?.length){
      fetchAddPosts(getAddPosts)
    }
  }, [getAddPosts])

  useEffect(() => {
    const fetchEditPosts = async({userId, title, body, reactions, tags, _id}) => {
      try {
        const {data} = await axios.put(`http://localhost:8001/api/posts/edit/posts/${_id}`, {
          userId, title, body, reactions, tags
        });
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    }

    if(getEditPosts?.title?.length){
      fetchEditPosts(getEditPosts)
    }
  }, [getEditPosts])


  useEffect(() => {
    const fetchDeletePosts = async(id) => {
      try {
        const {data} = await axios.delete(`http://localhost:8001/api/posts/del/posts/${id}`);
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    }

    if(getDeletePosts?.length){
      fetchDeletePosts(getDeletePosts)
    }
  }, [getDeletePosts])

  

  const addPosts = (post) => {
    setAddPosts(post)
  }

  const editPosts = (post) => {
    setEditPosts(post)
  }

  const deletePosts = (id) => {
    console.log(id)
    setDeletePosts(id)
  }
  return (
    <div>
      <Head />
      <div className="d-flex">
        <Sidebar view={view} getView={getView} />
        {getView === "home" ? <Createposts addPosts={addPosts}/> : <Dashboard postList={postList} deletePosts={deletePosts} editPosts={editPosts}/>}
      </div>
    </div>
  );
}

export default App;
