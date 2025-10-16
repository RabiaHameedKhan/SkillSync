"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/herobg.jpg')", // 🔹 replace with your image in /public folder
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Master New Skills, <br />
          <span className="text-[#8B5CF6]">Upgrade Your Future</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Join <span className="text-[#8B5CF6] font-medium">SkillSync</span> —
          your personalized platform to learn, track, and connect through
          real-world projects.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/join"
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold px-6 py-3 rounded-xl text-lg transition-all duration-200"
          >
            Get Started
          </Link>

          <Link
            href="/about"
            className="border border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white font-semibold px-6 py-3 rounded-xl text-lg transition-all duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>

      
    </main>
  );
}
