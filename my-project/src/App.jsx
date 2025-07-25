import React, { useState } from 'react'
import './index.css'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import PageApp from './Components/Page2/PageApp'
import { Navigation } from './Components/Navigation.jsx'
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'
import { Main } from './Components/Main.jsx'
import Page from './Components/Favourites/Page.jsx';
import TeamPay from './Components/TeamPay/TeamPay.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import TeamMusemum from './Components/TeamMuseum/TeamMuseum.jsx';
import WorkInTeam from './Components/WorkInTeam/WorkInTeam.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
          <div className='mr-[0]'>
            <Header/>
            <Navigation/>
          </div> 
          <Routes>
            <Route index element={<Main/>}/>
            <Route path="/business" element={<PageApp/>} />
            <Route path='/favourites' element={<Page/>}/>
            <Route path='/teamPay' element={<TeamPay/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/teamMuseum' element={<TeamMusemum/>}/>
            <Route path='/workInTeam' element={<WorkInTeam/>}/>
          </Routes>
          <Footer/>
    </BrowserRouter>
      </>
  )
}


export default App



