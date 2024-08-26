import Createposts from "./Components/Createposts"
import Dashboard from "./Components/Dashboard"
import Head from "./Components/Head"
import Sidebar from "./Components/Sidebar"

function App() {
  return (
    <div>
        <Head />
      <div className="d-flex">
        <Sidebar />
        {/* <Createposts /> */}
        <Dashboard />
      </div>
    </div>
  )
}

export default App
