"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <Link href="/" className="text-3xl font-extrabold text-blue-500 tracking-wide">
          SkillSync
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-10 text-lg font-medium">
          <Link
            href="/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/skills"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Skills
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
