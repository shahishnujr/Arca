"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/userContext";

export default function RegisterPage() {
  const { register } = useUser();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    register(username, password);
    alert("Registration successful! You can now log in.");
    router.push("/login");
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">Register</h1>
      <form onSubmit={handleRegister} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
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
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">
          Register
        </button>
      </form>
    </div>
  );
}
