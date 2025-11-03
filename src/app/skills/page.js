"use client";
import { Layout, Database, Palette, Brain, Cpu, Code2 } from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    icon: Layout,
    desc: "Building modern, responsive interfaces using Next.js and Tailwind CSS.",
  },
  {
    name: "Backend Development",
    icon: Database,
    desc: "Creating efficient APIs and backend logic with Node.js and Express.",
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    desc: "Designing beautiful, intuitive layouts that enhance user experience.",
  },
  {
    name: "Problem Solving",
    icon: Brain,
    desc: "Strong understanding of data structures and algorithms to solve complex problems.",
  },
  {
    name: "Machine Learning",
    icon: Cpu,
    desc: "Exploring AI models and integrating ML logic into real-world projects.",
  },
  {
    name: "Programming Languages",
    icon: Code2,
    desc: "Proficient in JavaScript, Python, and C++ for full-stack solutions.",
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">My Skills</h1>
        <div className="w-24 h-1 bg-purple-400 mx-auto mb-6 rounded-full"></div>
        <p className="text-purple-200 max-w-2xl mx-auto mb-12">
          Here’s a look at the tools and technologies I use to turn ideas into
          real, interactive experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 flex flex-col items-center text-center"
              >
                <Icon size={40} className="text-purple-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-purple-200 text-sm">{skill.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
