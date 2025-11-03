//reuseable card component for skill page

"use client";

export default function SkillCard({ skill }) {
  return (
    <div className="bg-[#242437] border border-[#2A2A3D] rounded-2xl p-6 text-left hover:-translate-y-2 transition-all duration-300">
      <div className="text-4xl mb-3">{skill.icon}</div>
      <h3 className="text-xl font-semibold text-[#8B5CF6] mb-2">{skill.name}</h3>
      <p className="text-gray-400 text-sm mb-3">{skill.category}</p>
      <p className="text-gray-300 text-sm mb-3">{skill.description}</p>
      <p className="text-gray-400 text-sm italic">Level: {skill.level}</p>
    </div>
  );
}
