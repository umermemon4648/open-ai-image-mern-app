import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
// import Navbar from './pages/Navbar';
import {CreatePost, Home, Navbar} from './pages/index'

const App = () => {
  return (
    <>
   
    <Router>
<Navbar/>
<main className='sm:px-8 px-4 py-16 w-full bg-[#f9fafe] min-h-[calc(100vh-75px)]'>
      <Routes>
<Route path='/' element={<Home/>} />
<Route path='/create-post' element={<CreatePost/>} />


      </Routes>


</main>
 
    </Router>
    </>
  )
}

export default App
