import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCoolerData } from "../assets/assets";

const CoolerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cooler, setCooler] = useState(null);

  useEffect(() => {
    const foundCooler = dummyCoolerData.find(
      (item) => item._id === id
    );
    setCooler(foundCooler);
    window.scrollTo(0, 0);
  }, [id]);

  if (!cooler) {
    return <div className="text-center py-20">Cooler not found</div>;
  }

  return (
    <section className="bg-white  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:bg-[#1e7fb0] hover:text-white mb-6 bg-light px-3 py-2 rounded-full transition"
        >
          ←Back to all coolers
        </button>

        <div className="grid lg:grid-cols-3 gap-2 ">
          
          {/* LEFT - IMAGE */}
          <div className="lg:col-span-2 ">
            <img
              src={cooler.image}
              alt={cooler.brand}
              className="w-full max-h-[420px] object-contain"
            />

            {/* Title */}
            <h1 className="mt-6 text-3xl font-bold text-gray-800 pt-10">
              {cooler.brand} {cooler.category} {cooler.size && `- ${cooler.size}`}
            </h1>

            <p className="text-gray-500 mt-2">
              Premium industrial water cooler designed for powerful cooling,
              durability, and reliable performance in homes, offices, mosques,
              and commercial spaces.
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 border-t pt-6 ">
              <div className="bg-light p-4 rounded-xl text-center shadow-sm ">
                <p className="text-sm text-gray-600">Capacity</p>
                <p className="font-semibold text-blue-500">{cooler.water_capacity}</p>
              </div>

              <div className="bg-light p-4 rounded-xl text-center shadow-sm">
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold text-blue-500">{cooler.location}</p>
              </div>

              <div className="bg-light p-4 rounded-xl text-center shadow-sm">
                <p className="text-sm text-gray-600">Cooling Type</p>
                <p className="font-semibold text-blue-500">Heavy Duty</p>
              </div>

              <div className="bg-light p-4 rounded-xl text-center shadow-sm">
                <p className="text-sm text-gray-600">Build</p>
                <p className="font-semibold text-blue-500">Stainless Steel</p>
              </div>
              <div className="bg-light p-4 rounded-xl text-center shadow-sm">
                <p className="text-sm text-gray-600">Category</p>
                <p className="font-semibold text-blue-500">{cooler.category}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-10 ">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {cooler.description}
              </p>
            </div>
          </div>

          {/* RIGHT - PRICE CARD */}
          <div className="bg-light rounded-2xl shadow-lg p-7   h-fit">
            {cooler.isAvailableForSale && (
              <h2 className="text-3xl font-bold text-[#1e7fb0]">
                Rs {cooler.price.toLocaleString()}
              </h2>
            )}
            <p className="text-sm text-gray-500 mb-6">One-time purchase</p>

            {(cooler.isAvailableForRent || cooler.isAvaliableForRent) && (
              <div className="mb-6">
                <p className="text-lg font-semibold text-gray-800">
                  Rent: Rs {cooler.rentPerMonth}/month
                </p>
                <p className="text-sm text-gray-500">
                  Advance: Rs {cooler.rentAdvancePayment}
                </p>
              </div>
            )}

            <button className="w-full bg-[#1e7fb0] hover:bg-[#2599cf] text-white py-3 rounded-full font-semibold transition">
              Book / Order Now
            </button>

            <p className="text-xs text-gray-400 text-center mt-3">
              Contact us to confirm availability & delivery
            </p>
          </div>

            
        </div>
          <div className="mt-16 bg-light rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose This Cooler?
          </h2>
          <ul className="space-y-2 text-gray-600 list-disc pl-5">
            <li>Durable stainless steel body</li>
            <li>Efficient and powerful cooling performance</li>
            <li>Ideal for homes, mosques, offices, and commercial use</li>
            <li>Low maintenance and long-lasting build</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoolerDetails;