import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Createposts from './Components/Createposts.jsx'
import Dashboard from './Components/Dashboard.jsx'
const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {
      path: "/", element: <Createposts />
    }, {path: "/dashboard", element: <Dashboard />}
  ]}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
