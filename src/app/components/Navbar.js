"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Track Skill", path: "/track" },
    { name: "About", path: "#about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1E1E2F]/90 backdrop-blur-md border-b border-[#2A2A3D]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-white tracking-wide"
        >
          <span className="text-[#8B5CF6] font-extrabold">Skill</span>Sync
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-lg text-gray-300 hover:text-[#8B5CF6] transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/join"
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold px-5 py-2.5 rounded-xl text-lg transition-all duration-200"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E1E2F] border-t border-[#2A2A3D]">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold px-5 py-2.5 rounded-xl text-center text-lg transition-all duration-200"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
