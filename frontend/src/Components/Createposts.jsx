import { useRef } from "react";

const Createposts = () => {
   const userIdRef = useRef("");
   const titleRef = useRef("");
   const bodyRef = useRef("");
   const reactionsRef = useRef("");
   const tagsRef = useRef("");
 

   
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = userIdRef.current.value
        const title = titleRef.current.value
        const body = bodyRef.current.value
        const reactions = reactionsRef.current.value
        const tags = tagsRef.current.value.split("#");


    }


  return (
    <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column">
        <h1 className="m-5">Create a Post</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="w-100 h-50 d-flex flex-column justify-content-center align-items-center">
            <label>UserId</label>
            <input type="number" id="userId" placeholder="enter User ID" className="createInput" ref={userIdRef}/>
            <label>Title</label>
            <input type="text" id="title" placeholder="enter title" className="createInput" ref={titleRef}/>
            <label>body</label>
            <textarea type="text" placeholder="body" className="createInput" ref={bodyRef}/>
            <label>Reactions</label>
            <input type="number" id="reactions" placeholder="reactions" className="createInput" ref={reactionsRef}/>
            <label>tags</label>
            <input type="text" placeholder="put # after every tag" className="createInput" ref={tagsRef}/>
        </form>
    </div>
  )
}

export default Createposts