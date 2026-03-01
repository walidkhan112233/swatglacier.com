import React from 'react'
import Hero from '../components/Hero'
import CoolerCard from '../components/CoolerCard'
import FeaturedSec from '../components/FeaturedSec'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
const Home = () => {
  return (
    <div  >
      <Hero/>
      <FeaturedSec/>
      <Banner/>
      <Testimonial/>
      <NewsLetter/>
    </div>
  )
}

export default Home