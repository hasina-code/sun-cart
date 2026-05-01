"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 animate__animated animate__pulse animate__infinite animate__slow">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
          />

          <h3 className="font-black text-2xl">
            Sun<span className="text-yellow-500">Cart</span>
          </h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>

          <Link href="/products" className="hover:text-blue-500">
            Products
          </Link>

          <Link href="/my-profile" className="hover:text-blue-500">
            My Profile
          </Link>

          <Link
            href="/signin"
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>

          <Link href="/my-profile" onClick={() => setOpen(false)}>
            My Profile
          </Link>

          <Link
            href="/signin"
            className="border px-4 py-2 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-black text-white px-4 py-2 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;