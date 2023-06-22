import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navbar from './layout/navbar';
import './App.css'
import Footer from './layout/footer';
import Home from './pages/Home';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
