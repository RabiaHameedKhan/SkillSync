"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient"; // adjust path if needed

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("⚠️ Please fill in all fields");
      return;
    }

    setLoading(true);
    setMessage("");

    // Supabase authentication
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(`❌ ${error.message}`);
      setLoading(false);
    } else {
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => router.push("/"), 1000);
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/herobg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-[#1E1E2F]/90 border border-[#2A2A3D] rounded-2xl shadow-2xl p-10 w-[90%] max-w-md text-white backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Welcome to <span className="text-[#8B5CF6]">SkillSync</span>
        </h2>

        <p className="text-gray-400 text-center mb-8 text-sm">
          Log in to continue your learning journey 🌟
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-3 bg-[#2A2A3D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 bg-[#2A2A3D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-white placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-lg shadow-lg transition-all duration-200 ${
              loading
                ? "bg-[#8B5CF6]/50 cursor-not-allowed"
                : "bg-[#8B5CF6] hover:bg-[#7C3AED] hover:shadow-[#8B5CF6]/30"
            }`}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
        )}

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#8B5CF6] hover:underline">
              Sign up
            </Link>
          </p>
          <p className="mt-2">
            <Link
              href="/forgot-password"
              className="text-gray-400 hover:text-[#8B5CF6]"
            >
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
