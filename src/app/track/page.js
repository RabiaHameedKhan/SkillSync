"use client";
import { useState } from "react";

export default function TrackPage() {
  const [skills, setSkills] = useState([
    { id: 1, name: "React.js", progress: 60 },
    { id: 2, name: "Python", progress: 40 },
    { id: 3, name: "Data Science", progress: 25 },
  ]);

  const handleProgress = (id, change) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === id
          ? { ...skill, progress: Math.min(100, Math.max(0, skill.progress + change)) }
          : skill
      )
    );
  };

  return (
    <section className="min-h-screen bg-[#1E1E2F] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Track Your <span className="text-[#8B5CF6]">Skill Progress</span>
        </h1>
        <p className="text-gray-400 mb-12">
          Stay motivated and measure your learning progress visually.
        </p>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#242437] p-6 rounded-2xl text-left border border-[#2A2A3D]"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-[#8B5CF6]">{skill.progress}%</span>
              </div>

              <div className="w-full bg-[#1E1E2F] h-3 rounded-full mb-4">
                <div
                  className="h-3 bg-[#8B5CF6] rounded-full"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => handleProgress(skill.id, -10)}
                  className="px-4 py-2 bg-[#2A2A3D] hover:bg-[#3A3A4D] rounded-lg text-sm"
                >
                  - Decrease
                </button>
                <button
                  onClick={() => handleProgress(skill.id, +10)}
                  className="px-4 py-2 bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg text-sm"
                >
                  + Increase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
