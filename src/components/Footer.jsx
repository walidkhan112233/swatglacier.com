import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white border-t  border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center  gap-2">
              <img src={assets.logo} alt="Swat Glacier" className="h-15 w-35 " />
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Premium cooling solutions designed for homes, offices,
              restaurants, and mosques. Built for durability, performance,
              and refreshing chilled water all year round.
            </p>

            {/* Social Icons (optional)
            <div className="flex gap-3 mt-4">
              <img src={assets.facebook_icon} alt="" className="w-5 h-5" />
              <img src={assets.instagram_icon} alt="" className="w-5 h-5" />
              <img src={assets.whatsapp_icon} alt="" className="w-5 h-5" />
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-[#1e7fb0]">Home</Link></li>
              <li><Link to="/coolers" className="hover:text-[#1e7fb0]">Browse Coolers</Link></li>
              <li><Link to="/about" className="hover:text-[#1e7fb0]">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#1e7fb0]">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-[#1e7fb0] cursor-pointer">Rental Policy</li>
              <li className="hover:text-[#1e7fb0] cursor-pointer">Purchase Guide</li>
              <li className="hover:text-[#1e7fb0] cursor-pointer">Installation Help</li>
              <li className="hover:text-[#1e7fb0] cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Karachi, Pakistan</li>
              <li className="font-medium text-gray-700">
                +92 300 8905739
              </li>
              <li className="font-medium text-gray-700 break-all">
                wbrothers.wholders@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Swat Glacier. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;