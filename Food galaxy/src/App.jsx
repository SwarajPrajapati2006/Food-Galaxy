import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Veg from './pages/Veg'
import NonVeg from './pages/NonVeg'
import AppLayout from './components/AppLayout'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import "./App.css"

import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index: true,
        element: <Navigate to="home" replace />
      },
      {
        path:"home",
        element:<Home/>
      }
      ,
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"veg",
        element:<Veg/>
      },
      {
        path:"nonveg",
        element:<NonVeg/>
      },
      {
        path:"about",
        element:<About/>
      }
    ]
  }
])
const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App