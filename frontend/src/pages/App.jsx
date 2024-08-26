import Head from "../Components/Head";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
import PostStoreProvider from "../store/PostStore";



function App() {

  return (
    <PostStoreProvider>
      <Head />
      <div className="d-flex">
        <Sidebar  />
        <Outlet />
      </div>
    </PostStoreProvider>
  );
}

export default App;
