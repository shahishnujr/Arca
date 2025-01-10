"use client";

import { useWallet } from "@/contexts/useWallet";
import { Hero } from "@/app/components/Hero";
export default function HomePage() {
  const { account, connect, error } = useWallet(); // MetaMask wallet context

  return (
    <div>
      <Hero />
      <section className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Why Donate Blood?</h2>
        <p className="mt-4 text-gray-300">
          Blood donation is a simple yet powerful way to save lives. Every drop
          counts!
        </p>
      </section>
      <section className="flex flex-col items-center justify-center py-10">
        <h2 className="text-2xl font-semibold mb-4">
          Connect Your MetaMask Wallet
        </h2>
        {account ? (
          <div className="text-lg bg-gray-800 text-white px-6 py-3 rounded-lg">
            Wallet Connected: {account}
          </div>
        ) : (
          <button
            onClick={connect}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition"
          >
            Connect MetaMask Wallet
          </button>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </section>
    </div>
  );
}
