import React from "react";
import { assets, dummyCoolerData } from "../assets/assets";
import CoolerCard from "./CoolerCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedSec = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-light py-20 px-0 pt-20 md:px-20">
      {/* Title */}
      <Title
        title="Featured Coolers"
        subTitle="Unleash the chill — built for power, performance, and extreme cooling adventures."
        align="center"
        titleColor="text-blue-500"
        subColor="text-gray-600"
      />

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {dummyCoolerData.slice(0,3).map((cooler) => (
          <CoolerCard key={cooler._id} cooler={cooler} />
        ))}
      </div>

      {/* Explore Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => {
            navigate("/coolers");
            scrollTo(0, 0);
          }}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-full transition"
        >
          Explore All Coolers
          <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedSec;
