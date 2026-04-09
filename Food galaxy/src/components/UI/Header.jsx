import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
    backdrop-blur-xl bg-white/70 border-b border-white/20 
    shadow-[0_8px_30px_rgba(0,0,0,0.05)]">

      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://res.cloudinary.com/dmkspibfj/image/upload/v1775466408/pexels-rohan-dalal-62574732-9101561_plf5ks.jpg"
            className="h-10 w-10 rounded-full object-cover"
            alt="logo"
          />
          <h1 className="text-xl md:text-2xl font-extrabold 
          bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-red-600">
            Food Galaxy
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-semibold text-gray-700">
          {[
            { path: "/home", name: "Home" },
            { path: "/veg", name: "Veg" },
            { path: "/nonveg", name: "Non-Veg" },
            { path: "/contact", name: "Contact" },
            { path: "/about", name: "About" },
          ].map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-orange-500" : "hover:text-orange-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-5">

          {/* Cart */}
          {cartCount > 0 && (
            <div className="flex items-center gap-1 md:gap-2 
            bg-linear-to-r from-amber-400 to-orange-500 
            text-white px-3 md:px-5 py-1.5 md:py-2 
            rounded-full font-bold text-sm md:text-base 
            shadow-md hover:scale-105 transition">
              🛒 <span>{cartCount}</span>
            </div>
          )}

          {/* Login */}
          <button className="hidden md:block bg-linear-to-r from-red-500 to-orange-500 
          text-white px-5 py-2 rounded-full font-bold shadow-md 
          hover:scale-105 transition">
            Login
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 
        bg-white/90 backdrop-blur-xl text-gray-700 font-semibold">

          {[
            { path: "/home", name: "Home" },
            { path: "/veg", name: "Veg" },
            { path: "/nonveg", name: "Non-Veg" },
            { path: "/contact", name: "Contact" },
            { path: "/about", name: "About" },
          ].map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500 transition"
            >
              {item.name}
            </NavLink>
          ))}

          {/* Login button mobile */}
          <button className="bg-linear-to-r from-red-500 to-orange-500 
          text-white px-6 py-2 rounded-full font-bold shadow-md">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;