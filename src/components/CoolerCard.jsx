import React from "react";
import { Link } from "react-router-dom";

const CoolerCard = ({ cooler }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={cooler.image}
          alt={`${cooler.category} cooler`}
          className="w-full h-44 object-cover"
        />

        {(cooler.isAvailableForSale ||
          cooler.isAvaliableForRent ||
          cooler.isAvailableForRent) && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            Available
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3 space-y-1.5">
        <h2 className="text-base font-semibold text-gray-800">
          {cooler.brand} {cooler.category} {cooler.size && `- ${cooler.size}`}
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
  );
};

export default CoolerCard;
