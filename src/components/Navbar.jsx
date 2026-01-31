import React from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  const [Open, setOpen] = React.useState(false);

  return (
    <div
      className={`flex items-center justify-between px-6 h-17 md:px-16 lg:px-24 xl:px-32 py-4 
    text-600 border-b border-borderColor text-[#102090] relative transition-all ${location.pathname === "/" && "bg-light"} `}
    >
      <Link to="/">
        <img src={assets.logo} alt="logo" className="h-14 w-32" />
      </Link>

      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t 
      border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 
      max-sm:p-4 transition-all duration-300  z-50 ${location.pathname === "/" ? "bg-light" : "bg-white"} 
      ${Open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}


        <div className="hidden lg:flex items-center text-sm gap-2 border
             border-borderColor px-3 rounded-full max-w-56" >
          <input
            type="text"
            placeholder="Search Products..."
            className="py-1.5 w-full text-gray-600 bg-transparent  placeholder-gray-500 outline-none"
          />
          <img src={assets.search_icon} alt="search" />
          {/* dashbaord and login */}
        </div>

        <div>
            <button className="cursor-pointer">Dashbaord</button>
            <button > Login</button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
