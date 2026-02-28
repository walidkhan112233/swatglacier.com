import React from 'react'
import Hero from '../components/Hero'
import CoolerCard from '../components/CoolerCard'
import FeaturedSec from '../components/FeaturedSec'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
const Home = () => {
  return (
    <div  >
      <Hero/>
      <FeaturedSec/>
      <Banner/>
      <Testimonial/>
    </div>
  )
}

export default Home