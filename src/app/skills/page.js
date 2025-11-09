"use client";

import useFetch from "../../hooks/useFetch"; //custom hook to fetch the json static data
import SkillCard from "../../components/SkillCard";


export default function SkillsPage() {
  const { data: skills, loading, error } = useFetch("/data/skills.json");

  return (
    <section className="min-h-screen bg-[#1E1E2F] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Explore <span className="text-[#8B5CF6]">Trending Skills</span></h1>
        <p className="text-gray-400 mb-12">Stay updated with the latest in-demand skills.</p>

        {loading && <p className="text-gray-300">Loading skills...</p>}
        {error && <p className="text-red-400">Failed to load skills. Try again later.</p>}

        {!loading && !error && skills && skills.length === 0 && (
          <p className="text-gray-400">No skills available at the moment.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading && !error && skills && skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
