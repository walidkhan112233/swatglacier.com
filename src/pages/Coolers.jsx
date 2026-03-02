import React from "react";
import { dummyCoolerData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Coolers = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  // 🔍 Filter coolers based on search
  const filteredCoolers = dummyCoolerData.filter((cooler) => {
    const text = search.toLowerCase();

    return (
      cooler.brand.toLowerCase().includes(text) ||
      cooler.category.toLowerCase().includes(text) ||
      cooler.location.toLowerCase().includes(text) ||
      cooler.water_capacity.toLowerCase().includes(text) ||
      cooler.price.toString().includes(text) ||
      cooler.rentPerMonth.toString().includes(text)
    );
  });

  return (
    <section className="bg-light min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center   mb-10">
          <h1 className="text-3xl  md:text-4xl font-bold text-blue-600">
            Available Coolers
          </h1>
          <p className="text-gray-600 mt-2">
            Browse our collection of high-performance cooling solutions for every space.
          </p>

          {/* Search Bar UI */}
          <div className="mt-6 max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search by brand, size, or capacity"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 bg-white rounded-full py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <img
              src={assets.search_icon}
              alt="search"
              className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 opacity-70"
            />
          </div>
        </div>

        {/* Coolers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredCoolers.map((cooler) => (
            <div
              key={cooler._id}
              onClick={() => {
                navigate(`/cooler-details/${cooler._id}`);
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={cooler.image}
                  alt={cooler.brand}
                  className="w-full h-52 object-contain bg-transparent p-4"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Available Now
                </span>
              </div>

              {/* Info */}
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  {cooler.brand} {cooler.category}
                </h2>

                <p className="text-sm text-gray-500">
                  Capacity: {cooler.water_capacity}
                </p>

                <p className="text-sm text-gray-500">
                  Location: {cooler.location}
                </p>

                {cooler.isAvailableForSale && (
                  <p className="text-blue-600 font-semibold">
                    Sale: Rs {cooler.price.toLocaleString()}
                  </p>
                )}

                {(cooler.isAvaliableForRent || cooler.isAvailableForRent) && (
                  <p className="text-gray-700 text-sm">
                    Rent: Rs {cooler.rentPerMonth}/month
                    <br />
                    Advance: Rs {cooler.rentAdvancePayment}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coolers;