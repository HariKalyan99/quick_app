
const Editposts = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="h-100 wi-100 d-flex justify-content-center align-items-center">
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>UserId</label>
            <input type="number" id="userId" placeholder="enter User ID" className="createInput"/>
            <label>Title</label>
            <input type="text" id="title" placeholder="enter title" className="createInput"/>
            <label>body</label>
            <textarea type="text" placeholder="body" className="createInput"/>
            <label>Reactions</label>
            <input type="number" id="reactions" placeholder="reactions" className="createInput"/>
            <label>tags</label>
            <input type="text" placeholder="put # after every tag" className="createInput"/>
        </form>
    </div>
  )
}

export default Editposts