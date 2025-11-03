"use client";
import { useState, useEffect } from "react";

export default function TrackPage() {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState("");

  // Load saved skills
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("skills")) || [];
    setSkills(saved);
  }, []);

  // Save new skill
  const addSkill = () => {
    if (input.trim()) {
      const updated = [...skills, { name: input, progress: 0 }];
      setSkills(updated);
      localStorage.setItem("skills", JSON.stringify(updated));
      setInput("");
    }
  };

  return (
    <section className="min-h-screen bg-[#1E1E2F] text-white py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          Track Your <span className="text-[#8B5CF6]">Skills</span>
        </h1>
        <div className="flex gap-2 justify-center mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a skill you're learning..."
            className="w-full max-w-md px-4 py-2 rounded-lg bg-[#2A2A3D] border border-[#3B3B4F] text-white focus:outline-none focus:border-[#8B5CF6]"
          />
          <button
            onClick={addSkill}
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] px-5 py-2 rounded-lg font-medium transition"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {skills.map((s, i) => (
            <div key={i} className="bg-[#2A2A3D] p-4 rounded-lg flex justify-between items-center">
              <span>{s.name}</span>
              <span className="text-sm text-gray-400">Progress: {s.progress}%</span>
            </div>
          ))}
          {skills.length === 0 && <p className="text-gray-400">No skills added yet.</p>}
        </div>
      </div>
    </section>
  );
}
