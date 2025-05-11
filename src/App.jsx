import { useState } from 'react'
import './App.css'
import AddingPage from './Pages/AddingPage'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LayoutPage from './Pages/LayoutPage'
import HomePage from './Pages/HomePage'
import BrowsePage from './Pages/BrowsePage'
import ErrorPage from './Pages/ErrorPage'
import MoviesProvider from './Context/MoviesProvider'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

function App() {

  let RouterConfig =createBrowserRouter([{  
     path:'' ,element:<LayoutPage></LayoutPage>,children:[
        {index:true,element:<HomePage></HomePage>},
        {path:'Browse',element:<BrowsePage></BrowsePage>},
        {path:'Add',element:<AddingPage></AddingPage>},
        {path:'Login',element:<LoginPage></LoginPage>},
        {path:'Register',element:<RegisterPage></RegisterPage>},
        {path:'*',element:<ErrorPage></ErrorPage>}
    ]}
  ]);
  return (
    <>   
     <MoviesProvider>
      <RouterProvider router={RouterConfig}></RouterProvider>
     </MoviesProvider>
    </>
  )
}

export default App
