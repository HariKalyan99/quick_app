import { useState } from "react";

const Editposts = ({editView,setEditView, editPosts, post}) => {
  const [getUserId, setUserId] = useState(post.userId);
  const [getTitle, setTitle] = useState(post.title);
  const [getBody, setBody] = useState(post.body);
  const [getReactions, setReactions] = useState(post.reactions);
  const [getTags, setTags] = useState(post.tags.join("#"));
    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = getUserId
        const title = getTitle
        const body = getBody
        const reactions = getReactions
        const tags = getTags?.split("#");
        editPosts({userId, title, body, reactions, tags, _id: post._id});
        setEditView(!editView)

    }
  return (
    <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column">
        <form onSubmit={(e) => handleSubmit(e)} className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <label>UserId</label>
            <input type="number" id="userId" placeholder="enter User ID" className="createInput" value={getUserId} onChange={(e) => setUserId(e.target.value)}/>
            <label>Title</label>
            <input type="text" id="title" placeholder="enter title" className="createInput" value={getTitle} onChange={(e) => setTitle(e.target.value)}/>
            <label>body</label>
            <textarea type="text" placeholder="body" className="createInput" value={getBody} onChange={(e) => setBody(e.target.value)} />
            <label>Reactions</label>
            <input type="number" id="reactions" placeholder="reactions" className="createInput" value={getReactions} onChange={(e) => setReactions(e.target.value)}/>
            <label>tags</label>
            <input type="text" placeholder="put # after every tag" className="createInput" value={getTags} onChange={(e) => setTags(e.target.value)}/>
            <button type="submit" className="btn btn-warning">EditPosts</button>
            <button type="button" className="btn btn-dark" onClick={() => setEditView(!editView)}>Don't edit</button>
        </form>
    </div>
  )
}

export default Editposts