import React from 'react'
import { cityList } from '../assets/assets';
import { useState } from "react";
import { assets } from '../assets/assets';
const HeroSecForm = () => {

const [selectLocation, setSelectLocation] = useState('');



  return (
    <>
       <form
  className="flex flex-col md:flex-row items-start md:items-center justify-between
  p-6 rounded-lg md:rounded-full w-full max-w-90 md:max-w-160 bg-white
  shadow-[0px_8px_20px_rgba(0,0,0,0.1)] gap-6"
>
  <div
    className="flex flex-col md:flex-row text-align md:items-end
    gap-7 md:gap-9 md:ml-8 w-full"
  >
    {/* Order Type */}
    <div className="w-full">
      <select
        required
        className="w-full bg-transparent outline-none text-gray-600"
      >
        <option value="">Rent or Buy</option>
        <option value="rent">Rent</option>
        <option value="buy">Buy</option>
      </select>
    </div>

    {/* Location */}
    <div className="w-full flex flex-col items-start gap-none">
      <select
        required
        value={selectLocation}
        onChange={(e) => setSelectLocation(e.target.value)}
        className="w-full bg-transparent outline-none text-gray-600"
      >
        <option value="">Select Location</option>
        {cityList.map((city) => (
          <option key={city} value={city}> {city} </option>))}
      </select>
      <p className="text-gray-500 text-sm px-1 h-5"> {selectLocation ? 
      selectLocation : 'Pls Select Location'} </p>
    </div>

    {/* Rent Date (for rent only later) */}
    <div className="w-full">
      <input
      required
        type="date"
        className="w-full bg-transparent outline-none text-gray-600"
      />

    </div>
  </div>

  {/* Button */}
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-400 text-white justify-center flex items-center gap-2
    px-9 py-3 max-sm:mt-4 rounded-full cursor-pointer click:bg-blue-300"
  >
    <img src={assets.search_icon} alt="search icon" className='brightness-500'  />
     Search
  </button>
</form>

    </>
  )
}

export default HeroSecForm
