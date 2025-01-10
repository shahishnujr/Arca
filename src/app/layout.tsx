"use client";

import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { WalletProvider } from "@/contexts/useWallet";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white">
        <WalletProvider>
          {/* Floating 3D Shapes */}
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>

          <header>
            <Navbar />
          </header>
          <main className="min-h-screen flex flex-col justify-center items-center">
            {children}
          </main>
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}
