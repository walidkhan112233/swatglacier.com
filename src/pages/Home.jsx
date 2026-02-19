import React from 'react'
import Hero from '../components/Hero'
import CoolerCard from '../components/CoolerCard'
const Home = () => {
  return (
    <div>
      <Hero/>
      <CoolerCard cooler={{ isAvailable: true }} />
    </div>
  )
}

export default Home