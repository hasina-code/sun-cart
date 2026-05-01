"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0b] dark:to-black animate-fadeIn">

      {/* top line */}
      <div className="h-px w-full bg-gray-200 dark:bg-white/10" />

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-4 hover:-translate-y-1 transition duration-300">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="SunCart Logo"
                width={38}
                height={38}
                className="hover:scale-110 transition duration-300"
              />
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Sun<span className="text-yellow-500">Cart</span>
              </h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Your one-stop summer shopping destination 
            </p>
          </div>

          {/* LINKS */}
          <div className="hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {["/", "/products", "/my-profile", "/signin"].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link}
                    className="hover:text-black dark:hover:text-white transition duration-200"
                  >
                    {link === "/" ? "Home" :
                     link === "/products" ? "Products" :
                     link === "/my-profile" ? "My Profile" : "Login"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link className="hover:translate-x-1 transition" href="/contact">Contact</Link></li>
              <li><Link className="hover:translate-x-1 transition" href="/privacy">Privacy</Link></li>
              <li><Link className="hover:translate-x-1 transition" href="/terms">Terms</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="space-y-4 hover:-translate-y-1 transition duration-300">

            <h3 className="font-bold">Stay Updated</h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get latest deals & offers.
            </p>

            <div className="flex overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 focus-within:scale-105 transition duration-300">

              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 text-sm outline-none bg-white dark:bg-black"
              />

              <button className="px-4 bg-black hover:bg-gray-800 text-white text-sm font-semibold transition hover:scale-105 active:scale-95">
                Join
              </button>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 animate-fadeUp">

          <p>© {new Date().getFullYear()} SunCart. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link className="hover:text-black dark:hover:text-white transition hover:scale-105" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-black dark:hover:text-white transition hover:scale-105" href="/terms">
              Terms
            </Link>
          </div>

        </div>

      </div>

      {/* 🔥 CUSTOM ANIMATION */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </footer>
  );
};

export default Footer;