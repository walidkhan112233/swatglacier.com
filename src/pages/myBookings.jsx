import React from "react";
import { dummyCoolerData, assets } from "../assets/assets";

const MyBookings = () => {
  // later this will come from backend user bookings
  const bookings = dummyCoolerData.slice(0, 3); // temp mock bookings

  return (
    <section className="bg-light min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
            My Bookings
          </h1>
          <p className="text-gray-600 mt-2">
            View and manage your cooler rentals with SwatGlacier.
          </p>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {bookings.map((cooler) => (
            <div
              key={cooler._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col md:flex-row gap-6"
            >
              {/* Image */}
              <div className="w-full md:w-60 flex-shrink-0">
                <img
                  src={cooler.image}
                  alt={cooler.brand}
                  className="w-full h-36 object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {cooler.brand} {cooler.category}
                </h2>
                <p className="text-sm text-gray-500">
                  Location: {cooler.location}
                </p>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>Water Capacity: {cooler.water_capacity}</p>
                  <p>Monthly Rent: Rs {cooler.rentPerMonth}</p>
                  <p>Advance Paid: Rs {cooler.rentAdvancePayment}</p>
                </div>

                <span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full mt-2">
                  Active Rental
                </span>

                {/* Request Cancellation */}
                <div className="pt-3 flex gap-3 flex-wrap">
                  <a
                    href={`https://wa.me/923008905739?text=Hi, I want to request cancellation for my rented cooler (${cooler.brand} ${cooler.category}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition"
                  >
                    Request Cancellation
                  </a>

                  <a
                    href={`mailto:wbrothers.wholders@gmail.com?subject=Cancel Cooler Rental&body=Hi, I want to cancel my rental for ${cooler.brand} ${cooler.category}.`}
                    className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                  >
                    Email Owner
                  </a>
                </div>
              </div>

              {/* Price Box */}
              <div className="md:text-right flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Monthly Cost</p>
                  <h3 className="text-2xl font-bold text-blue-600">
                    Rs {cooler.rentPerMonth}
                  </h3>
                </div>

                <p className="text-xs text-gray-500">
                  Booked on {new Date().toLocaleDateString()}
                </p>

                <p className="text-xs text-gray-400 mt-4">
                  Booked via SwatGlacier
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (later when no bookings) */}
        {bookings.length === 0 && (
          <div className="text-center py-20">
            <img
              src={assets.cooler_icon}
              alt="no bookings"
              className="w-16 mx-auto mb-4 opacity-70"
            />
            <p className="text-gray-500 text-lg">No bookings yet</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookings;
