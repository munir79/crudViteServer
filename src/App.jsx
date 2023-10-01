
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Component/Main'
import Registar from './Component/Registar'
import Login from './Component/Login'

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
