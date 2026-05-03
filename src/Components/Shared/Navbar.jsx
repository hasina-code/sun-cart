"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

        {/* Desktop Nav */}
        <NavLinks type="desktop" />

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-800 p-1"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden absolute w-full bg-white border-b shadow-xl transition-all duration-300 ease-in-out
          ${open ? "top-[100%] opacity-100 visible" : "top-[110%] opacity-0 invisible"}
        `}
      >
        <NavLinks type="mobile" setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;