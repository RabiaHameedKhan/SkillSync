"use client";

import { useState } from "react";
import useCheckUser from "@/lib/checkUser";
import useFetch from "@/hooks/useFetch";
import { supabase } from "@/lib/supabaseClient";

export default function TrackPage() {
  const { user, loading } = useCheckUser();
  const { data: predefinedSkills, loading: skillsLoading } = useFetch("/data/skills.json");

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [milestones, setMilestones] = useState([]);
  const [progress, setProgress] = useState(0);

  // Load saved progress from Supabase
  const loadUserProgress = async (skill) => {
    if (!user) return;

    const { data, error } = await supabase
      .from("skill_progress")
      .select("*")
      .eq("user_id", user.id)
      .eq("skill_id", skill.id)
      .single();

    if (error) {
      console.error("Error loading progress:", error);
    }

    if (data) {
      setMilestones(data.milestones);
      setProgress(data.progress);
    } else {
      // fresh milestones if no data
      const fresh = skill.milestones.map((m) => ({ name: m, completed: false }));
      setMilestones(fresh);
      setProgress(0);
    }
  };

  // Save progress to Supabase
  
  const saveUserProgress = async (updatedMilestones) => {
    if (!user || !selectedSkill) return;

    const completedCount = updatedMilestones.filter((m) => m.completed).length;
    const percent = Math.round((completedCount / updatedMilestones.length) * 100);

    setProgress(percent);

    const { data, error } = await supabase
      .from("skill_progress")
      .upsert(
        {
          user_id: user.id,
          skill_id: selectedSkill.id,
          milestones: updatedMilestones,
          progress: percent,
        },
        { onConflict: ["user_id", "skill_id"] } 
      );

    if (error) console.error("Supabase upsert error:", error);
    else console.log("Saved progress:", data);
  };

  // Select a skill
  
  const handleSelectSkill = async (skill) => {
    setSelectedSkill(skill);
    await loadUserProgress(skill);
  };

  // Toggle milestone completion
  
  const toggleMilestone = async (index) => {
    const updated = [...milestones];
    updated[index].completed = !updated[index].completed;
    setMilestones(updated);
    await saveUserProgress(updated);
  };

  // Calculate progress
  const currentProgress =
    milestones.length > 0
      ? Math.round((milestones.filter((m) => m.completed).length / milestones.length) * 100)
      : 0;

  // Render loading / login
  
  if (loading || skillsLoading) {
    return <div className="text-center text-white p-10">Loading your tracker...</div>;
  }

  if (!user) {
    return (
      <div className="text-center text-white p-10">
        Please log in to access your Skill Tracker.
      </div>
    );
  }


  // Render component
  return (
    <section className="min-h-screen bg-[#1E1E2F] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Track Your <span className="text-[#8B5CF6]">Learning Progress</span>
        </h1>
        <p className="text-gray-400 mb-12">
          Level up! Pick a skill and mark your progress as you grow.
        </p>

        {/* Skill Selection */}
        {!selectedSkill ? (
          <div>
            <h2 className="text-xl font-semibold mb-6">Select a Skill to Track</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {predefinedSkills?.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => handleSelectSkill(skill)}
                  className="bg-[#2A2A3D] hover:bg-[#3A3A4D] p-5 rounded-xl transition-all text-left"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{skill.category}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Selected Skill Section */}
            <h2 className="text-2xl font-semibold mb-2 flex items-center justify-center gap-2">
              {selectedSkill.icon} {selectedSkill.name}
            </h2>
            <p className="text-gray-400 mb-6">
              Category: {selectedSkill.category} — Level: {selectedSkill.level}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-[#1E1E2F] h-4 rounded-full mb-6">
              <div
                className="h-4 bg-[#8B5CF6] rounded-full transition-all"
                style={{ width: `${currentProgress}%` }}
              ></div>
            </div>
            <p className="text-[#8B5CF6] font-semibold mb-6">
              Progress: {currentProgress}%
            </p>

            {/* Milestones */}
            <div className="bg-[#242437] p-6 rounded-2xl text-left border border-[#2A2A3D] mb-8">
              <h3 className="text-xl font-semibold mb-4">Milestones</h3>
              <ul className="space-y-3">
                {milestones.map((m, index) => (
                  <li
                    key={index}
                    onClick={() => toggleMilestone(index)}
                    className={`cursor-pointer flex items-center justify-between px-4 py-2 rounded-lg ${
                      m.completed ? "bg-[#3B3B4D] text-[#8B5CF6]" : "bg-[#2A2A3D]"
                    }`}
                  >
                    <span>{m.name}</span>
                    {m.completed && <span>✅</span>}
                  </li>
                ))}
              </ul>
            </div>

            {/* Back Button */}
            <button
              onClick={() => setSelectedSkill(null)}
              className="bg-[#2A2A3D] hover:bg-[#3A3A4D] px-6 py-2 rounded-lg text-sm"
            >
              ← Back to Skills
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
