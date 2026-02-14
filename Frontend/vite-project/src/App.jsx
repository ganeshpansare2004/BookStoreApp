import React from 'react'
import Home from './home/Home';
import Courses from './courses/Courses';
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About.jsx';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthContext.js";


const App = () => {
  const [authUser] = useAuth();
    console.log(authUser);
  return (
    <>
<div className='dark:bg-slate-900 dark:text-white'>
 <Routes>
  <Route path ="/" element ={<Home/>}/>
  <Route path= "/course" element={authUser?<Courses/> : <Navigate to ="/signup"/>}/>
   <Route path= "/signup" element={<Signup/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path ="/about" element={<About/>}/>
 </Routes>
 <Toaster />
 </div>
   
    </>
  )
}

export default App