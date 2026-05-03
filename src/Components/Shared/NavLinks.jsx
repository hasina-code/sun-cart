"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const NavLinks = ({ type, setOpen }) => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    if (setOpen) setOpen(false);
  };

  
  // DESKTOP
 
  if (type === "desktop") {
    return (
      <>
        {/* LOGO */}
        <div className="flex items-center gap-2 ">
          <Image src="/logo.png" alt="logo" width={38} height={38} />
          <h3 className="font-black text-xl">
            Sun<span className="text-orange-300">Cart</span>
          </h3>
        </div>

        {/* LINKS */}
        <ul className="hidden md:flex items-center gap-6 font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/my-profile">My Profile</Link></li>
        </ul>

        {/* AUTH */}
        <div className="hidden md:flex items-center gap-4">

          {!user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
              <Link className="text-sm font-bold px-4 py-2 text-gray-700 hover:text-black transition" href="/login">
                Login
              </Link>
              <Link className="text-sm font-bold bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 shadow-sm transition" href="/register">
                Register
              </Link>
            </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-full">

              <Image
                src={user?.image || "/user.png"}
                alt="user"
                width={32}
                height={32}
                className="rounded-full border-2 border-yellow-400"
              />

              <span className="text-sm font-bold">
                {user?.name?.split(" ")[0]}
              </span>

              <button
                onClick={handleLogout}
                className="bg-black text-white px-3 py-1 rounded-md text-xs font-bold"
              >
                Logout
              </button>

            </div>
          )}

        </div>
      </>
    );
  }

  // MOBILE

  return (
    <div className="flex flex-col p-5 space-y-4 font-bold text-gray-700">

      <Link onClick={() => setOpen(false)} href="/">Home</Link>
      <Link onClick={() => setOpen(false)} href="/products">Products</Link>
      <Link onClick={() => setOpen(false)} href="/my-profile">My Profile</Link>

      {!user ? (
        <div className="flex flex-col gap-3 pt-2">
              <Link href="/login"  className="text-center py-3 border border-black rounded-xl text-black">
                Login
              </Link>
              <Link href="/register" className="text-center py-3 bg-black text-white rounded-xl shadow-md hover:bg-gray-800">
                Register
              </Link>
            </div>
      ) : (
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl">

          <div className="flex items-center gap-3">
            <Image
              src={user?.image || "/user.png"}
              alt="user"
              width={40}
              height={40}
              className="rounded-full border-2 border-yellow-500"
            />
            <span className="font-bold text-black">
              {user?.name}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="bg-black text-white px-3 py-2 rounded-lg text-sm font-bold"
          >
            Logout
          </button>

        </div>
      )}

    </div>
  );
};

export default NavLinks;