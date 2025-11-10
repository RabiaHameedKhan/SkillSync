"use client";

import { useState } from "react";
import useCheckUser from "@/lib/checkUser";

export default function TrackPage() {
  // 🧠 Always put hooks at the very top (before any condition)
  const { user, loading } = useCheckUser();
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // 🕐 Loading state (safe to return JSX here)
  if (loading) {
    return <div className="text-center text-white p-10">Checking login...</div>;
  }

  // 🚫 If not logged in
  if (!user) {
    return (
      <div className="text-center text-white p-10">
        Please log in to access your Skill Tracker.
      </div>
    );
  }

  // ➕ Function to add new skill
  const handleAddSkill = () => {
    if (!newSkill.trim()) return;

    const newSkillObj = {
      id: Date.now(),
      name: newSkill.trim(),
      progress: 0,
    };

    setSkills([...skills, newSkillObj]);
    setNewSkill("");
  };

  // 🔼🔽 Function to update progress
  const handleProgress = (id, change) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === id
          ? { ...skill, progress: Math.min(100, Math.max(0, skill.progress + change)) }
          : skill
      )
    );
  };

  // ❌ Delete a skill
  const handleDelete = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  // 🧩 UI section
  return (
    <section className="min-h-screen bg-[#1E1E2F] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Track Your <span className="text-[#8B5CF6]">Skill Progress</span>
        </h1>
        <p className="text-gray-400 mb-12">
          Add your own skills and track your learning progress visually.
        </p>

        {/* Add New Skill Input */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a new skill (e.g., Next.js)"
            className="w-full sm:w-80 px-4 py-2 rounded-lg bg-[#2A2A3D] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:bg-[#33334A] transition-all"
          />
          <button
            onClick={handleAddSkill}
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] px-6 py-2 rounded-lg font-semibold"
          >
            Add Skill
          </button>
        </div>

        {/* Skill List */}
        <div className="space-y-6">
          {skills.length === 0 ? (
            <p className="text-gray-400">
              No skills added yet. Start by adding one above!
            </p>
          ) : (
            skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-[#242437] p-6 rounded-2xl text-left border border-[#2A2A3D]"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[#8B5CF6]">{skill.progress}%</span>
                    <button
                      onClick={() => handleDelete(skill.id)}
                      className="text-red-400 hover:text-red-500 text-sm"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-[#1E1E2F] h-3 rounded-full mb-4">
                  <div
                    className="h-3 bg-[#8B5CF6] rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => handleProgress(skill.id, -10)}
                    className="px-4 py-2 bg-[#2A2A3D] hover:bg-[#3A3A4D] rounded-lg text-sm"
                  >
                    - Progress
                  </button>
                  <button
                    onClick={() => handleProgress(skill.id, +10)}
                    className="px-4 py-2 bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg text-sm"
                  >
                    + Progress
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
