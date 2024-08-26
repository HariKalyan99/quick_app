import { createContext,useEffect, useReducer, useState } from "react";
import axios from "axios";

function pureReducerFunction(currentState,action) {
    let newPostList = currentState;
    if(action.type === "INITIAL_POSTS"){
        newPostList = action.payload.data;
    }else if(action.type === "ADD_POSTS"){
        newPostList = [action.payload.data ,...currentState]
    }else if(action.type === "EDIT_POSTS"){
        newPostList = [action.payload.data ,...currentState.filter(x => x?._id !== action.payload._id)]
    }else if(action.type === "DELETE_POSTS"){
        newPostList = currentState.filter(x => x?._id !== action.payload.id)
    }
    return newPostList;
} 

export const postStore = createContext({
    postList: [],
    getView: "home",
    addPosts: () => {},
    editPosts: () => {},
    deletePosts: () => {},
    view: () => {}
  });

const PostStoreProvider = ({children}) => {
    const [getView, setView] = useState("home");
    // const [postList, setPostList] = useState([]);
    const [getAddPosts, setAddPosts] = useState("");
    const [getEditPosts, setEditPosts] = useState("");
    const [getDeletePosts, setDeletePosts] = useState("");
    
    const [postList, dispatchReducerFunction] = useReducer(pureReducerFunction, []);
    
    const view = (screen) => {
      setView(screen);
    };

  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const { data } = await axios.get(
            "http://localhost:8001/api/posts/all/posts"
          );
          dispatchReducerFunction({
            type: "INITIAL_POSTS",
            payload: {
                data
            }
          })
        //   setPostList(data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchPosts();
    }, []);
  
    useEffect(() => {
      const fetchAddPosts = async ({ userId, title, body, reactions, tags }) => {
        try {
          const { data } = await axios.post(
            `http://localhost:8001/api/posts/add/posts`,
            {
              userId,
              title,
              body,
              reactions,
              tags,
            }
          );
          dispatchReducerFunction({
            type: "ADD_POSTS",
            payload: {
              data
            }
          })
        } catch (error) {
          console.log(error);
        }
      };
  
      if (getAddPosts?.title?.length) {
        fetchAddPosts(getAddPosts);
      }
    }, [getAddPosts]);
  
    useEffect(() => {
      const fetchEditPosts = async ({
        userId,
        title,
        body,
        reactions,
        tags,
        _id,
      }) => {
        try {
          const { data } = await axios.put(
            `http://localhost:8001/api/posts/edit/posts/${_id}`,
            {
              userId,
              title,
              body,
              reactions,
              tags,
            }
          );
          dispatchReducerFunction({
            type: "EDIT_POSTS",
            payload: {
              data,
              _id
            }
          })
        } catch (error) {
          console.log(error);
        }
      };
  
      if (getEditPosts?.title?.length) {
        fetchEditPosts(getEditPosts);
      }
    }, [getEditPosts]);
  
    useEffect(() => {
      const fetchDeletePosts = async (id) => {
        try {
          const { data } = await axios.delete(
            `http://localhost:8001/api/posts/del/posts/${id}`
          );
          dispatchReducerFunction({
            type: "DELETE_POSTS",
            payload: {
              id
            }
          })
        } catch (error) {
          console.log(error);
        }
      };
  
      if (getDeletePosts?.length) {
        fetchDeletePosts(getDeletePosts);
      }
    }, [getDeletePosts]);
  
    const addPosts = (post) => {
      setAddPosts(post);
    };
  
    const editPosts = (post) => {
      setEditPosts(post);
    };
  
    const deletePosts = (id) => {
      setDeletePosts(id);
    };
     return (
        <postStore.Provider value={{postList,
            getView,
            addPosts,
            editPosts,
            deletePosts, view}}>
                {children}
        </postStore.Provider>
     )
}

export default PostStoreProvider;