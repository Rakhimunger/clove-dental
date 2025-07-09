// components/Navbar.jsx
"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaClipboardList, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-orange-500 text-3xl font-bold italic">
          clove<span className="text-black "></span>
          <div className="text-xs font-normal tracking-widest text-black  leading-none">
            DENTAL
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-full flex items-center gap-2 transition duration-300">
            <FaClipboardList />
            Book Appointment
          </button>

          <div className="border border-gray-400 px-4 py-2 rounded-full flex items-center gap-2 text-gray-800 hover:bg-gray-100 transition duration-300">
            <FaPhoneAlt />
            <span className="text-sm">985-6589-510</span>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl text-orange-600" />
            ) : (
              <FaBars className="text-2xl text-orange-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-full flex items-center justify-center gap-2 transition duration-300">
            <FaClipboardList />
            Book Appointment
          </button>

          <div className="w-full border border-gray-400 px-4 py-2 rounded-full flex items-center justify-center gap-2 text-gray-800 hover:bg-gray-100 transition duration-300">
            <FaPhoneAlt />
            <span className="text-sm">985-6589-510</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
