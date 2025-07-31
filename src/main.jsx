import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Details from './Components/Details/Details.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/details/:productId',
        element: <Details></Details>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
      <RouterProvider router={router}/>
    
)
