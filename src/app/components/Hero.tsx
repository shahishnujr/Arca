"use client";

import { useWallet } from "@/contexts/useWallet";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const { account, connect } = useWallet();
  const router = useRouter();

  const handleDonateClick = () => {
    if (!account) {
      alert("Please connect your wallet first!");
      return;
    }
    // Redirect to login page instead of donate
    router.push("/login");
  };

  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6 text-primary">Donate Blood</h1>
      <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
        Join our mission to save lives. Register as a donor and contribute to
        making the world a better place.
      </p>
      {account ? (
        <div className="mb-6">
          <p className="text-lg">Connected Wallet: {account}</p>
        </div>
      ) : (
        <button
          onClick={connect}
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition mb-6"
        >
          Connect MetaMask Wallet
        </button>
      )}
      <button
        onClick={handleDonateClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition"
      >
        Donate Now
      </button>
    </section>
  );
};
