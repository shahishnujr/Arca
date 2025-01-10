"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/userContext";

export default function LoginPage() {
  const { login } = useUser();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const isAuthenticated = login(username, password);

    if (isAuthenticated) {
      router.push("/eligibility");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">Login</h1>
      <form onSubmit={handleLogin} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <label className="block mb-4">
          <span className="text-white">Username</span>
          <input
            type="text"
            className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-white">Password</span>
          <input
            type="password"
            className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
          Login
        </button>
        <p className="text-white text-center mt-4">
          Don't have an account?{" "}
          <button
            onClick={() => router.push("/register")}
            className="text-blue-400 hover:underline bg-transparent border-none cursor-pointer"
          >
            Register here
          </button>
        </p>
      </form>
    </div>
  );
}
