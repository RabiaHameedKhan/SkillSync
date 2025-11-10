"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient"; // adjust path if needed

export default function Footer() {
  const [user, setUser] = useState(null);

  // ✅ Check session and listen to auth changes
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user || null);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  // All links
  const allLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Track Skill", path: "/track" },
    { name: "Community", path: "/community" },
    { name: "About", path: "/#about" },
  ];

  // Public links (not logged in)
  const publicLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/#about" },
  ];

  const navLinks = user ? allLinks : publicLinks;

  return (
    <footer className="bg-[#1E1E2F] border-t border-[#2A2A3D] text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Brand / Logo */}
        <Link href="/" className="text-2xl font-semibold text-white tracking-wide">
          <span className="text-[#8B5CF6] font-bold">Skill</span>Sync
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="hover:text-[#8B5CF6] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-[#8B5CF6] transition-colors duration-200">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="hover:text-[#8B5CF6] transition-colors duration-200">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="hover:text-[#8B5CF6] transition-colors duration-200">
            <i className="fab fa-github text-xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-[#2A2A3D] pt-6">
        © {new Date().getFullYear()} SkillSync. By Rabia Khan. All rights reserved.
      </div>
    </footer>
  );
}
