"use client";
import { Code2, Palette, Cpu, Layout } from "lucide-react";

const trendingSkills = [
  { name: "Web Development", icon: <Layout size={36} />, desc: "Learn how to build websites using React, Next.js and Tailwind." },
  { name: "UI/UX Design", icon: <Palette size={36} />, desc: "Master the art of creating beautiful and user-friendly interfaces." },
  { name: "Machine Learning", icon: <Cpu size={36} />, desc: "Understand ML concepts and build models using Python." },
  { name: "Programming Logic", icon: <Code2 size={36} />, desc: "Improve your problem-solving skills with coding challenges." },
];

export default function SkillsPage() {
  return (
    <section className="min-h-screen bg-[#1E1E2F] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Explore <span className="text-[#8B5CF6]">Trending Skills</span>
        </h1>
        <p className="text-gray-400 mb-12">Stay updated with the latest in-demand skills to boost your learning journey.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingSkills.map((skill, index) => (
            <div key={index} className="bg-[#2A2A3D] rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
              <div className="text-[#8B5CF6] mb-4 flex justify-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
