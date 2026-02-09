import React from 'react'
import Navbar from './components/navbar'
import { useState } from 'react';
import { Routes,Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import coolerDetails from './pages/coolerDetails';
import myBookings from './pages/mybookings';
import Coolers from './pages/coolers';
const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');
  return (
    <>

      { !isOwnerPath && <Navbar setShowLogin ={setShowLogin} /> }
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cooler-details/:id" element={<coolerDetails />} />
      <Route path="/my-bookings" element={<myBookings />} />
      <Route path="/coolers" element={<Coolers />} />
    </Routes>
    </>
  )
}

export default App
