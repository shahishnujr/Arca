"use client";

import { Hero } from "@/app/components/Hero";
import { useWallet } from "@/contexts/useWallet";

export default function HomePage() {
  const { account, connect, error } = useWallet();

  return (
    <div>
      <Hero />
      <section className="container mx-auto text-center py-10">
        <h2 className="text-3xl font-bold">Why Donate Blood?</h2>
        <p className="mt-4 text-gray-300">
          Blood donation is a simple yet powerful way to save lives. Every drop counts!
        </p>
        {account ? (
          <div className="text-lg mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg">
            Connected Wallet: {account}
          </div>
        ) : (
          <button
            onClick={connect}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg mt-6"
          >
            Connect MetaMask Wallet
          </button>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </section>
    </div>
  );
}
