//Home Page (contains about section too)


"use client";
import Link from "next/link";
import { BookOpen, BarChart3, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="relative min-h-screen flex items-center justify-center text-center text-white scroll-smooth">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('images/herobg.jpg')", // Image in /public folder
          }}
        />

        
        <div className="absolute inset-0 bg-black/60"></div>

       
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master New Skills, <br />
            <span className="text-[#8B5CF6]">Upgrade Your Future</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Join <span className="text-[#8B5CF6] font-medium">SkillSync</span> — your personalized platform to learn, track, and connect through real-world projects.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/login"
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold px-6 py-3 rounded-xl text-lg transition-all duration-200"
            >
              Get Started
            </Link>

            {/* About link scrolls to #about */}
            <Link
              href="#about"
              className="border border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white font-semibold px-6 py-3 rounded-xl text-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-[#1E1E2F] py-20 px-6 text-white flex flex-col items-center justify-center text-center"
      >
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-[#8B5CF6]">SkillSync</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            <span className="text-[#8B5CF6] font-medium">SkillSync</span> is a modern learning platform built to help learners focus on practical skill development.
            Instead of watching endless tutorials, users can discover trending skills, track their growth, and connect with a like-minded community.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you are a student, developer, or professional — SkillSync helps you
            stay updated with the latest technologies and provides you with the insights
            you need to make smart learning decisions.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-[#242437] py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-[#8B5CF6]">SkillSync</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A modern platform designed to make learning skills practical, engaging, and data-driven.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-[#1E1E2F] border border-[#2A2A3D] rounded-2xl p-8 shadow-md hover:-translate-y-2 transition-all duration-300">
            <BookOpen className="w-12 h-12 text-[#8B5CF6] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
            <p className="text-gray-400">
              Get curated skill suggestions and track your growth based on interest and progress.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1E1E2F] border border-[#2A2A3D] rounded-2xl p-8 shadow-md hover:-translate-y-2 transition-all duration-300">
            <BarChart3 className="w-12 h-12 text-[#8B5CF6] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
            <p className="text-gray-400">
              Discover which skills are trending in the market and stay ahead in your career.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1E1E2F] border border-[#2A2A3D] rounded-2xl p-8 shadow-md hover:-translate-y-2 transition-all duration-300">
            <Users className="w-12 h-12 text-[#8B5CF6] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-400">
              Connect with learners, share progress, and collaborate on real projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
