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
import MoviePage from './Pages/MoviePage'
import Details from './Components/Movie Page Components/Details'
import Reviews from './Components/Movie Page Components/Reviews'
import Cast from './Components/Movie Page Components/Cast'
import Companies from './Components/Movie Page Components/Companies'
import MyReviews from './Pages/MyReviews'

function App() {

  let RouterConfig =createBrowserRouter([{  
     path:'',
     element:<LayoutPage></LayoutPage>,
     children:[
        {index:true,element:<HomePage></HomePage>},
        {path:'Browse',element:<BrowsePage></BrowsePage>},
        {path:'Add',element:<AddingPage></AddingPage>},
        {path:'MyReviews',element:<MyReviews></MyReviews>},
        {path:'Login',element:<LoginPage></LoginPage>},
        {path:'Register',element:<RegisterPage></RegisterPage>},
        {path:'*',element:<ErrorPage></ErrorPage>},
        {path:'Movie/:id',element:<MoviePage></MoviePage>,children:[
          {index:true,element:<Details></Details>},
          {path:'Reviews',element:<Reviews></Reviews>},
          {path:'Crew Members',element:<Cast></Cast>},
          {path:'Production Companies',element:<Companies></Companies>}
        ]}
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
