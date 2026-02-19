import React from "react";
import { dummyCoolerData } from "../assets/assets";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const CoolerCard = ({cooler}) => {
 return (
  <section className="bg-light  py-12"> {/* same hero-like light beige bg */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {dummyCoolerData.map((cooler) => (
          <div
            key={cooler._id}
            className="bg-[] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={cooler.image}
                alt={`${cooler.category} cooler`}
                className="w-full h-44 object-cover"  
              />

              {(cooler.isAvailableForSale || cooler.isAvaliableForRent || cooler.isAvailableForRent) && (
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  Available
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-3 space-y-1.5"> {/* reduced padding */}
              <h2 className="text-base font-semibold text-gray-800">
                {cooler.brand} {cooler.category}
              </h2>

              <p className="text-xs text-gray-500">
                Capacity: {cooler.water_capacity}
              </p>

              <p className="text-xs text-gray-500">
                Location: {cooler.location}
              </p>

              {cooler.isAvailableForSale && (
                <p className="text-blue-600 font-semibold text-sm">
                  Sale: Rs {cooler.price.toLocaleString()}
                </p>
              )}

              {(cooler.isAvaliableForRent || cooler.isAvailableForRent) && (
                <div className="text-xs text-gray-700">
                  <p>Rent: Rs {cooler.rentPerMonth}/month</p>
                  <p className="text-gray-500">
                    Advance: Rs {cooler.rentAdvancePayment}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

};

export default CoolerCard;
