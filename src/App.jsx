import React from 'react'
import Navbar from './components/navbar'
import { useState } from 'react';
import { Routes,Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CoolerDetails from './pages/coolerDetails';
import myBookings from './pages/myBookings';
import Coolers from './pages/Coolers';
import Footer from './components/Footer';
const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');
  return (
    <>

      { !isOwnerPath && <Navbar setShowLogin ={setShowLogin} /> }
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cooler-details/:id" element={<CoolerDetails />} />
      <Route path="/my-bookings" element={<myBookings />} />
      <Route path="/coolers" element={<Coolers />} />
    </Routes>

      { !isOwnerPath && <Footer/> }
    </>
  )
}

export default App
