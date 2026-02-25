import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();

  return (
  <section className="bg-light py-16">
    <div className="max-w-6x1 mx-auto px-4 sm:px-20 lg:px-10">
      <div className="relative bg-gradient-to-r from-[#2599cf] to-[#1e7fb0] text-white rounded-3xl px-8 md:px-14 py-12 overflow-hidden shadow-xl">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Powerful Cooling for Every Space
            </h2>
            <p className="mt-4 text-blue-100 text-lg">
              Rent or buy premium Swat Glacier coolers built for homes, offices,
              restaurants, and mosques. Stay chilled all year round.
            </p>

            <button
              onClick={() => {
                navigate("/coolers");
                window.scrollTo(0, 0);
              }}
              className="mt-6 inline-flex items-center gap-2 bg-white text-[#1e7fb0] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Explore Coolers
              <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
            </button>
          </div>

          {/* Right Images */}
          <div className="relative flex items-end justify-center">
            <img
              src={assets.Regular_250Lr_Cooler_CTA}
              alt="250Lr Cooler"
              className="w-44 md:w-60 drop-shadow-2xl"
            />
            <img
              src={assets.Regular_100Lr_Cooler_CTA}
              alt="100Lr Cooler"
              className="w-32 md:w-44 absolute -right-8 bottom-0 drop-shadow-xl"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
);
};

export default Banner;