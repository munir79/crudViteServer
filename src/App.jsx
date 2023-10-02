
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Component/Main'
import Registar from './Component/Registar'
import Login from './Component/Login'

import SeeUser from './Component/SeeUser'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/registar',
          element:<Registar></Registar>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/user',
          element:<SeeUser></SeeUser>,
          loader:()=>fetch('http://localhost:5000/users')
        }
      ]
    }
  ])

  return (
    <>
     
     <RouterProvider router={router}> </RouterProvider>
     
      
    </>
  )
}

export default App
