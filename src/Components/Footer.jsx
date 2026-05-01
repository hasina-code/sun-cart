import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="relative mt-24 border-t bg-white dark:bg-[#0a0a0b]">
      
      {/* Top divider */}
      <div className="h-px w-full bg-gray-200 dark:bg-white/10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="SunCart Logo"
                width={35}
                height={35}
              />
              <h2 className="text-xl font-bold">
                Sun<span className="text-yellow-500">Cart</span>
              </h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your one-stop summer shopping destination. Stay cool, stay stylish

            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/my-profile">My Profile</Link></li>
              <li><Link href="/signin">Login</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-3">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get latest summer deals & offers.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 border rounded-l-md text-sm outline-none"
              />
              <button className="px-4 bg-black text-white text-sm rounded-r-md">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SunCart. All rights reserved.</p>

          <div className="flex gap-5 mt-3 md:mt-0">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;