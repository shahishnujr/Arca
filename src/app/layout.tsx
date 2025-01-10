"use client";

import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { WalletProvider } from "@/contexts/useWallet";
import { UserProvider } from "@/contexts/userContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white">
        {/* Wrapping the app with both UserProvider and WalletProvider */}
        <UserProvider>
          <WalletProvider>
            {/* Floating 3D Shapes */}
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>

            {/* Navbar */}
            <header>
              <Navbar />
            </header>

            {/* Main Content */}
            <main className="min-h-screen flex flex-col justify-center items-center">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </WalletProvider>
        </UserProvider>
      </body>
    </html>
  );
}
