import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Details from './Components/Details/Details.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Wishlist from './Components/Wishlist/Wishlist.jsx'
import CartProvider from './CartProvider/CartProvider.jsx'
import WishlistProvider from './WishlistProvider/WishlistProvider.jsx'
import ErrorPage from './ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <Dashboard></Dashboard>,
        children:[
           {
            index: true,       
            element: <Cart />  
          },
          {
            path:'cart',
            element:<Cart></Cart>
          },
          {
            path:'wishlist',
            element:<Wishlist></Wishlist>
          }
        ]
      },
      {
        path: '/details/:productId',
        element: <Details></Details>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <WishlistProvider>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </WishlistProvider>
    
)
