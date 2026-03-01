import React from "react";
import { assets } from "../assets/assets";

const NewsLetter = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Never Miss a Cooling Deal!
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-base">
          Subscribe to get updates about new cooler models, seasonal offers,
          rental discounts, and exclusive Swat Glacier deals.
        </p>

        {/* Input + Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-96 px-5 py-3 rounded-full border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#2599cf]  bg-white  text-gray-700"
          />
          <button className="bg-gradient-to-r from-[#2599cf] to-[#1e7fb0]  text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition">
            Subscribe Now
          </button>
        </div>

        {/* Contact Info */}
        {/* <div className="mt-8 text-sm text-gray-500">
          <p>Or contact us directly:</p>
          <p className="font-medium text-gray-700 mt-1">
            wbrothers.wholders@gmail.com
          </p>
          <p className="font-medium text-gray-700">
            +92 300 8905739 (Call / WhatsApp)
          </p>
        </div> */}

      </div>
    </section>
  );
};

export default NewsLetter;