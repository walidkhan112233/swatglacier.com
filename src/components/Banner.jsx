import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-10">
      <div className="max-w-6x1  mx-auto px-6 sm:px-10  lg:px-15">
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-4xl px-8 md:px-14 py-10 md:py-12 overflow-hidden shadow-xl ">
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-3x1 text-center  md:text-left md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Powerful Cooling for Every Space 
              </h2>
              <p className="mt-4 text-blue-100 text-lg">
                Choose to rent or purchase high-performance coolers from Swat
                Glacier, perfect for homes, workplaces, restaurants, and
                mosques. Enjoy powerful cooling, durable build quality, and
                refreshing chilled water all year round.
              </p>

              <button
                onClick={() => {
                  navigate("/coolers");
                  window.scrollTo(0, 0);
                }}
                className="mt-6 inline-flex items-center gap-2 bg-white text-[#1e7fb0] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
              >
                Explore more Coolers
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
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white/65 pointer-events-none z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
