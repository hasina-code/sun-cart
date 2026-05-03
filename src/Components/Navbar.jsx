"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    setOpen(false);
  };

  return (
    <div className=" shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 group  transition duration-500 
            animate__animated animate__pulse animate__infinite animate__slow">
          <Image
            src="/logo.png"
            alt="logo"
            width={38}
            height={38}
            className="group-hover:rotate-12 transition-transform duration-300"
          />
          <h3 className="font-black text-xl md:text-2xl tracking-tight">
            Sun<span className="text-yellow-500">Cart</span>
          </h3>
        </div>

        {/* DESKTOP & TABLET MENU */}
        <ul className="hidden md:flex items-center lg:gap-8 md:gap-4 text-sm lg:text-base font-semibold">
          <li>
            <Link className="text-gray-700 hover:text-yellow-600 transition-colors" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-gray-700 hover:text-yellow-600 transition-colors" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="text-gray-700 hover:text-yellow-600 transition-colors" href="/my-profile">
              My Profile
            </Link>
          </li>
        </ul>

        {/* AUTH DESKTOP - Buttons Updated to Black/Gray */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <div className="flex items-center gap-3">
              <Link className="text-sm font-bold px-4 py-2 text-gray-700 hover:text-black transition" href="/login">
                Login
              </Link>
              <Link className="text-sm font-bold bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 shadow-sm transition" href="/register">
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 bg-white/50 p-1 pr-3 rounded-full border border-yellow-200">
              <Image
                src={user?.image || "/user.png"}
                alt="user"
                width={32}
                height={32}
                className="rounded-full border-2 border-yellow-400"
              />
              <span className="text-xs lg:text-sm font-bold truncate max-w-[100px]">
                {user?.name?.split(' ')[0]}
              </span>
              <button
                onClick={handleLogout}
                className="text-gray-600 text-xs font-black uppercase hover:text-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-800 p-1"
          aria-label="Toggle Menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU - Buttons Updated to Black/Gray */}
      <div className={`
        md:hidden absolute w-full bg-white border-b shadow-xl transition-all duration-300 ease-in-out
        ${open ? "top-[100%] opacity-100 visible" : "top-[110%] opacity-0 invisible"}
      `}>
        <div className="flex flex-col p-5 space-y-4 font-bold text-gray-700">
          <Link onClick={() => setOpen(false)} href="/" className="hover:text-yellow-500 py-2 border-b border-gray-50">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} href="/products" className="hover:text-yellow-500 py-2 border-b border-gray-50">
            Products
          </Link>
          <Link onClick={() => setOpen(false)} href="/my-profile" className="hover:text-yellow-500 py-2 border-b border-gray-50">
            My Profile
          </Link>

          {!user ? (
            <div className="flex flex-col gap-3 pt-2">
              <Link href="/login" onClick={() => setOpen(false)} className="text-center py-3 border border-black rounded-xl text-black">
                Login
              </Link>
              <Link href="/register" onClick={() => setOpen(false)} className="text-center py-3 bg-black text-white rounded-xl shadow-md hover:bg-gray-800">
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <Image
                  src={user?.image || "/user.png"}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-yellow-500"
                />
                <span className="font-bold text-black">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-bold bg-gray-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;