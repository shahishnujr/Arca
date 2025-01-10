"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-lg fixed top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Blood Donation
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/donate" className="hover:text-primary">
            Donate
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
