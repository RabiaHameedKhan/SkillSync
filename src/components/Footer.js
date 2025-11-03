
import Link from "next/link";

export default function Footer () {
return(





<footer className="bg-[#1E1E2F] border-t border-[#2A2A3D] text-gray-400 py-10 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
    {/* Brand / Logo */}
    <Link href="/" className="text-2xl font-semibold text-white tracking-wide">
      <span className="text-[#8B5CF6] font-bold">Skill</span>Sync
    </Link>

    {/* Nav Links */}
    <div className="flex space-x-6">
      <Link
        href="/"
        className="hover:text-[#8B5CF6] transition-colors duration-200"
      >
        Home
      </Link>

      <Link
        href="/skills"
        className="hover:text-[#8B5CF6] transition-colors duration-200"
      >
        Skills
      </Link>
      <Link
        href="/#about"
        className="hover:text-[#8B5CF6] transition-colors duration-200"
      >
        About
      </Link>

      <Link
        href="/track"
        className="hover:text-[#8B5CF6] transition-colors duration-200"
      >
        Track Skills
      </Link>
    </div>

    {/* Social Icons */}
    <div className="flex space-x-4">
      <a
        href="#"
        className="hover:text-[#8B5CF6] transition-colors duration-200"
      >
        <i className="fab fa-twitter text-xl"></i>
      </a>
      <a
        href="#"
        className="hover:text-[#8B5CF6] transition-colors duration-200"
      >
        <i className="fab fa-linkedin text-xl"></i>
      </a>
      <a
        href="#"
        className="hover:text-[#8B5CF6] transition-colors duration-200"
      >
        <i className="fab fa-github text-xl"></i>
      </a>
    </div>
  </div>

  {/* Bottom Text */}
  <div className="text-center text-sm text-gray-500 mt-8 border-t border-[#2A2A3D] pt-6">
    © {new Date().getFullYear()} SkillSync. All rights reserved.
  </div>
</footer>

);

}
