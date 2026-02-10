import React from "react";
import { assets } from "../assets/assets";
import HeroSecForm from "./hero-sec-form";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col pt-24 items-center justify-center gap-8 bg-light text-center ">

      <h1 className="text-4xl md:text-5xl  text-blue-500 font-bold mb-0 ">
        Stay Cool!, Stay Refreshed!
      </h1>

      <h4
        className="text-lg md:text-1xl text-gray-600 font-medium leading-none">
        Complete Renting & Sales Solutions by Swat Glacier
      </h4>

        <HeroSecForm /> 

      <img
        src={assets.main_Swat_Glacier_Banner}
        alt="coolers"
        className="max-h-100 max-w-100%"
      />
    </div>
  );
};

export default Hero;
