import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const WalletContext = createContext({
  account: null as string | null,
  error: null as string | null,
  connect: () => {},
});

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const checkEthereum = () => {
    if (!window.ethereum) {
      setError("MetaMask is not installed. Please install MetaMask.");
      return false;
    }
    return true;
  };

  const connectWallet = async () => {
    if (checkEthereum()) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (checkEthereum()) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      }
    };
    checkConnection();
  }, []);

  return (
    <WalletContext.Provider value={{ account, error, connect: connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
