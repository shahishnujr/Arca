"use client";

import React, { createContext, useContext, useState } from "react";

type UserContextType = {
  user: { username: string; password: string } | null;
  register: (username: string, password: string) => void;
  login: (username: string, password: string) => boolean;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ username: string; password: string } | null>(null);

  const register = (username: string, password: string) => {
    setUser({ username, password });
  };

  const login = (username: string, password: string) => {
    if (user && user.username === username && user.password === password) {
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider value={{ user, register, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
