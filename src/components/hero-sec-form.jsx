import React from 'react'

const HeroSecForm = () => {
  return (
    <>
       <form
  className="flex flex-col md:flex-row items-start md:items-center justify-between
  p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-150 bg-white
  shadow-[0px_8px_20px_rgba(0,0,0,0.1)] gap-6"
>
  <div
    className="flex flex-col md:flex-row items-start md:items-center
    gap-6 md:gap-10 md:ml-6 w-full"
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
    <div className="w-full">
      <select
        required
        className="w-full bg-transparent outline-none text-gray-600"
      >
        <option value="">Select Location</option>
        <option value="karachi">Karachi</option>
        <option value="lahore">Lahore</option>
      </select>
    </div>

    {/* Rent Date (for rent only later) */}
    <div className="w-full">
      <input
        type="date"
        className="w-full bg-transparent outline-none text-gray-600"
      />
    </div>
  </div>

  {/* Button */}
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-400 text-white
    px-6 py-3 rounded-full w-full md:w-auto"
  >
    Find Coolers
  </button>
</form>

    </>
  )
}

export default HeroSecForm
