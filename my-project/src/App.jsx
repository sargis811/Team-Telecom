import React, { useState } from 'react'
import './index.css'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import PageApp from './Components/Page2/PageApp'
import PageApp2 from './Components/Page3/PageApp'
import { Navigation } from './Components/Navigation.jsx'
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'
import { Main } from './Components/Main.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
          <div className=" z-[2]">
            <Header/>
            <Navigation/>
          </div> 
          <Routes>
            <Route index element={<Main/>}/>
            <Route path="/business" element={<PageApp/>}/>
            <Route path='/eshop' element={<PageApp2/>}/>  
          </Routes>
          <Footer/>
    </BrowserRouter>
      </>
  )
}


export default App



