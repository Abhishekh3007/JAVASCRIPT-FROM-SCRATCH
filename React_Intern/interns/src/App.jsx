// import Card from './component/card'
import './App.css'
// import  one from './assets/abc.png'
// import  two from './assets/abd.png'
// import  three from './assets/abb.jpg'
// import {useState,useEffect} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './component/navbar'

//parent component

const router=createBrowserRouter([
  {
    path:'/',
    element: <><Navbar /><h1>WELCOME TO MY CHANNEL  </h1></>
  },
  {
  path:'/about',
  element: <><Navbar /><h1>ABOUT US</h1></>
  },
  {
    path:'/contact',
    element: <><Navbar /><h1>CONTACT US</h1></>
  },
  {
    path:'/login',
    element: <><Navbar /><h1>LOGIN</h1></>
  }
])
function App() {




  return (
    <div>
      <RouterProvider router={router}/>

  



    </div>
  )
}

export default App;
