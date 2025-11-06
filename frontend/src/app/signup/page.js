"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };




  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
      return;
    }

    
    //Backedn part required
    setMessage("✅ Signup submitted (waiting for backend)");
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/herobg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Signup Card */}
      <div className="relative z-10 bg-[#1E1E2F]/90 border border-[#2A2A3D] rounded-2xl shadow-2xl p-10 w-[90%] max-w-md text-white backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Create Your <span className="text-[#8B5CF6]">SkillSync</span> Account
        </h2>

        <p className="text-gray-400 text-center mb-8 text-sm">
          Start your journey of mastering new skills 🚀
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-3 bg-[#2A2A3D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 bg-[#2A2A3D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full p-3 bg-[#2A2A3D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full p-3 bg-[#2A2A3D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-white placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all duration-200 rounded-lg font-semibold text-lg shadow-lg hover:shadow-[#8B5CF6]/30"
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
        )}

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-[#8B5CF6] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
