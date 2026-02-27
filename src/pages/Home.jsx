import React from 'react'
import Hero from '../components/Hero'
import CoolerCard from '../components/CoolerCard'
import FeaturedSec from '../components/FeaturedSec'
import Banner from '../components/Banner'
const Home = () => {
  return (
    <div  >
      <Hero/>
      <FeaturedSec/>
      <Banner/>
    </div>
  )
}

export default Home