//hero section of home page cooler cards

import React from 'react';
import { assets } from '../assets/assets';

const CoolerCard = ({ cooler }) => {
  return (
    <div>


      <div>
        <img src={assets.PureSteel_cooler} alt="Puresteel cooler image" />

        {cooler.isAvailable && <p className='text-green-500 text-sm'>Available Now</p>}

        <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg' ></div>
      </div>


      <div>
        <img src={assets.Regular_250Lr_Cooler} alt="Regular 250Lr cooler image" />
      </div>

        <div>
        <img src={assets.Regular_100Lr_Cooler} alt="Regular 100Lr cooler image" />
      </div>


    </div>
  )
}

export default CoolerCard
